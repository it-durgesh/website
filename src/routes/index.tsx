import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  GraduationCap,
  ClipboardCheck,
  Users,
  MessageSquareHeart,
  Sparkles,
  Trophy,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import heroLibrary from "@/assets/hero-library.jpg";
import studentsClassroom from "@/assets/students-classroom.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { EnrollModal } from "@/components/site/EnrollModal";
import { openEnroll } from "@/components/site/enroll-store";
import { Insights, InstagramFeed, MediaGallery } from "@/components/site/Sections";
import toppersData from "../assets/json/topper.json";
import testimonalsData from "../assets/json/testimonial.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "S.S. Tutorial's — Best Coaching Class in Bandra West, Mumbai | SSC & HSC",
      },
      {
        name: "description",
        content:
          "Since 2003, S.S. Tutorial's has coached SSC, HSC (Science, Commerce & Arts), Class 8 & 9 students in Bandra West with specialised faculty, small batches, and progressive tests.",
      },
      {
        property: "og:title",
        content: "S.S. Tutorial's — Best Coaching Class in Bandra West, Mumbai",
      },
      {
        property: "og:description",
        content:
          "20+ years of academic excellence. SSC, HSC & Class 8-9 coaching in Bandra West, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/svg+xml", href: "/src/assets/logo.png" },
      { rel: "apple-touch-icon", href: "/src/assets/logo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "S.S. Tutorial's",
          description:
            "Coaching class for SSC, HSC (Sci/Com/Arts), Class 8 & 9 in Bandra West, Mumbai.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bandra West",
            addressRegion: "Mumbai",
            addressCountry: "IN",
          },
          telephone: ["+91-9821121982", "+91-9821112139"],
          foundingDate: "2003",
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: GraduationCap,
    title: "Specialised Faculties",
    desc: "Tutorials for SSC, HSC (Sci, Com & Arts), Class 8 & 9 with subject specialists.",
  },
  {
    icon: ClipboardCheck,
    title: "Progressive Tests",
    desc: "Regular chapter-wise MCQ and subjective tests — both physical and digital.",
  },
  {
    icon: Users,
    title: "Small Batch System",
    desc: "Focused batches of 5–10 and 10–25 students for personalised attention.",
  },
  {
    icon: MessageSquareHeart,
    title: "Doubt Solving",
    desc: "Faculty always available to resolve queries and give feedback.",
  },
  {
    icon: Sparkles,
    title: "Tips & Tricks",
    desc: "Simple concepts and visualisations make tough topics stress-free.",
  },
];

const testimonials = testimonalsData.testimonials;

