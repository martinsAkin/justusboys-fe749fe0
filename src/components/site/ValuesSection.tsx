import { motion } from "framer-motion";
import { pillars, images } from "@/content/site";
import { Reveal } from "./motion";

const layouts = [
  "md:col-span-7",
  "md:col-span-5 md:mt-40",
  "md:col-span-5 md:col-start-2",
  "md:col-span-6 md:-mt-24",
];

export function ValuesSection() {
  return (
    <section className="bg-paper py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-6xl md:text-8xl">Four<br />pillars.</h2>
          <p className="eyebrow max-w-xs text-ink-soft">What we stand on — and what we come back to every time we gather.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12">
          {pillars.map((p, i) => (
            <Reveal key={p.n} className={layouts[i]}>
              <motion.article whileHover="hover" className="group relative border-t-2 border-ink pt-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-outline text-7xl md:text-9xl">{p.n}</span>
                  <span className="eyebrow mt-3 text-ink-soft">Pillar</span>
                </div>
                <h3 className="font-display mt-4 text-5xl transition-colors group-hover:text-primary md:text-7xl">{p.title}</h3>
                <motion.div variants={{ hover: { width: "100%" } }} initial={{ width: "3rem" }} className="mt-5 h-1 bg-primary" />
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{p.text}</p>
                {i === 0 && (
                  <div className="mt-8 aspect-[16/7] overflow-hidden rounded-sm">
                    <img src={images.circle} alt="Young men gathered in a circle in conversation" loading="lazy" width={1600} height={912} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
