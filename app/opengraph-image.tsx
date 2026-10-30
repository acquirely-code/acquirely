import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Site-wide share preview (WhatsApp, LinkedIn, Slack, X). Pages without their own image fall back to this.
export const alt = "Acquirely: full-funnel growth agency for D2C and lead-gen brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATS = [
  { value: "Up to 5x", label: "revenue in 90 days" },
  { value: "10% → 50%", label: "qualified leads" },
  { value: "+80%", label: "spend at same CPL" },
];

export default async function Image() {
  const root = process.cwd();
  const [logo, bold, heavy, medium] = await Promise.all([
    readFile(join(root, "public/ecommerce-calculator/assets/acquirely-logo-white.png")),
    readFile(join(root, "app/fonts/Gilroy-Bold.ttf")),
    readFile(join(root, "app/fonts/Gilroy-Heavy.ttf")),
    readFile(join(root, "app/fonts/Gilroy-Medium.ttf")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0B0F19",
          backgroundImage:
            "radial-gradient(circle at 92% 8%, rgba(99,102,241,0.35), transparent 45%), radial-gradient(circle at 8% 100%, rgba(249,115,22,0.22), transparent 40%)",
          fontFamily: "Gilroy",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src={logoSrc} width={240} height={56} alt="" />
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1.5px solid #262C3A",
              fontSize: 22,
              fontWeight: 500,
              color: "#8B92A5",
            }}
          >
            For D2C &amp; lead-gen founders
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1 }}>
            <span>One team to run your</span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #818CF8, #F97316)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              whole growth funnel.
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 28, fontWeight: 500, color: "#8B92A5" }}>
            Meta · Google · LinkedIn · Marketplaces · Website &amp; CRO
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 20 }}>
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "18px 26px",
                  borderRadius: 16,
                  background: "#161B26",
                  border: "1px solid #262C3A",
                }}
              >
                <span style={{ fontSize: 36, fontWeight: 800 }}>{s.value}</span>
                <span style={{ fontSize: 20, fontWeight: 500, color: "#8B92A5", marginTop: 4 }}>{s.label}</span>
              </div>
            ))}
          </div>
          <span style={{ fontSize: 26, fontWeight: 700, color: "#F37513" }}>acquirely.in</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Gilroy", data: medium, weight: 500, style: "normal" },
        { name: "Gilroy", data: bold, weight: 700, style: "normal" },
        { name: "Gilroy", data: heavy, weight: 800, style: "normal" },
      ],
    }
  );
}
