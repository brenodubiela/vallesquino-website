"use client";

import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { CheckCheck, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DateTimeField } from "@/components/ui/date-time-field";
import { Field } from "@/components/ui/field";
import { Input, Textarea } from "@/components/ui/input";
import { TagSelect } from "@/components/ui/tag-select";
import { perfis, servicosDeInteresse } from "@/data/contato";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const defaultValues = {
  nome: "",
  email: "",
  whatsapp: "",
  perfil: "",
  perfilOutro: "",
  servico: "",
  objetivo: "",
  dataHorario: "",
  website: "",
};

function formatWhatsapp(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues, mode: "onTouched" });

  const perfil = useWatch({ control, name: "perfil" });
  const describedBy = (name) => (errors[name] ? `${name}-erro` : undefined);

  const onSubmit = async (data) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, urlPagina: window.location.href }),
      });
      if (!response.ok) throw new Error("Falha no envio");
      setStatus("success");
      reset(defaultValues);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-6 rounded-form border border-field-border bg-surface p-6">
        <span className="inline-flex size-10 items-center justify-center rounded-card bg-olive">
          <CheckCheck aria-hidden="true" className="size-4 text-primary" />
        </span>
        <div className="flex flex-col gap-2">
          <p className="font-display text-title text-olive">Pré-agendamento recebido!</p>
          <p className="font-sans text-body-sm text-ink">
            Obrigado pelo contato. Vamos analisar as informações e retornar em breve para confirmar a data e o horário da
            sua consultoria gratuita.
          </p>
        </div>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar outro formulário
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Formulário de pré-agendamento da consultoria gratuita"
      className="relative flex flex-col rounded-form border border-field-border bg-surface"
    >
      <div className="flex flex-col gap-4 p-6">
        <Field id="nome" label="Nome Completo" required error={errors.nome?.message}>
          <Input
            id="nome"
            autoComplete="name"
            placeholder="Pedro Dutra"
            aria-invalid={errors.nome ? true : undefined}
            aria-describedby={describedBy("nome")}
            {...register("nome", {
              required: "Informe seu nome completo.",
              minLength: { value: 3, message: "Informe seu nome completo." },
            })}
          />
        </Field>

        <Field id="email" label="E-mail:" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Pedro.Duarte@gmail.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            {...register("email", {
              validate: (value, values) => {
                if (value && !EMAIL_PATTERN.test(value)) return "Informe um e-mail válido.";
                if (!value && !values.whatsapp) return "Informe um e-mail ou WhatsApp para retorno.";
                return true;
              },
            })}
          />
        </Field>

        <Field id="whatsapp" label="WhatsApp:" error={errors.whatsapp?.message}>
          <Controller
            name="whatsapp"
            control={control}
            rules={{
              deps: ["email"],
              validate: (value) =>
                !value || value.replace(/\D/g, "").length >= 10 || "Informe o WhatsApp com DDD.",
            }}
            render={({ field }) => (
              <Input
                id="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="(DD) 9XXXX-XXXX"
                aria-invalid={errors.whatsapp ? true : undefined}
                aria-describedby={describedBy("whatsapp")}
                name={field.name}
                ref={field.ref}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(formatWhatsapp(event.target.value))}
              />
            )}
          />
        </Field>

        <Field id="perfil" label="Perfil do Solicitante:" error={errors.perfil?.message}>
          <Controller
            name="perfil"
            control={control}
            render={({ field }) => (
              <TagSelect
                id="perfil"
                options={perfis}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                invalid={Boolean(errors.perfil)}
                describedBy={describedBy("perfil")}
              />
            )}
          />
        </Field>

        {perfil === "Outro" && (
          <Field id="perfilOutro" label="Qual é o seu perfil?" required error={errors.perfilOutro?.message}>
            <Input
              id="perfilOutro"
              placeholder="Ex.: Médico do trabalho, corretora de seguros..."
              aria-invalid={errors.perfilOutro ? true : undefined}
              aria-describedby={describedBy("perfilOutro")}
              {...register("perfilOutro", {
                validate: (value, values) =>
                  values.perfil !== "Outro" || value.trim().length > 1 || "Descreva o seu perfil.",
              })}
            />
          </Field>
        )}

        <Field id="servico" label="Serviço de Interesse:" error={errors.servico?.message}>
          <Controller
            name="servico"
            control={control}
            render={({ field }) => (
              <TagSelect
                id="servico"
                options={servicosDeInteresse}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                invalid={Boolean(errors.servico)}
                describedBy={describedBy("servico")}
              />
            )}
          />
        </Field>

        <Field id="objetivo" label="Objetivo do Contato:" error={errors.objetivo?.message}>
          <Textarea
            id="objetivo"
            placeholder="Descreva brevemente a situação atual, o contexto do caso ou o objetivo da consultoria."
            aria-invalid={errors.objetivo ? true : undefined}
            aria-describedby={describedBy("objetivo")}
            {...register("objetivo", { maxLength: { value: 2000, message: "Use no máximo 2.000 caracteres." } })}
          />
        </Field>

        <Field
          id="dataHorario"
          label="Selecione a Data e o Horário para a Reunião (30 min):"
          error={errors.dataHorario?.message}
        >
          <Controller
            name="dataHorario"
            control={control}
            rules={{
              validate: (value) =>
                !value || new Date(value) > new Date() || "Escolha uma data e um horário futuros.",
            }}
            render={({ field }) => (
              <DateTimeField
                id="dataHorario"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                invalid={Boolean(errors.dataHorario)}
                describedBy={describedBy("dataHorario")}
              />
            )}
          />
        </Field>

        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="website">Não preencha este campo</label>
          <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>
      </div>

      <div className="-mt-1 flex flex-col gap-3 px-6 pb-5">
        {status === "error" && (
          <p role="alert" className="font-sans text-body-sm text-danger">
            Não foi possível enviar agora. Tente novamente em alguns instantes.
          </p>
        )}
        <Button type="submit" disabled={status === "sending"} className="w-full">
          {status === "sending" && <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />}
          {status === "sending" ? "Enviando..." : "Enviar formulário"}
        </Button>
      </div>
    </form>
  );
}
