import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Heart,
  ImageIcon,
  MapPin,
  MessageCircleHeart,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { heroHighlights } from "@/lib/content/site-content";

export function HeroSection() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16 lg:pt-20">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
        <div className="relative z-10">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gold shadow-sm backdrop-blur sm:text-sm sm:normal-case sm:tracking-normal">
              <Sparkles className="size-4" aria-hidden="true" />
              Undangan digital yang dirancang untuk kisahmu
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-balance-safe max-w-4xl font-serif text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.035em] text-gray-950 sm:text-6xl lg:text-[4.6rem] xl:text-[5.15rem]">
              Rayakan hari bahagiamu dalam satu halaman yang <span className="text-gold">berkesan.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Pilih desain yang mewakili ceritamu, lengkapi detail acara, lalu
              bagikan undangan cantik yang nyaman dibuka dari perangkat apa pun.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item} className="flex min-w-0 items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
              <Button href="#template" className="group min-w-44">
                Pilih Template
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>
              <Button href="#cara-kerja" variant="secondary">
                Lihat Cara Kerja
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200/70 pt-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-600" />Tanpa perlu coding</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-600" />Didampingi hingga siap dibagikan</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[35rem] lg:mr-0">
          <div className="hero-preview-wrap">
            <div className="hero-preview-glow" aria-hidden="true" />
            <div className="hero-phone">
              <div className="hero-phone-notch" aria-hidden="true" />
              <div className="hero-phone-screen">
                <div className="hero-preview-pattern" aria-hidden="true" />
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">The wedding of</p>
                <div className="mt-5 grid size-12 place-items-center rounded-full border border-gold/70 font-serif text-sm text-gold">A &amp; R</div>
                <h2 className="mt-7 font-serif text-4xl leading-none text-white sm:text-5xl">Arga <span className="block py-2 text-2xl italic text-gold">&amp;</span> Ratri</h2>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">12 · 12 · 2026</p>
                <span className="mt-7 inline-flex rounded-full bg-gold px-4 py-2 text-[11px] font-bold text-white">Buka Undangan</span>
              </div>
            </div>

            <div className="hero-float-card hero-float-card-top">
              <span className="grid size-9 place-items-center rounded-full border border-rose-100 bg-white text-rose-500 shadow-sm"><Heart className="size-[18px]" strokeWidth={1.75} /></span>
              <span><b>Koleksi pilihan</b><small>Dapat disesuaikan</small></span>
            </div>
            <div className="hero-float-card hero-float-card-bottom">
              <span className="grid size-9 place-items-center rounded-full border border-emerald-100 bg-white text-emerald-600 shadow-sm"><UsersRound className="size-[18px]" strokeWidth={1.75} /></span>
              <span><b>Konfirmasi tamu</b><small>Respons lebih tertata</small></span>
            </div>

            <div className="hero-feature-rail" aria-label="Fitur template">
              {[CalendarDays, MapPin, ImageIcon, MessageCircleHeart].map((Icon, index) => (
                <span key={index}><Icon className="size-4" strokeWidth={1.75} aria-hidden="true" /></span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
