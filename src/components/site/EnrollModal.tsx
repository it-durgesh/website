import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { GraduationCap, Send, CheckCircle2 } from "lucide-react";
import { useEnrollOpen } from "./enroll-store";

const COURSES = [
  "SSC (Class 10)",
  "HSC — Science",
  "HSC — Commerce",
  "HSC — Arts",
  "Class 9",
  "Class 8",
];

export function EnrollModal() {
  const [open, setOpen] = useEnrollOpen();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Front-end only — simulate a submit
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setOpen(false);
    }, 1800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg p-0 overflow-hidden border-0 shadow-elegant">
        <div className="relative gradient-navy px-6 py-8 sm:px-8">
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl gradient-gold shadow-gold">
              <GraduationCap className="h-5 w-5 text-navy" />
            </span>
            <div>
              <DialogHeader>
                <DialogTitle className="text-white font-display text-2xl">
                  Enrol at S.S. Tutorial's
                </DialogTitle>
                <DialogDescription className="text-white/70">
                  Reserve a seat — we'll call you back within 24 hours.
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>
        </div>

        {done ? (
          <div className="p-8 text-center animate-scale-in">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-gold shadow-gold">
              <CheckCircle2 className="h-8 w-8 text-navy" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-navy font-display">
              Thank you!
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Your enquiry has been received. Our team will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Student Name" name="name" placeholder="Full name" required />
              <Field label="Parent Name" name="parent" placeholder="Full name" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" name="phone" type="tel" placeholder="+91" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
                Course
              </label>
              <select
                name="course"
                required
                defaultValue=""
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="" disabled>
                  Select a course
                </option>
                {COURSES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Anything we should know?"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-6 py-3.5 font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100"
            >
              {submitting ? "Sending..." : (<>Submit Enquiry <Send className="h-4 w-4" /></>)}
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              By submitting you agree to be contacted about admissions.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
        {label}
      </label>
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
