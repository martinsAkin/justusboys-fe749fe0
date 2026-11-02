/* eslint-disable prettier/prettier */
import { stats } from "@/content/site";
import { CountUp, Reveal } from "./motion";

const words = ["Community", "Connection", "Growth", "Direction", "Brotherhood"];

export function ImpactStats() {
  return (
    <section id="community" className="bg-paper text-ink">
      {/* <div className="overflow-hidden border-b border-ink/15 py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="font-display flex items-center gap-10 text-3xl md:text-5xl">
              {w} <span className="h-3 w-3 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div> */}
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20">
        <p className="eyebrow mb-4 text-ink-soft">Just Us Boys. Community. Connection. Growth.</p>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className={`border-ink/15 py-8 pr-4 ${i % 2 === 1 ? "border-l pl-5" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} lg:border-l lg:pl-8 ${i === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display block text-[22vw] leading-none sm:text-8xl xl:text-[9rem]">
                  <CountUp to={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-4 block max-w-[14rem] text-sm text-ink-soft md:text-base">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
