import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { artworks, copy, type Locale } from "../../content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ["ka", "en", "fr"].flatMap((locale) => artworks.map((art) => ({ locale, slug: art.slug })));
}

export default async function ArtworkPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = ["ka", "en", "fr"].includes(rawLocale) ? rawLocale as Locale : "en";
  const art = artworks.find((item) => item.slug === slug);
  if (!art) notFound();
  const t = copy[locale];

  return (
    <main className="min-h-screen">
      <header className="page-shell flex items-center justify-between py-6 md:py-8">
        <Link href={`/${locale}`} className="leading-none">
          <span className="block text-[22px] tracking-[.2em]">MARIAM</span>
          <span className="mt-2 block text-[9px] tracking-[.34em] text-[var(--muted)]">MAMUKELASHVILI</span>
        </Link>
        <div className="flex gap-3 text-[11px] uppercase tracking-widest">
          {(["ka", "en", "fr"] as Locale[]).map((code) => <Link key={code} href={`/${code}/artworks/${slug}`} className={locale === code ? "border-b border-current pb-1" : "opacity-50"}>{code}</Link>)}
        </div>
      </header>
      <div className="page-shell pb-20 pt-8 md:pb-28 md:pt-12">
        <Link href={`/${locale}#artworks`} className="eyebrow inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--ink)]"><ArrowLeft size={14}/>{t.back}</Link>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-16">
          <div className="art-frame aspect-[4/5]">
            <Image src={art.image} alt={art.title[locale]} width={1200} height={1500} priority className="art-image"/>
          </div>
          <article className="flex flex-col justify-center md:py-10">
            <p className="eyebrow mb-5 text-[var(--accent)]">{art.year} · {art.medium[locale]}</p>
            <h1 className="display !text-5xl md:!text-7xl">{art.title[locale]}</h1>
            <div className="mt-10 border-t border-[var(--line)] pt-7">
              <h2 className="section-title !text-2xl">{t.story}</h2>
              <p className="mt-5 text-lg leading-8 text-[#625c55]">{art.story[locale]}</p>
              <p className="mt-8 text-xs italic leading-5 text-[var(--muted)]">{t.note}</p>
            </div>
          </article>
        </div>
      </div>
      <footer className="border-t border-[var(--line)] py-7">
        <div className="page-shell flex items-center justify-between text-sm text-[var(--muted)]">
          <span>Mariam Mamukelashvili</span><Link href={`/${locale}#contact`}>{t.contactLink} ↗</Link>
        </div>
      </footer>
    </main>
  );
}
