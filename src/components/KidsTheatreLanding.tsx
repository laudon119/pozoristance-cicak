"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Calendar, MapPin, PartyPopper, Ticket, Sparkles, Globe } from "lucide-react";

type Locale = "sr" | "en";

const t = {
  sr: {
    brand: "Pozorištance Čičak – Iznajmi Teatar za Decu",
    nav: { packages: "Paketi", gallery: "Galerija", faq: "FAQ", contact: "Kontakt" },
    hero: {
      title: "Tvoj mališan, velika pozornica",
      subtitle:
        "Rođendani, proslave i školske priredbe u našem mini-teatru. Paket predstava + animacija + grickalice – sve na jednom mestu.",
      ctaPrimary: "Rezerviši termin",
      ctaSecondary: "Pogledaj pakete",
    },
    value: {
      v1: { title: "All‑inclusive", desc: "Sala, svetla, ozvučenje, predstava i animatori – bez dodatnih troškova." },
      v2: { title: "Bajkovita scena", desc: "Deca su glavni junaci – interaktivne predstave i foto‑kutak." },
      v3: { title: "Fleksibilni termini", desc: "Vikendom i radnim danima; 90–120 min po događaju." },
    },
    packages: {
      title: "Paketi",
      note: "Cene su informativne; PDV i popusti za škole na upit.",
      p1: { name: "Mini", price: "120 €", items: ["Do 15 dece", "30 min predstava", "60 min animacija", "Sokovi + grickalice", "Dekor osnovni"] },
      p2: { name: "Standard", price: "180 €", items: ["Do 25 dece", "45 min predstava", "60 min animacija", "Backstage foto‑kutak", "Tematski dekor"] },
      p3: { name: "Premijera", price: "260 €", items: ["Do 35 dece", "60 min predstava", "90 min animacija", "Profesionalni fotograf (30 fotki)", "Torta + svećice"] },
      cta: "Zakaži termin",
    },
    gallery: { title: "Galerija", subtitle: "Mala scena, veliki osmesi" },
    faq: {
      title: "Česta pitanja",
      q1: { q: "Koliko ranije treba rezervisati?", a: "Idealno 2–3 nedelje unapred; za vikende što ranije." },
      q2: { q: "Da li mogu da donesem svoju tortu?", a: "Naravno. Imamo sto i pribor; molimo da najavite." },
      q3: { q: "Da li je prostor prilagođen školskoj grupi?", a: "Da, nudimo termine za vrtiće i škole, sa popustom i fiskalnim računom." },
    },
    contact: {
      title: "Kontakt i Rezervacije",
      desc: "Pošaljite nam željeni datum i paket. Odgovaramo istog dana.",
      address: "Lazara Savatića 14, Zemun",
      phone: "+381 64 297 99 73",
      email: "pozoristance.cicak@yahoo.com",
      form: { name: "Ime i prezime", email: "Email", date: "Željeni datum", message: "Poruka / detalji", submit: "Pošalji upit" },
    },
    footer: { rights: "Sva prava zadržana." },
  },
  en: {
    brand: "Burdock Kids Theatre – Rent‑A‑Theatre",
    nav: { packages: "Packages", gallery: "Gallery", faq: "FAQ", contact: "Contact" },
    hero: {
      title: "Little stars, big stage",
      subtitle:
        "Birthdays, parties, and school shows in our cozy mini‑theatre. Play + animation + snacks – all in one place.",
      ctaPrimary: "Book a date",
      ctaSecondary: "See packages",
    },
    value: {
      v1: { title: "All‑inclusive", desc: "Venue, lights, sound, show and animators – no hidden fees." },
      v2: { title: "Storybook set", desc: "Kids become the heroes – interactive plays and photo corner." },
      v3: { title: "Flexible slots", desc: "Weekends and weekdays; 90–120 min per event." },
    },
    packages: {
      title: "Packages",
      note: "Pricing is indicative; VAT and school discounts available on request.",
      p1: { name: "Mini", price: "€120", items: ["Up to 15 kids", "30 min show", "60 min animation", "Juice + snacks", "Basic décor"] },
      p2: { name: "Standard", price: "€180", items: ["Up to 25 kids", "45 min show", "60 min animation", "Backstage photo corner", "Themed décor"] },
      p3: { name: "Premiere", price: "€260", items: ["Up to 35 kids", "60 min show", "90 min animation", "Pro photographer (30 photos)", "Cake + candles"] },
      cta: "Reserve now",
    },
    gallery: { title: "Gallery", subtitle: "Small stage, huge smiles" },
    faq: {
      title: "FAQ",
      q1: { q: "How early should we book?", a: "Ideally 2–3 weeks ahead; weekends fill up fastest." },
      q2: { q: "Can we bring our own cake?", a: "Absolutely. We provide a table and utensils; please inform us." },
      q3: { q: "Is it suitable for school groups?", a: "Yes, we offer slots for kindergartens and schools with discounts and receipts." },
    },
    contact: {
      title: "Contact & Reservations",
      desc: "Send your preferred date and package. We reply the same day.",
      address: "Lazara Savatića 14, Zemun",
      phone: "+381 64 297 99 73",
      email: "pozoristance.cicak@yahoo.com",
      form: { name: "Full name", email: "Email", date: "Preferred date", message: "Message / details", submit: "Send request" },
    },
    footer: { rights: "All rights reserved." },
  },
} as const;

