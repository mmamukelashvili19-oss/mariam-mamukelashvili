import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mariam Mamukelashvili — Artist",
  description: "Paintings inspired by home, identity, memory and belonging."
};

export function generateStaticParams() {
  return [{ locale: "ka" }, { locale: "en" }, { locale: "fr" }];
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const safeLocale = ["ka", "en", "fr"].includes(locale) ? locale : "en";
  return <div lang={safeLocale}>{children}</div>;
}