const toppers = toppersData.toppers;

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
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroLibrary}
          alt="Grand library — the S.S. Tutorial's learning atmosphere"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-navy-light/40 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-30 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium text-white animate-fade-up">
            <Award className="h-4 w-4" /> ISO Certified · Trusted since 2003
          </span>
          <h1
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Get your <span className="text-gradient-gold italic">Education</span> today.
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Bandra West's most trusted coaching class for 8<sup>th</sup>, 9<sup>th</sup>, SSC and
            HSC <b>(Science, Commerce & Arts).</b>
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <button
              onClick={openEnroll}
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 font-semibold text-navy shadow-gold hover:scale-105 transition-transform"
            >
              Enrol Now <ChevronRight className="h-4 w-4" />
            </button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { n: "20+", l: "Years" },
              { n: "500+", l: "Toppers" },
              { n: "5-25", l: "Batch Size" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold/60 pl-3 sm:pl-4">
                <div className="text-2xl sm:text-4xl font-bold text-gold font-display">{s.n}</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${visible ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-2xl gradient-gold opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={studentsClassroom}
                alt="Students learning at S.S. Tutorial's"
                loading="lazy"
                width={1400}
                height={1000}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white shadow-elegant p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-navy">
                  <Trophy className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy font-display">2003</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Est.</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy leading-tight">
              Two decades of turning students into{" "}
              <span className="italic text-gradient-gold">toppers.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Established in 2003 in Bandra West, S.S. Tutorial's is one of Mumbai's most respected
              coaching institutes. We teach not just to help students earn — but to help them{" "}
              <em>learn</em>, think, and grow.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every batch is small. Every doubt is answered. Every student matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full gradient-navy px-6 py-3 font-semibold text-white hover:scale-105 transition-transform"
              >
                Read Our Story <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            What we offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Everything a student needs to master their syllabus and love the learning process.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl bg-card p-8 border border-border shadow-card hover-lift ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 left-8 h-1 w-16 gradient-gold rounded-b-full" />
              <div className="grid h-14 w-14 place-items-center rounded-xl gradient-navy shadow-gold group-hover:rotate-6 transition-transform">
                <s.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toppers() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const ITEMS_PER_PAGE = 8;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  // Get current chunk of toppers to display
  const visibleToppers = toppers.slice(0, visibleCount);

  // Check if all data is displayed
  const isAllLoaded = visibleCount >= toppers.length;

  // Handle click events
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  const handleCollapse = () => {
    setVisibleCount(ITEMS_PER_PAGE);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="toppers" className="py-24 sm:py-32 gradient-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 82) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold">
            <Trophy className="h-4 w-4" /> Hall of Fame
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">Our Toppers</h2>
          <p className="mt-4 text-white/70">Celebrating the students who made us proud.</p>
        </div>
        <div className="mt-16 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {visibleToppers.map((t, i) => (
            <div
              key={t.name}
              className={`group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-6 hover:bg-white/10 hover:border-gold/40 transition-all ${visible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="grid h-16 w-16 place-items-center rounded-full gradient-gold mx-auto shadow-gold group-hover:scale-110 transition-transform">
                <span className="font-display font-bold text-navy text-xl">
                  <img src={t.image} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
                </span>
              </div>
              <div className="mt-4 text-center">
                <div className="font-semibold text-white text-sm sm:text-base leading-tight">
                  {t.name}
                </div>
                <div className="mt-1 text-gold font-bold text-sm">{t.score}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
                  {t.year}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          {isAllLoaded ? (
            <button
              onClick={handleCollapse}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Collapse / Show Less
            </button>
          ) : (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 font-semibold text-navy shadow-gold hover:scale-105 transition-transform"
            >
              Load More ({toppers.length - visibleCount} remaining){" "}
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const len = testimonials.length;
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % len), 6000);
    return () => clearInterval(t);
  }, [len]);
  const t = testimonials[idx];
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          Testimonials
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">What our students say</h2>
        <div className="mt-16 relative">
          <Quote className="h-16 w-16 text-gold/30 mx-auto" />
          <div key={idx} className="mt-6 animate-fade-in">
            <p className="text-lg sm:text-2xl leading-relaxed text-navy font-display italic">
              "{t.text}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full gradient-gold shadow-gold">
                <span className="font-bold text-navy">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
              <div className="text-left">
                <div className="font-bold text-navy">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setIdx((i) => (i - 1 + len) % len)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:gradient-gold hover:border-transparent transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-8 gradient-gold" : "w-2 bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % len)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:gradient-gold hover:border-transparent transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            Ready to begin your journey? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: Phone,
              title: "Call Us",
              lines: ["+91 98211 21982", "+91 98211 12139"],
              href: "tel:+919821121982",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              lines: ["Bandra West,", "Mumbai, Maharashtra"],
              href: "#",
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: ["info@sstutorial.com"],
              href: "mailto:info@sstutorial.com",
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-2xl bg-card border border-border p-8 shadow-card hover-lift text-center"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl gradient-navy shadow-gold group-hover:scale-110 transition-transform">
                <c.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{c.title}</h3>
              <div className="mt-3 space-y-1">
                {c.lines.map((l) => (
                  <div key={l} className="text-muted-foreground">
                    {l}
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 rounded-3xl gradient-navy p-8 sm:p-12 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Admissions <span className="text-gradient-gold italic">Open</span>
            </h3>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Small batches fill up fast. Reserve a seat for your child in Bandra's most trusted
              coaching class.
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

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Toppers />
        <Insights />
        <MediaGallery />
        <InstagramFeed />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <EnrollModal />
    </div>
  );
}
