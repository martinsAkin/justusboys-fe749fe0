import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className, y = 32 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Line-by-line masked text reveal. */
export function SplitLines({ lines, className, lineClassName, delay = 0 }: { lines: ReactNode[]; className?: string; lineClassName?: string; delay?: number }) {
  return (
    <span className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function ImageReveal({ src, alt, className, imgClassName, width, height, eager }: { src: string; alt: string; className?: string; imgClassName?: string; width?: number; height?: number; eager?: boolean }) {
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease }}
    >
      <img src={src} alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} className={`h-full w-full object-cover ${imgClassName ?? ""}`} />
    </motion.div>
  );
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setVal(to); return; }
    const c = animate(0, to, { duration: 1.8, ease, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{val}{suffix}</span>;
}
