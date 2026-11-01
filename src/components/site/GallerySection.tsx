import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import { gallery } from "@/content/site";
import { Reveal, SplitLines } from "./motion";

const spans = ["md:col-span-5 md:row-span-2 aspect-[4/5]", "md:col-span-7 aspect-[3/2] md:mt-24"];

export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <section className="bg-paper py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <h2 className="font-display col-span-12 text-[13vw] md:col-span-8 md:text-8xl xl:text-9xl">
            <SplitLines lines={["Grow together.", <span key="g" className="text-primary">Go further.</span>]} />
          </h2>
          <Reveal className="col-span-12 self-end md:col-span-4">
            <p className="font-display text-2xl">Nobody does life alone here.</p>
            <p className="mt-3 text-ink-soft">Step into a community of men who are growing, learning and showing up for each other every day.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.1} className={spans[i % spans.length]}>
              <button onClick={() => setOpen(i)} aria-label={`Open image: ${g.alt}`} className="group relative block h-full w-full overflow-hidden rounded-sm">
                <img src={g.src} alt={g.alt} loading="lazy" width={g.w} height={g.h} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><Plus className="h-5 w-5" /></span>
                <span className="eyebrow absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1.5 text-ink">From the community</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label="Image viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-5">
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-border text-foreground"><X /></button>
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} src={gallery[open].src} alt={gallery[open].alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
