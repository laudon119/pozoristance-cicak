import KidsTheatreLanding from "@/components/KidsTheatreLanding";

export default async function Page({
  // ✅ same looser type
  params,
}: {
  params: Promise<Record<string, string>>;
}) {
  const { locale = "sr" } = await params;
  const lang = locale === "sr" || locale === "en" ? (locale as "sr" | "en") : "sr";
  return <KidsTheatreLanding initialLocale={lang} />;
}
