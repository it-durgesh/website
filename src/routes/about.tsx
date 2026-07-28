import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { EnrollModal } from "@/components/site/EnrollModal";
import { openEnroll } from "@/components/site/enroll-store";
import studentsClassroom from "@/assets/students-classroom.jpg";
import heroLibrary from "@/assets/hero-library.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — S.S. Tutorial's, Bandra West Mumbai" },
      {
        name: "description",
        content:
          "Learn about S.S. Tutorial's — 20+ years of coaching excellence in Bandra West. Our mission, vision, faculty and journey since 2003.",
      },
      { property: "og:title", content: "About S.S. Tutorial's — Since 2003" },
      {
        property: "og:description",
        content:
          "Two decades of turning students into toppers. Meet the people, values and story behind Bandra's most trusted coaching class.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
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

const values = [
  { icon: Target, title: "Learn, don't just earn", desc: "We inspire a genuine desire to learn — marks follow naturally." },
  { icon: Users, title: "Small batches, big attention", desc: "5–10 and 10–25 student batches so no one gets left behind." },
  { icon: HeartHandshake, title: "Faculty as friends", desc: "Teachers walk with students towards success — not above them." },
  { icon: Sparkles, title: "Simplify the tough", desc: "Tips, tricks and visualisations turn stress into confidence." },
];

const milestones = [
  { year: "2003", text: "S.S. Tutorial's is established in Bandra West — a small classroom with a big vision." },
  { year: "2004", text: "Started organising sports events — Football, Cricket and Chess tournaments." },
  { year: "2009", text: "Expanded from a small classroom to a large, purpose-built learning space." },
  { year: "2012", text: "Began producing toppers for leading Bandra schools and colleges." },
  { year: "2013", text: "Awarded ISO certification — a mark of consistent, measurable quality." },
  { year: "2017", text: "Became a member of MCOA (Maharashtra Coaching Owners Association)." },
  { year: "Today", text: "Certified international trainer for Vedic Maths. Still Bandra's most trusted coaching class." },
];

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroLibrary} alt="" className="h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-float" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium text-gold animate-fade-up">
            <Award className="h-4 w-4" /> About S.S. Tutorial's
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Two decades of{" "}
            <span className="text-gradient-gold italic">learning</span>,
            done right.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Since 2003, S.S. Tutorial's has shaped thousands of students in Bandra West — with specialised faculty, small batches and the belief that every child deserves personal attention.
          </p>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-2xl gradient-gold opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={studentsClassroom} alt="Students in class" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white shadow-elegant p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-navy">
                  <Trophy className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy font-display">500+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Toppers</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Story</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy leading-tight">
              From one classroom to <span className="italic text-gradient-gold">a legacy.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              S.S. Tutorial's began in 2003 as a modest classroom in Bandra West with one clear goal: to teach students <em>how</em> to think, not just <em>what</em> to memorise. Two decades on, that mission has grown — but never changed.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We coach SSC, HSC (Science, Commerce and Arts) and Classes 8 &amp; 9. Subject specialists lead every batch, tests are conducted chapter-by-chapter, and doubts are always welcome.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "ISO Certified since 2013",
                "MCOA Member since 2017",
                "Certified Vedic Maths Trainer",
                "20+ Years of results",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-xl bg-secondary/60 p-4 hover-lift">
                  <div className="h-2 w-2 rounded-full gradient-gold shrink-0" />
                  <span className="text-sm font-medium text-navy">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 sm:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className={`grid md:grid-cols-2 gap-8 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To create a learning environment where every student is understood, challenged and inspired — so results are earned through genuine understanding, not rote.",
            },
            {
              icon: BookOpen,
              title: "Our Vision",
              text: "To remain Bandra's most trusted coaching class — a place where families across generations send their children with complete confidence.",
            },
          ].map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 sm:p-10 shadow-card border border-border hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
              <div className="grid h-14 w-14 place-items-center rounded-xl gradient-navy shadow-gold group-hover:rotate-6 transition-transform">
                <c.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-navy font-display">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">What we stand for</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">Our Values</h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`group rounded-2xl bg-card border border-border p-6 shadow-card hover-lift ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-gold shadow-gold group-hover:scale-110 transition-transform">
                <v.icon className="h-6 w-6 text-navy" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 sm:py-32 bg-secondary/40">
      <div ref={ref} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Journey</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">Milestones</h2>
        </div>
        <div className="mt-16 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 gradient-gold -translate-x-1/2" />
          <div className="space-y-12">
            {milestones.map((t, i) => (
              <div
                key={t.year}
                className={`relative grid sm:grid-cols-2 gap-6 items-center ${visible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-gradient-gold">{t.year}</div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full gradient-gold shadow-gold ring-4 ring-background">
                  <div className="h-2 w-2 rounded-full bg-navy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl gradient-navy p-8 sm:p-12 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <GraduationCap className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-4 text-2xl sm:text-4xl font-bold text-white font-display">
              Ready to join us?
            </h3>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Reserve a seat in Bandra's most trusted coaching class.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={openEnroll}
                className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 font-semibold text-navy shadow-gold hover:scale-105 transition-transform"
              >
                Enrol Now <ChevronRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Story />
        <MissionVision />
        <Values />
        <Journey />
        <CTA />
      </main>
      <Footer />
      <EnrollModal />
    </div>
  );
}
