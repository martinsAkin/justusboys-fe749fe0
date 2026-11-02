import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { images, LUMA_URL, WA_COMMUNITY_URL } from "@/content/site";
import { SplitLines, ease } from "./motion";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative min-h-[100svh] overflow-hidden pt-20 md:pt-24"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-5 px-5 md:px-10">
        <div className="col-span-12 flex items-center justify-between pt-6 md:pt-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="eyebrow flex items-center gap-3 text-primary"
          >
            <span className="h-px w-10 bg-primary" /> A circle for the real ones
          </motion.p>
        </div>

        <h1 className="font-display relative z-10 col-span-12 mt-6 text-[17vw] md:text-[7.5vw] xl:text-[7.5rem]">
          No pressure. {""}
          Just direction.
        </h1>
      </div>

      <div className="mx-auto mt-6 grid max-w-[1440px] grid-cols-12 gap-5 px-5 pb-16 md:-mt-10 md:px-10">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.4, delay: 0.4, ease }}
          className="relative col-span-12 h-[52vh] overflow-hidden rounded-sm md:col-span-8 md:col-start-5 md:h-[60vh]"
        >
          <motion.img
            style={{ y }}
            src={images.hero}
            alt="Young Nigerian men laughing together on steps in Lagos at sunset"
            width={1600}
            height={1104}
            className="h-[118%] w-full object-cover object-[50%_35%]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="col-span-12 flex flex-col justify-end gap-8 md:col-span-4 md:row-start-1 md:pb-2 md:pt-24"
        >
          <p className="max-w-sm text-lg leading-relaxed text-cream-soft md:text-xl">
            Just men building men. A safe space for connection, expression, and conversations that
            actually matter.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_COMMUNITY_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Join the circle <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#story" className="btn-ghost">
              Explore our story
            </a>
          </div>
          <a
            href="#community"
            className="eyebrow hidden items-center gap-3 text-muted-foreground md:flex"
            aria-label="Scroll to content"
          >
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown className="h-4 w-4" />
            </motion.span>
            Scroll
          </a>
        </motion.div>
      </div>
    </section>
  );
}
