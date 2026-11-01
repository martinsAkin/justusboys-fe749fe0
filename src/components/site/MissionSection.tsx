import { images } from "@/content/site";
import { ImageReveal, Reveal, SplitLines } from "./motion";

export function MissionSection() {
  return (
    <section id="story" className="grain overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-5 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-7">
          <p className="eyebrow mb-8 flex items-center gap-3 text-primary"><span className="h-px w-10 bg-primary" />Our mission</p>
          <h2 className="font-display text-[14vw] md:text-8xl xl:text-[8.5rem]">
            <SplitLines lines={["We built", "something", <span key="d" className="text-outline">different.</span>]} />
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            <Reveal>
              <p className="text-xl leading-snug md:text-2xl">
                A generation of young men are growing up in a world where strength is often confused with silence. Where asking for help can feel like weakness, and genuine connection can be difficult to find.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-cream-soft md:text-lg md:pt-16">
                We believe men deserve a space where they can speak freely, build meaningful relationships, discover direction, and become better versions of themselves — without having to pretend they have everything figured out.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="relative col-span-12 mt-10 lg:col-span-5 lg:mt-0">
          <ImageReveal src={images.mission} alt="Two young African men in honest conversation" width={1008} height={1312} className="aspect-[4/5] rounded-sm lg:ml-8" />
          <div className="absolute -bottom-6 left-0 max-w-[16rem] bg-primary p-5 text-primary-foreground md:-left-6">
            <p className="font-display text-2xl">Strength isn't silence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
