import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const symbol = await readFile(join(process.cwd(), "public/brand/symbol-gold.svg"), "base64");

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2D3114",
        }}
      >
        <img src={`data:image/svg+xml;base64,${symbol}`} width={128} height={70} alt="" />
      </div>
    ),
    size,
  );
}
