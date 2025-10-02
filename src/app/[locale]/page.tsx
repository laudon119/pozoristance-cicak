import KidsTheatreLanding from "@/components/KidsTheatreLanding";

export default async function Page({
  params,
}: {
  // ⬇︎ params is a Promise in Next 15
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;
  return <KidsTheatreLanding initialLocale={locale} />;
}
