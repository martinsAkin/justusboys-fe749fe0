/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { brand, nav, WA_COMMUNITY_URL } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#home" aria-label="Just Us Boys home" onClick={() => setOpen(false)}>
          <img
            src={brand.logo}
            alt="Just Us Boys"
            className="h-9 w-auto md:h-11"
            width={66}
            height={44}
          />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
          <a href={WA_COMMUNITY_URL} target="_blank" rel="noreferrer" className="btn-primary !min-h-11">
            Join the circle <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WA_COMMUNITY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !min-h-10 !px-4 !text-[0.65rem]"
          >
            Join
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-8">
              {nav.map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="font-display block border-b border-border py-4 text-4xl hover:text-primary"
                  >
                    <span className="eyebrow mr-3 align-middle text-primary">0{i + 1}</span>
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-5 pt-8">
              <a
                href={WA_COMMUNITY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center"
              >
                Join the circle <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
