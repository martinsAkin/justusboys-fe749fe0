/* eslint-disable prettier/prettier */
import { ArrowUpRight, MapPin, Clock, Calendar } from "lucide-react";
import { events, eventStatus, type EventStatus } from "@/content/site";
import { ImageReveal, Reveal } from "./motion";

const statusLabel: Record<EventStatus, string> = {
  upcoming: "Upcoming",
  past: "Past gathering",
  tba: "Date to be announced",
};

function fmt(date: string | null) {
  if (!date) return "Date not listed";
  return new Date(date + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function EventsSection() {
  const hasUpcoming = events.some((e) => eventStatus(e) === "upcoming");
  return (
    <section id="events" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-5 border-b border-border pb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6 text-primary">{hasUpcoming ? "Upcoming" : "Gatherings"}</p>
            <h2 className="font-display text-6xl md:text-8xl xl:text-9xl">Events &amp;<br />gatherings</h2>
          </div>
          <p className="font-display col-span-12 self-end text-2xl text-primary md:col-span-4 md:text-right md:text-3xl">Come through.<br />No tie needed.</p>
        </div>

        <ol>
          {events.map((e, i) => {
            const status = eventStatus(e);
            return (
              <li key={e.title} className="grid grid-cols-12 gap-5 border-b border-border py-12 md:gap-10">
                <span className="font-display col-span-12 text-xl text-muted-foreground md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <ImageReveal src={e.image} alt={`${e.title} flyer`} width={2048} height={2560} className="col-span-12 aspect-[4/5] rounded-sm md:col-span-5" />
                <Reveal className="col-span-12 flex flex-col justify-between gap-10 md:col-span-6">
                  <div>
                    <span className={`eyebrow inline-block rounded-full px-3 py-1.5 ${status === "upcoming" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}>
                      {statusLabel[status]}
                    </span>
                    <h3 className="font-display mt-6 text-5xl md:text-7xl">{e.title}</h3>
                    {status === "past" && <p className="mt-4 text-cream-soft">Where it started — a community highlight from our first gathering.</p>}
                  </div>
                  <dl className="grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
                    {[
                      { icon: MapPin, k: "Location", v: e.location },
                      { icon: Calendar, k: "Date", v: fmt(e.date) },
                      { icon: Clock, k: "Time", v: e.time },
                    ].map(({ icon: Icon, k, v }) => (
                      <div key={k} className="bg-background py-4 sm:px-4 sm:first:pl-0">
                        <dt className="eyebrow flex items-center gap-2 text-muted-foreground"><Icon className="h-3.5 w-3.5" />{k}</dt>
                        <dd className="mt-2 text-lg font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={e.link} target="_blank" rel="noreferrer" className={status === "upcoming" ? "btn-primary self-start" : "btn-ghost self-start"}>
                    {status === "upcoming" ? "Register" : e.linkLabel} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ol>
        {!hasUpcoming && (
          <p className="mt-10 text-muted-foreground">New gatherings are announced to the circle first. <a href="#join" className="text-primary underline underline-offset-4">Stay in the loop</a>.</p>
        )}
      </div>
    </section>
  );
}
