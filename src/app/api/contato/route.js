import { NextResponse } from "next/server";
import { perfis, servicosDeInteresse } from "@/data/contato";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const MAX_BODY_BYTES = 10 * 1024;
const WEBHOOK_TIMEOUT_MS = 8000;
const requestsByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const isRecent = (timestamp) => now - timestamp < RATE_LIMIT.windowMs;

  // Evita que o mapa cresça sem limite em instâncias de longa duração.
  if (requestsByIp.size > 1000) {
    for (const [key, timestamps] of requestsByIp) {
      if (!timestamps.some(isRecent)) requestsByIp.delete(key);
    }
  }

  const recent = (requestsByIp.get(ip) ?? []).filter(isRecent);
  recent.push(now);
  requestsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

function isSameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === (request.headers.get("x-forwarded-host") ?? request.headers.get("host"));
  } catch {
    return false;
  }
}

function clean(value, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validate(body) {
  const data = {
    nome: clean(body.nome, 120),
    email: clean(body.email, 160),
    whatsapp: clean(body.whatsapp, 20),
    perfil: clean(body.perfil, 80),
    perfilOutro: clean(body.perfilOutro, 120),
    servico: clean(body.servico, 120),
    objetivo: clean(body.objetivo, 2000),
    dataHorario: clean(body.dataHorario, 20),
    urlPagina: clean(body.urlPagina, 300),
  };

  if (data.nome.length < 3) return null;
  if (!data.email && !data.whatsapp) return null;
  if (data.email && !EMAIL_PATTERN.test(data.email)) return null;
  if (data.whatsapp && data.whatsapp.replace(/\D/g, "").length < 10) return null;
  if (data.perfil && !perfis.includes(data.perfil)) return null;
  if (data.perfil === "Outro" && data.perfilOutro.length < 2) return null;
  if (data.servico && !servicosDeInteresse.includes(data.servico)) return null;
  if (data.dataHorario && Number.isNaN(new Date(data.dataHorario).getTime())) return null;

  return data;
}

export async function POST(request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Origem não permitida." }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 415 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconhecido";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Muitas tentativas. Tente novamente mais tarde." }, { status: 429 });
  }

  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Requisição muito grande." }, { status: 413 });
  }

  let body;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Requisição muito grande." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  if (body?.website) {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  const data = validate(body ?? {});
  if (!data) {
    return NextResponse.json({ ok: false, error: "Verifique os campos do formulário." }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[contato] N8N_WEBHOOK_URL não configurada — lead não encaminhado.");
    return NextResponse.json({ ok: false, error: "Envio indisponível no momento." }, { status: 503 });
  }

  const payload = {
    nome: data.nome,
    email: data.email,
    telefone: data.whatsapp,
    perfil: data.perfil === "Outro" ? `Outro: ${data.perfilOutro}` : data.perfil,
    servico: data.servico,
    mensagem: data.objetivo,
    dataHorarioPreferido: data.dataHorario,
    origem: "site",
    urlPagina: data.urlPagina,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
    if (!response.ok) throw new Error(`Webhook respondeu ${response.status}`);
  } catch (error) {
    console.error("[contato] Falha ao encaminhar para o n8n:", error);
    return NextResponse.json({ ok: false, error: "Não foi possível enviar agora." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
