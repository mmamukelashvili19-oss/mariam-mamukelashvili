import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowDown } from "lucide-react";
import { artworks, copy, type Locale } from "./content";

const validLocales: Locale[] = ["ka", "en", "fr"];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = validLocales.includes(rawLocale as Locale) ? rawLocale as Locale : "en";
  const t = copy[locale];
  const portfolioLabel = locale === "ka" ? "ნამუშევრები" : locale === "fr" ? "Œuvres" : "Works";
  const contactLabel = locale === "ka" ? "კონტაქტი" : locale === "fr" ? "Contact" : "Contact";
  return (
    <main>
      <header className="page-shell flex items-center justify-between py-6 md:py-8">
        <Link href={`/${locale}`} className="leading-none" aria-label="Mariam Mamukelashvili home">
          <span className="block text-[21px] tracking-[.16em]">MARIAM</span>
          <span className="mt-2 block text-[9px] tracking-[.3em] text-[var(--muted)]">MAMUKELASHVILI</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <a className="eyebrow" href="#artworks">{portfolioLabel}</a>
          <a className="eyebrow" href="#contact">{contactLabel}</a>
        </nav>
        <div className="flex items-center gap-3 text-[11px] tracking-widest">{(["ka", "en", "fr"] as Locale[]).map(code => <Link key={code} href={`/${code}`} className={`uppercase ${locale === code ? "border-b border-[var(--accent)] pb-1 text-[var(--accent)]" : "opacity-60 hover:opacity-100"}`}>{code}</Link>)}</div>
      </header>
      <section id="home" className="page-shell grid min-h-[440px] items-center gap-9 py-10 md:grid-cols-[.8fr_1.2fr] md:py-14">
        <div className="py-8"><p className="eyebrow mb-5 text-[var(--accent)]">ARTIST · PORTFOLIO</p><h1 className="display whitespace-pre-line">Mariam<br/>Mamukelashvili</h1><a href="#artworks" className="mt-8 inline-flex items-center gap-3 border-b border-[var(--accent)] pb-2 text-xs uppercase tracking-[.15em] text-[var(--accent)]">{portfolioLabel}<ArrowDown size={14}/></a></div>
        <Link href={`/${locale}/artworks/${artworks[0].slug}`} className="art-frame flex aspect-[5/4] items-center justify-center p-4 md:aspect-[4/3]"><Image src={artworks[0].image} alt={artworks[0].title[locale]} width={1000} height={1200} priority className="art-image"/></Link>
      </section>
      <section id="artworks" className="border-y border-[var(--line)] py-12 md:py-16"><div className="page-shell"><div className="mb-8 flex items-end justify-between"><div><p className="eyebrow mb-3 text-[var(--accent)]">SELECTED WORKS</p><h2 className="section-title">{t.selected}</h2></div><span className="eyebrow hidden text-[var(--muted)] sm:block">{String(artworks.length).padStart(2,'0')} WORKS</span></div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{artworks.map(art => <Link href={`/${locale}/artworks/${art.slug}`} className="art-card group block" key={art.slug}><div className="art-frame flex aspect-[4/5] items-center justify-center p-3"><Image src={art.image} alt={art.title[locale]} width={800} height={1000} className="art-image"/></div><div className="mt-4 flex items-baseline justify-between gap-3"><h3 className="text-base leading-snug">{art.title[locale]}</h3><span className="shrink-0 text-xs text-[var(--muted)]">{art.year}</span></div></Link>)}</div>
      </div></section>
      <footer id="contact" className="border-t border-[var(--line)] py-8"><div className="page-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="eyebrow mb-3 text-[var(--accent)]">{contactLabel}</p><a href="mailto:mmamukelashvili19@gmail.com" className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent)]">mmamukelashvili19@gmail.com <Mail size={15}/></a></div><span className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} Mariam Mamukelashvili</span></div></footer>
    </main>
  );
}
