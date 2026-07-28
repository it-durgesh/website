import { useEffect, useState } from "react";

type Listener = (open: boolean) => void;
const listeners = new Set<Listener>();
let state = false;

export function openEnroll() {
  state = true;
  listeners.forEach((l) => l(state));
}
export function closeEnroll() {
  state = false;
  listeners.forEach((l) => l(state));
}
export function useEnrollOpen(): [boolean, (v: boolean) => void] {
  const [open, setOpen] = useState(state);
  useEffect(() => {
    const l: Listener = (v) => setOpen(v);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  return [open, (v) => (v ? openEnroll() : closeEnroll())];
}
