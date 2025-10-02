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
  params,
}: {
  children: React.ReactNode;
  // ⬇︎ params is a Promise in Next 15
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
