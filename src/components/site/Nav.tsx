import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GraduationCap, Menu, Phone, X } from "lucide-react";
import { openEnroll } from "./enroll-store";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/#toppers", label: "Toppers" },
  { to: "/#insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
  { to: "https://blog.sstutorial.com/", label: "Blog" },
];

export function Nav({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparentOnTop || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/90 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            {/* <span className="grid h-10 w-10 place-items-center rounded-lg gradient-navy shadow-gold group-hover:scale-110 transition-transform">
              <GraduationCap className="h-5 w-5 text-gold" />
            </span> */}
            <span className="text-lg font-bold text-navy group-hover:text-gold transition-colors">
              <img
                src={!solid ? "src/assets/goldenLogo.png" : "src/assets/sst_logo.png"}
                alt="SS tutorial's Logo"
                className="h-10 w-auto"
              />
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => {
              const isHash = l.to.includes("#");
              const active = !isHash && pathname === l.to;
              const cls = `text-sm font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gold after:transition-all ${
                active ? "after:w-full" : "after:w-0 hover:after:w-full"
              } ${solid ? "text-navy" : "text-white/90 hover:text-white"}`;
              return isHash ? (
                <a key={l.to} href={l.to} className={cls}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.to} to={l.to} className={cls}>
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openEnroll}
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold hover:scale-105 transition-transform"
            >
              Enrol Now
            </button>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden p-2 rounded-md ${solid ? "text-navy" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => {
              const isHash = l.to.includes("#");
              const cls = "text-navy font-medium py-2 border-b border-border/50";
              return isHash ? (
                <a key={l.to} href={l.to} onClick={() => setOpen(false)} className={cls}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={cls}>
                  {l.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setOpen(false);
                openEnroll();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              Enrol Now
            </button>
            <a
              href="tel:+919821121982"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-5 py-3 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" /> +91 98211 21982
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
