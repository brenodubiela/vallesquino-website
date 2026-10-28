import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Vallesquino Health — Inteligência Ocupacional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const swaraga = await readFile(join(process.cwd(), "src/app/fonts/SwaragaDemo-Bold.ttf"));
const symbol = await readFile(join(process.cwd(), "public/brand/symbol-gold.svg"), "base64");

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#2D3114",
          position: "relative",
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${symbol}`}
          width={720}
          height={394}
          alt=""
          style={{ position: "absolute", right: -80, bottom: -40 }}
        />
        <div style={{ display: "flex", fontFamily: "Swaraga", fontSize: 40, color: "#F4E9D4" }}>Vallesquino Health</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 720,
            marginTop: 24,
            fontFamily: "Swaraga",
            fontSize: 72,
            lineHeight: 1.1,
            color: "#FFFFFF",
          }}
        >
          <span style={{ color: "#E5AC5E", marginRight: 18 }}>Inteligência</span>
          <span>Ocupacional</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Swaraga", data: swaraga, weight: 700, style: "normal" }],
    },
  );
}
