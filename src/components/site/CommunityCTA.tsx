/* eslint-disable prettier/prettier */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { images, WA_COMMUNITY_URL } from "@/content/site";
import { Reveal, SplitLines } from "./motion";

export function CommunityCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  return (
    <section ref={ref} className="grain relative overflow-hidden">
      <motion.img style={{ scale }} src={images.circle} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1440px] flex-col justify-center px-5 py-24 md:px-10">
        <p className="eyebrow mb-8 text-primary">An open invitation</p>
        <h2 className="font-display text-[15vw] md:text-[10vw] xl:text-[10rem]">
          <SplitLines lines={["Ready to", "find your", <span key="c" className="text-primary">circle?</span>]} />
        </h2>
        <Reveal delay={0.3} className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg text-cream-soft md:text-xl">
            There's room for you here. Connect with men who are growing, learning, and showing up for one another.
          </p>
          <a href={WA_COMMUNITY_URL} target="_blank" rel="noreferrer" className="btn-primary !min-h-14 !px-8 self-start">Join the circle <ArrowUpRight className="h-5 w-5" /></a>
        </Reveal>
      </div>
    </section>
  );
}
