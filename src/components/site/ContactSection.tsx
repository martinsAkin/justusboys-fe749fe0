import { ArrowUpRight } from "lucide-react";
import { socials } from "@/content/site";
import { Reveal } from "./motion";

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6">Get in touch</p>
            <h2 className="font-display text-[14vw] md:text-8xl xl:text-9xl">Find us<br />everywhere.</h2>
          </div>
          <p className="col-span-12 self-end text-lg md:col-span-4">Follow along, slide in the DMs, or just come through to an event.</p>
        </div>
        <ul className="mt-16 border-t-2 border-primary-foreground">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <li className="border-b border-primary-foreground/30">
                <a href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="group flex items-center justify-between gap-4 py-6 md:py-8">
                  <span className="font-display text-5xl transition-transform duration-500 group-hover:translate-x-4 md:text-8xl">{s.label}</span>
                  <span className="flex items-center gap-4">
                    <span className="hidden text-lg font-medium md:inline">{s.handle}</span>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary md:h-16 md:w-16">
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    </span>
                  </span>
                </a>
                <span className="block pb-4 text-sm md:hidden">{s.handle}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
