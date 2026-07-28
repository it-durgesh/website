import { Link } from "@tanstack/react-router";
import { Facebook, GraduationCap, Instagram, MapPin, Phone, Mail, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="src/assets/goldenLogo.png"
                alt="SS tutorial's Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed">
              Established in 2003, S S Tutorials is a premier coaching institute in Bandra West,
              Mumbai, dedicated to nurturing academic excellence and confidence in every student.
              Over the past two decades, we have built a reputation as a trusted educational
              destination, serving students locally and across Mumbai. We offer comprehensive
              coaching tailored for: School Level: Class 8th, 9th, and SSC (Class 10th) Junior
              College: HSC (Science, Commerce, and Arts).
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#toppers" className="hover:text-gold transition-colors">
                  Toppers
                </a>
              </li>
              <li>
                <a href="/#insights" className="hover:text-gold transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> +91 98211 21982 / +91 98211
                12139
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> enquiry@sstutorial.com /
                sstutorialbandrawest@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Shop No 3A, Gadiya house,
                Junction of Bazar and Chapel road, Bandra West, Mumbai, Maharashtra, India, Pincode:
                400050
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[
                { I: Instagram, href: "https://www.instagram.com/sstutorials_bandra/" },
                { I: Facebook, href: "#" },
                { I: Youtube, href: "#" },
              ].map(({ I, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:gradient-gold hover:border-transparent hover:text-navy transition-all"
                  aria-label="Social link"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} S.S. Tutorial's. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
