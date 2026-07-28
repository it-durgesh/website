import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Instagram,
  Lightbulb,
  Play,
  TrendingUp,
  Heart,
  MessageCircle,
} from "lucide-react";
import studentsClassroom from "@/assets/students-classroom.jpg";
import heroLibrary from "@/assets/hero-library.jpg";

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

const insights = [
  {
    icon: Lightbulb,
    tag: "Study Tips",
    title: "5 Vedic Maths tricks that cut your exam time in half",
    excerpt: "From square roots to two-digit multiplication — quick methods every SSC & HSC student should know.",
  },
  {
    icon: TrendingUp,
    tag: "Exam Strategy",
    title: "How to plan the last 60 days before your boards",
    excerpt: "A week-by-week revision framework used by our 90%+ scorers year after year.",
  },
  {
    icon: BookOpen,
    tag: "Parent Corner",
    title: "Why small batch sizes matter more than star teachers",
    excerpt: "Attention, feedback loops, and confidence — the three pillars of consistent results.",
  },
];

export function Insights() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="insights" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-24 left-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">From our desk</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">Insights &amp; Study Tips</h2>
          <p className="mt-4 text-muted-foreground">
            Practical ideas from our faculty — designed to help students study smarter, not longer.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {insights.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-40 overflow-hidden gradient-navy">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.78 0.14 82) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-gold shadow-gold group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <p.icon className="h-7 w-7 text-navy" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">{p.tag}</span>
                <h3 className="mt-2 text-lg font-bold text-navy leading-snug group-hover:text-navy-light transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-navy inline-flex items-center gap-1">
                  Read more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: heroLibrary, alt: "Library reading area" },
  { src: studentsClassroom, alt: "Bright classroom" },
  { src: heroLibrary, alt: "Study environment" },
  { src: studentsClassroom, alt: "Group learning" },
];

export function MediaGallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [playing, setPlaying] = useState(false);
  return (
    <section id="media" className="py-24 sm:py-32 bg-secondary/40 relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Life at S.S. Tutorial's</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">A peek inside our classrooms</h2>
          <p className="mt-4 text-muted-foreground">
            Images, moments and videos from the place where learning feels like home.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Featured video */}
          <div
            className={`relative lg:col-span-3 aspect-video rounded-3xl overflow-hidden shadow-elegant group cursor-pointer ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            onClick={() => setPlaying(true)}
          >
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
                title="S.S. Tutorial's classroom tour"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={heroLibrary}
                  alt="Video: classroom tour"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full gradient-gold shadow-gold group-hover:scale-110 transition-transform animate-float">
                    <Play className="h-8 w-8 text-navy fill-navy ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">Watch</span>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold font-display">Classroom tour · 2 min</h3>
                </div>
              </>
            )}
          </div>

          {/* Image grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-2xl overflow-hidden shadow-card group ${
                  visible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const posts = [
  { cap: "🏆 Congratulations to our 2024–25 SSC toppers!", likes: 284, comments: 42, tone: "from-navy to-navy-light" },
  { cap: "📚 Vedic Maths workshop in session today", likes: 197, comments: 28, tone: "from-gold to-navy" },
  { cap: "🎯 HSC Science batch — chapter-wise MCQ drill", likes: 156, comments: 19, tone: "from-navy-light to-gold" },
  { cap: "💡 Doubt-solving session with our physics faculty", likes: 231, comments: 34, tone: "from-navy to-gold" },
  { cap: "⚽ Inter-batch football tournament — since 2004", likes: 312, comments: 51, tone: "from-gold to-navy-light" },
  { cap: "🌟 Parent-teacher meet · September edition", likes: 178, comments: 22, tone: "from-navy-light to-navy" },
];

export function InstagramFeed() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="instagram" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold">
            <Instagram className="h-4 w-4" /> Live Feed
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-navy">Follow us on Instagram</h2>
          <p className="mt-4 text-muted-foreground">
            Daily moments from our classrooms, toppers and events —
            <a
              href="https://www.instagram.com/sstutorials_bandra/"
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-semibold text-navy hover:text-gold transition-colors underline underline-offset-4 decoration-gold/60"
            >
              @sstutorials_bandra
            </a>
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((p, i) => (
            <a
              key={i}
              href="https://www.instagram.com/sstutorials_bandra/"
              target="_blank"
              rel="noreferrer"
              className={`group relative aspect-square rounded-2xl overflow-hidden shadow-card hover-lift bg-gradient-to-br ${p.tone} ${
                visible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
              <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between text-white">
                <Instagram className="h-5 w-5 opacity-80" />
                <div>
                  <p className="text-[11px] sm:text-xs leading-snug line-clamp-3 font-medium">{p.cap}</p>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-white/85">
                    <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3" /> {p.likes}</span>
                    <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {p.comments}</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors grid place-items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold uppercase tracking-widest">View</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/sstutorials_bandra/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 font-semibold text-navy shadow-gold hover:scale-105 transition-transform"
          >
            <Instagram className="h-4 w-4" /> Follow @sstutorials_bandra
          </a>
        </div>
      </div>
    </section>
  );
}
