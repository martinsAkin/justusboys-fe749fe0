/* eslint-disable prettier/prettier */
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { socials } from "@/content/site";
import { Reveal } from "./motion";

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6">Get in touch</p>
            <h2 className="font-display text-[10vw] md:text-6xl xl:text-7xl">Find us<br />everywhere.</h2>
          </div>
          <p className="col-span-12 self-end text-lg md:col-span-4">Follow along, slide in the DMs, or just come through to an event.</p>
        </div>
        
        <ul className="mt-16 border-t-2 border-primary-foreground">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <li className="border-b border-primary-foreground/30">
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={`${s.label}: ${s.handle}`}
                  className="group flex items-center justify-between gap-4 py-6 md:py-8"
                >
                  <span className="flex items-center gap-5 md:gap-8">
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary md:h-20 md:w-20">
                      {s.label === "Instagram" ? (
                        <FaInstagram className="h-7 w-7 md:h-10 md:w-10" />
                      ) : (
                        <FaWhatsapp className="h-7 w-7 md:h-10 md:w-10" />
                      )}
                    </span>

                    <span className="font-display text-2xl md:text-5xl">
                      {s.label}
                    </span>
                  </span>

                  <span className="flex items-center gap-4">
                    <span className="hidden text-lg font-medium md:inline">
                      {s.handle}
                    </span>

                    <ArrowUpRight className="h-6 w-6 transition-transform group-hover:rotate-45" />
                  </span>
                </a>

                <span className="block pb-4 pl-20 text-sm md:hidden">
                  {s.handle}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