export default function KidsTheatreLanding({ initialLocale = "sr" as Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const i = t[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-sky-50 text-slate-800">
      {/* Top bar */}
      <div className="w-full border-b bg-white/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <PartyPopper className="w-5 h-5" />
            <span>{i.brand}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#packages" className="hover:underline">{i.nav.packages}</a>
            <a href="#gallery" className="hover:underline">{i.nav.gallery}</a>
            <a href="#faq" className="hover:underline">{i.nav.faq}</a>
            <a href="#contact" className="hover:underline">{i.nav.contact}</a>
            <button
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
              onClick={() => setLocale(locale === "sr" ? "en" : "sr")}
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" /> {locale === "sr" ? "EN" : "SR"}
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              {i.hero.title}
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600">{i.hero.subtitle}</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-2xl bg-rose-500 text-white shadow hover:shadow-md">
                {i.hero.ctaPrimary}
              </a>
              <a href="#packages" className="px-5 py-3 rounded-2xl border bg-white hover:bg-slate-50">
                {i.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4"/> 4.9★ Google</div>
              <div className="inline-flex items-center gap-2"><Ticket className="w-4 h-4"/> 300+ događaja</div>
              <div className="inline-flex items-center gap-2"><Calendar className="w-4 h-4"/> Zemun</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white shadow-lg overflow-hidden">
              {/* Replace placeholders with real photos from /public/gallery */}
              <div className="grid grid-cols-3 gap-1 h-full p-2">
                <img src="/gallery/home/1.jpg" alt="Kids on stage" className="rounded-2xl w-full h-full object-cover" />
                <div className="rounded-2xl bg-amber-200" />
                <div className="rounded-2xl bg-sky-200" />
                <div className="rounded-2xl bg-violet-200" />
                <div className="rounded-2xl bg-lime-200" />
                <div className="rounded-2xl bg-pink-200" />
                <div className="rounded-2xl bg-cyan-200" />
                <div className="rounded-2xl bg-fuchsia-200" />
                <div className="rounded-2xl bg-orange-200" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[i.value.v1, i.value.v2, i.value.v3].map((v, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white shadow-sm border">
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="text-slate-600 mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold">{i.packages.title}</h2>
        <p className="text-slate-600 mt-2">{i.packages.note}</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[i.packages.p1, i.packages.p2, i.packages.p3].map((p, idx) => (
            <div key={idx} className="rounded-3xl bg-white border shadow-sm p-6 flex flex-col">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-2xl font-extrabold">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                {p.items.map((it: string, i2: number) => <li key={i2}>{it}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-flex justify-center rounded-2xl bg-sky-500 text-white px-4 py-2 hover:shadow">
                {i.packages.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">{i.gallery.title}</h2>
            <p className="text-slate-600 mt-2">{i.gallery.subtitle}</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 border rounded-2xl px-4 py-2 bg-white"><Ticket className="w-4 h-4"/> {i.hero.ctaPrimary}</a>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-white border shadow-sm" />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold">{i.faq.title}</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[i.faq.q1, i.faq.q2, i.faq.q3].map((f, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border shadow-sm">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-slate-600 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">{i.contact.title}</h2>
            <p className="text-slate-600 mt-2">{i.contact.desc}</p>
            <div className="mt-6 space-y-2 text-slate-700">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {i.contact.address}</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> {i.contact.phone}</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> {i.contact.email}</div>
            </div>
          </div>
          <form className="bg-white border shadow-sm rounded-3xl p-6" action="/api/contact" method="POST" encType="multipart/form-data">
            <div className="grid grid-cols-1 gap-4">
              <input className="border rounded-xl px-3 py-2" name="name" placeholder={i.contact.form.name} required />
              <input type="email" className="border rounded-xl px-3 py-2" name="email" placeholder={i.contact.form.email} required />
              <input type="date" className="border rounded-xl px-3 py-2" name="date" placeholder={i.contact.form.date} />
              <textarea className="border rounded-xl px-3 py-2 min-h-[120px]" name="message" placeholder={i.contact.form.message} />
              {/* optional helpers for Formspree */}
              <input type="hidden" name="_subject" value="Kids Theatre booking inquiry" />
              <input type="hidden" name="locale" value={locale} />
            </div>
            <button type="submit" className="mt-4 w-full rounded-2xl bg-rose-500 text-white px-4 py-2 hover:shadow">
			  {i.contact.form.submit}
			</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Čičak / Burdock. {i.footer.rights}
      </footer>
    </div>
  );
}