import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pozorištance Čičak – Iznajmi Teatar za Decu",
    template: "%s · Čičak",
  },
  description:
    "Rođendani, proslave i školske priredbe u mini-teatru. Paket predstava + animacija + grickalice – sve na jednom mestu.",
  alternates: { languages: { sr: "/sr", en: "/en" } },
};

export default async function RootLayout({
  children,
  // ✅ match Next 15 typing (params is a Promise with string values)
  params,
}: {
  children: React.ReactNode;
  params: Promise<Record<string, string>>;
}) {
  const { locale = "sr" } = await params;
  // runtime narrow with fallback
  const lang = locale === "sr" || locale === "en" ? locale : "sr";

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
