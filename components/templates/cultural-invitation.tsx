"use client";

import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Heart,
  MapPin,
  MessageCircleHeart,
  Navigation,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, type CSSProperties, type FormEvent } from "react";
import type { CulturalTemplate } from "@/lib/content/cultural-templates";

type TemplateStyle = CSSProperties & {
  "--invite-ink": string;
  "--invite-muted": string;
  "--invite-paper": string;
  "--invite-surface": string;
  "--invite-accent": string;
  "--invite-accent-soft": string;
  "--invite-contrast": string;
};

export function CulturalInvitation({
  template,
  previewMode = false,
}: {
  template: CulturalTemplate;
  previewMode?: boolean;
}) {
  const [opened, setOpened] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);
  const style: TemplateStyle = {
    "--invite-ink": template.palette.ink,
    "--invite-muted": template.palette.muted,
    "--invite-paper": template.palette.paper,
    "--invite-surface": template.palette.surface,
    "--invite-accent": template.palette.accent,
    "--invite-accent-soft": template.palette.accentSoft,
    "--invite-contrast": template.palette.contrast,
  };
  const photoBackground = template.coverImage
    ? {
        backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.55), rgba(15, 15, 15, 0.72)), url(${JSON.stringify(template.coverImage)})`,
      }
    : undefined;
  const galleryItems = Array.from({
    length: Math.max(template.galleryLabels.length, template.galleryImages?.length ?? 0),
  }).map((_, index) => ({
    label: template.galleryLabels[index] ?? `Momen ${index + 1}`,
    image: template.galleryImages?.[index],
  }));

  function openInvitation() {
    setOpened(true);
    window.requestAnimationFrame(() => {
      document.querySelector("#invitation-home")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  function submitRsvp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRsvpSent(true);
  }

  return (
    <div
      className={`invitation invitation-${template.motif}`}
      style={style}
    >
      {previewMode ? (
        <span className="fixed left-3 top-3 z-[110] rounded-full bg-gray-950 px-3 py-1.5 text-xs font-semibold text-white shadow-xl">
          Mode Preview
        </span>
      ) : null}
      {!opened ? (
        <div
          className={`invitation-cover ${template.coverImage ? "invitation-has-photo" : ""}`}
          style={photoBackground}
        >
          <div className="invitation-cover-pattern" aria-hidden="true" />
          <div className="invitation-cover-frame">
            <p className="invitation-kicker">The Wedding of</p>
            <div className="invitation-emblem" aria-hidden="true">
              {template.monogram}
            </div>
            <h1>{template.groom} &amp; {template.bride}</h1>
            <p className="invitation-date">{template.dateShort}</p>
            <p className="invitation-cover-note">Kepada Bapak/Ibu/Saudara/i</p>
            <button type="button" className="invitation-button" onClick={openInvitation}>
              <Heart className="size-4" aria-hidden="true" />
              Buka Undangan
            </button>
          </div>
        </div>
      ) : null}

      <header className="invitation-nav">
        <Link href="/" className="invitation-brand">SatuJanji</Link>
        <nav aria-label="Navigasi undangan">
          <a href="#invitation-home">Beranda</a>
          <a href="#acara">Acara</a>
          <a href="#kisah">Kisah</a>
          {previewMode ? <a href="#rsvp">RSVP</a> : null}
        </nav>
      </header>

      <main id="invitation-home">
        <section
          className={`invitation-hero ${template.coverImage ? "invitation-has-photo" : ""}`}
          style={photoBackground}
        >
          <div className="invitation-hero-pattern" aria-hidden="true" />
          <div className="invitation-hero-copy">
            <p className="invitation-kicker">{template.region} · Wedding Collection</p>
            <p className="invitation-inspiration">{template.inspiration}</p>
            <h1>
              <span>{template.groom}</span>
              <b>&amp;</b>
              <span>{template.bride}</span>
            </h1>
            <p className="invitation-date">{template.date}</p>
            <a className="invitation-scroll" href="#mempelai">
              Lihat undangan
              <ChevronDown className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="invitation-hero-seal">
            <Sparkles className="size-5" aria-hidden="true" />
            <span>{template.title}</span>
          </div>
        </section>

        <section id="mempelai" className="invitation-section invitation-couple-section">
          <div className="invitation-ornament" aria-hidden="true"><span /></div>
          <p className="invitation-section-kicker">Dengan penuh kasih</p>
          <h2>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</h2>
          <p className="invitation-lead">{template.greeting}</p>

          <div className="invitation-couple-grid">
            <article>
              <div className="invitation-portrait"><span>{template.groom.charAt(0)}</span></div>
              <p className="invitation-person-label">Mempelai pria</p>
              <h3>{template.groom}</h3>
              <p>{template.groomParents}</p>
            </article>
            <div className="invitation-couple-mark">&amp;</div>
            <article>
              <div className="invitation-portrait"><span>{template.bride.charAt(0)}</span></div>
              <p className="invitation-person-label">Mempelai wanita</p>
              <h3>{template.bride}</h3>
              <p>{template.brideParents}</p>
            </article>
          </div>
        </section>

        <section className="invitation-quote">
          <div className="invitation-quote-pattern" aria-hidden="true" />
          <MessageCircleHeart className="size-7" aria-hidden="true" />
          <blockquote>“{template.quote}”</blockquote>
          <p>— {template.groom} &amp; {template.bride}</p>
        </section>

        <section id="acara" className="invitation-section invitation-event-section">
          <p className="invitation-section-kicker">Save the date</p>
          <h2>Rangkaian Acara</h2>
          <p className="invitation-lead">Merupakan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.</p>

          <div className="invitation-event-grid">
            <article className="invitation-event-card">
              <span className="invitation-card-number">01</span>
              <CalendarDays className="size-6" aria-hidden="true" />
              <p className="invitation-person-label">Akad nikah</p>
              <h3>{template.date}</h3>
              <p><Clock3 className="size-4" aria-hidden="true" />{template.ceremonyTime}</p>
              <p><MapPin className="size-4" aria-hidden="true" />{template.venue}</p>
            </article>
            <article className="invitation-event-card invitation-event-card-accent">
              <span className="invitation-card-number">02</span>
              <Sparkles className="size-6" aria-hidden="true" />
              <p className="invitation-person-label">Resepsi</p>
              <h3>{template.date}</h3>
              <p><Clock3 className="size-4" aria-hidden="true" />{template.receptionTime}</p>
              <p><MapPin className="size-4" aria-hidden="true" />{template.address}</p>
            </article>
          </div>

          <a
            className="invitation-button invitation-button-outline"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(template.address)}`}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Buka Google Maps
          </a>
        </section>

        <section id="kisah" className="invitation-story">
          <div className="invitation-section invitation-story-inner">
            <p className="invitation-section-kicker">Perjalanan kami</p>
            <h2>Kisah yang Membawa Pulang</h2>
            <div className="invitation-story-list">
              {template.story.map((item, index) => (
                <article key={item.year}>
                  <div className="invitation-story-dot">{index + 1}</div>
                  <p>{item.year}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="invitation-section invitation-gallery-section">
          <p className="invitation-section-kicker">Potongan cerita</p>
          <h2>Galeri Bahagia</h2>
          <div className="invitation-gallery">
            {galleryItems.map((item, index) => (
              <article
                key={`${item.label}-${index}`}
                className={`invitation-gallery-card gallery-${index + 1} ${item.image ? "invitation-gallery-photo" : ""}`}
                style={item.image ? { backgroundImage: `url(${JSON.stringify(item.image)})` } : undefined}
              >
                {!item.image ? <div className="invitation-gallery-mark">{template.monogram}</div> : null}
                <p>{item.label}</p>
              </article>
            ))}
          </div>
          <p className="invitation-gallery-note">Setiap foto akan disusun untuk menghidupkan cerita perjalanan kalian.</p>
        </section>

        {previewMode ? <section id="rsvp" className="invitation-rsvp">
          <div className="invitation-rsvp-pattern" aria-hidden="true" />
          <div className="invitation-rsvp-copy">
            <p className="invitation-section-kicker">Konfirmasi kehadiran</p>
            <h2>Doa dan Kehadiran Anda Berarti</h2>
            <p>Simulasikan pengalaman tamu saat mengirimkan konfirmasi kehadiran dan doa terbaik.</p>
          </div>

          {rsvpSent ? (
            <div className="invitation-rsvp-success" role="status">
              <Heart className="size-7" aria-hidden="true" />
              <h3>Terima kasih</h3>
              <p>Konfirmasi berhasil ditampilkan. Dalam mode pratinjau, data tidak disimpan.</p>
              <button type="button" onClick={() => setRsvpSent(false)}>Isi kembali</button>
            </div>
          ) : (
            <form className="invitation-rsvp-form" onSubmit={submitRsvp}>
              <label>
                Nama tamu
                <input name="guestName" placeholder="Tuliskan nama Anda" required />
              </label>
              <label>
                Konfirmasi
                <select name="attendance" defaultValue="hadir" required>
                  <option value="hadir">InsyaAllah hadir</option>
                  <option value="tidak-hadir">Belum dapat hadir</option>
                </select>
              </label>
              <label>
                Ucapan dan doa
                <textarea name="message" rows={4} placeholder="Tulis doa terbaik untuk kedua mempelai" />
              </label>
              <button type="submit" className="invitation-button">
                <Send className="size-4" aria-hidden="true" />
                Kirim Konfirmasi
              </button>
            </form>
          )}
        </section> : null}
      </main>

      <footer className="invitation-footer">
        <div className="invitation-emblem invitation-emblem-small">{template.monogram}</div>
        <p>Terima kasih telah menjadi bagian dari cerita kami.</p>
        <span>Desain undangan digital oleh SatuJanji</span>
      </footer>
    </div>
  );
}
