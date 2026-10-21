import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Instagram, Mail } from "lucide-react";
import { artworks, copy, type Locale } from "./content";

const validLocales: Locale[] = ["ka", "en", "fr"];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = validLocales.includes(rawLocale as Locale) ? rawLocale as Locale : "en";
  const t = copy[locale];

  return (
    <main>
      <header className="page-shell flex items-center justify-between py-6 md:py-8">
        <Link href={`/${locale}`} aria-label="Mariam Mamukelashvili home" className="leading-none">
          <span className="block text-[22px] tracking-[.2em] md:text-[26px]">MARIAM</span>
          <span className="mt-2 block text-[9px] tracking-[.34em] text-[var(--muted)] md:text-[10px]">MAMUKELASHVILI</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.map((label, i) => (
            <a key={label} className="eyebrow hover:opacity-60" href={["#home", "#artworks", "#about", "#contact"][i]}>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-[11px] tracking-widest">
          {(["ka", "en", "fr"] as Locale[]).map((code) => (
            <Link key={code} href={`/${code}`} aria-label={`Switch language to ${code}`} className={`uppercase ${locale === code ? "border-b border-current pb-1" : "opacity-50 hover:opacity-100"}`}>{code}</Link>
          ))}
        </div>
      </header>

      <section id="home" className="page-shell grid min-h-[580px] items-center gap-8 pb-16 pt-8 md:grid-cols-[.9fr_1.1fr] md:pb-24 md:pt-12">
        <div className="relative z-10">
          <p className="eyebrow mb-7 text-[var(--accent)]">{t.heroKicker}</p>
          <h1 className="display whitespace-pre-line">{t.heroTitle}</h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-[#625c55] md:text-xl">{t.heroText}</p>
          <a href="#artworks" className="mt-9 inline-flex items-center gap-4 bg-[var(--ink)] px-6 py-4 font-sans text-[10px] uppercase tracking-[.18em] text-white transition hover:bg-[var(--accent)]">
            {t.explore}<ArrowRight size={16} strokeWidth={1.4}/>
          </a>
          <div className="mt-12 flex items-center gap-3 text-[var(--muted)]">
            <span className="h-px w-12 bg-[var(--line)]"/><span className="eyebrow">01 / 08</span>
          </div>
        </div>
        <div className="relative">
          <div className="art-frame aspect-[4/5] md:aspect-[4/4.7]">
            <Image src={artworks[0].image} alt={artworks[0].title[locale]} width={1100} height={1300} priority className="art-image"/>
          </div>
          <div className="absolute -bottom-5 -left-4 bg-[var(--paper)] px-4 py-3 md:-left-8 md:px-7">
            <span className="eyebrow text-[var(--muted)]">{t.storyLabel}</span>
          </div>
          <ArrowDownRight className="absolute -right-2 -top-3 text-[var(--accent)] md:-right-7 md:-top-6" size={38} strokeWidth={1}/>
        </div>
      </section>

      <section id="artworks" className="border-y border-[var(--line)] py-16 md:py-24">
        <div className="page-shell">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div><p className="eyebrow mb-3 text-[var(--muted)]">PORTFOLIO / 2022—2026</p><h2 className="section-title">{t.selected}</h2></div>
            <span className="eyebrow hidden sm:block">08 WORKS</span>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {artworks.map((art, i) => (
              <Link href={`/${locale}/artworks/${art.slug}`} className="art-card group block" key={art.slug}>
                <div className={`art-frame ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/4.6]"}`}>
                  <Image src={art.image} alt={art.title[locale]} width={800} height={1000} className="art-image"/>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div><h3 className="text-lg">{art.title[locale]}</h3><p className="mt-1 text-sm text-[var(--muted)]">{art.year} · {art.medium[locale]}</p></div>
                  <ArrowRight size={18} className="mt-1 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={1.2}/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="page-shell grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="art-frame aspect-[5/4]">
          <Image src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85" alt="An artist's studio with paintings and art materials" width={1200} height={950} className="art-image"/>
        </div>
        <div className="md:pl-10">
          <p className="eyebrow mb-5 text-[var(--accent)]">ABOUT THE ARTIST</p>
          <h2 className="section-title max-w-xl">{t.aboutTitle}</h2>
          <p className="mt-6 max-w-lg leading-8 text-[#625c55]">{t.aboutText}</p>
          <a href="#contact" className="text-link mt-7 inline-flex items-center gap-3 text-sm">{t.aboutLink}<ArrowRight size={15}/></a>
          <blockquote className="mt-12 border-l border-[var(--accent)] pl-5 text-xl italic leading-relaxed text-[#6f655d]">
            “Art is my way of keeping home with me, wherever I go.”
          </blockquote>
        </div>
      </section>

      <footer id="contact" className="bg-[#eae2d7] py-16 md:py-20">
        <div className="page-shell flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4 text-[var(--accent)]">CONTACT</p>
            <h2 className="section-title max-w-lg">{t.contactTitle}</h2>
            <p className="mt-4 max-w-md leading-7 text-[#625c55]">{t.contactText}</p>
            <a href="mailto:mmamukelashvili19@gmail.com" className="text-link mt-7 inline-flex items-center gap-3">{t.contactLink}<Mail size={16}/></a>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-60"><Instagram size={17}/> Instagram</a>
            <span className="text-[var(--muted)]">© {new Date().getFullYear()} Mariam</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
