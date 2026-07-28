import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { EnrollModal } from "@/components/site/EnrollModal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — S.S. Tutorial's, Bandra West Mumbai" },
      {
        name: "description",
        content:
          "Get in touch with S.S. Tutorial's. Call, email or visit our coaching centre in Bandra West, Mumbai. Admissions open for SSC, HSC & Class 8-9.",
      },
      { property: "og:title", content: "Contact S.S. Tutorial's — Bandra West" },
      {
        property: "og:description",
        content: "Call +91 98211 21982 or send us a message. We reply within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 overflow-hidden gradient-navy">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 82) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-float" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium text-gold animate-fade-up">
          <MessageCircle className="h-4 w-4" /> We'd love to hear from you
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold text-white leading-tight animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Get in <span className="text-gradient-gold italic">touch.</span>
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Questions about admissions, timings or batches? Reach out — we usually reply within a few hours.
        </p>
      </div>
    </section>
  );
}

function Cards() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const items = [
    { icon: Phone, title: "Call Us", lines: ["+91 98211 21982", "+91 98211 12139"], href: "tel:+919821121982" },
    { icon: Mail, title: "Email Us", lines: ["info@sstutorial.com"], href: "mailto:info@sstutorial.com" },
    { icon: MapPin, title: "Visit Us", lines: ["Bandra West,", "Mumbai, Maharashtra"], href: "#map" },
    { icon: Clock, title: "Timings", lines: ["Mon – Sat", "9:00 AM – 8:00 PM"], href: "#" },
  ];
  return (
    <section className="py-20 sm:py-24 bg-background -mt-10">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              className={`group rounded-2xl bg-card border border-border p-6 shadow-card hover-lift text-center ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-navy shadow-gold group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <c.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{c.title}</h3>
              <div className="mt-2 space-y-0.5">
                {c.lines.map((l) => (
                  <div key={l} className="text-sm text-muted-foreground">{l}</div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormAndMap() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setDone(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <section className="pb-24 sm:pb-32 bg-background">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-5 gap-8 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="lg:col-span-3 rounded-3xl bg-card border border-border shadow-card p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy font-display">Send us a message</h2>
            <p className="mt-2 text-muted-foreground text-sm">Fill in the form — we'll be in touch shortly.</p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required placeholder="Your name" />
                <Field label="Phone" name="phone" required type="tel" placeholder="+91" />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Subject" name="subject" placeholder="How can we help?" />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting || done}
                className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-3.5 font-semibold text-navy shadow-gold hover:scale-105 transition-transform disabled:opacity-70 disabled:hover:scale-100"
              >
                {done ? (<><CheckCircle2 className="h-4 w-4" /> Sent!</>) : submitting ? ("Sending...") : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div id="map" className="rounded-3xl overflow-hidden shadow-elegant border border-border aspect-[4/3] lg:aspect-auto lg:flex-1 min-h-[280px]">
              <iframe
                title="S.S. Tutorial's location"
                src="https://www.google.com/maps?q=Bandra+West+Mumbai&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl gradient-navy p-6 shadow-elegant relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative text-white">
                <h3 className="font-display font-bold text-xl">Prefer to talk?</h3>
                <p className="mt-1 text-sm text-white/75">Our team is happy to guide you through admissions.</p>
                <a href="tel:+919821121982" className="mt-4 inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold hover:scale-105 transition-transform">
                  <Phone className="h-4 w-4" /> +91 98211 21982
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav transparentOnTop={false} />
      <main>
        <Hero />
        <Cards />
        <FormAndMap />
      </main>
      <Footer />
      <EnrollModal />
    </div>
  );
}
