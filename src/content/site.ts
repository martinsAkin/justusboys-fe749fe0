// Central, editable brand content for Just Us Boys Africa.
import logo from "@/assets/white.png.asset.json";
import flyer from "@/assets/flyer2.jpg.asset.json";
import img09 from "@/assets/image_09.png.asset.json";
import boysDay from "@/assets/boys-day.jpg.asset.json";
import hero from "@/assets/hero.jpg";
import mission from "@/assets/mission.jpg";
import circle from "@/assets/circle.jpg";

export const LUMA_URL = "https://luma.com/8oou1qdo";

export const brand = {
  name: "Just Us Boys",
  logo: logo.url,
  tagline: "No Pressure. Just Direction.",
  description: "Community for growth, accountability & real conversations.",
  email: "info@justusboysafrica.com",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Community", href: "#community" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const images = { hero, mission, circle };

// Edit these numbers freely — they animate in on scroll.
export const stats = [
  { value: 200, suffix: "+", label: "Men reached through the community." },
  { value: 10, suffix: "+", label: "Gatherings and community experiences." },
  { value: 25, suffix: "+", label: "Mentors, professionals and experienced voices." },
  { value: 1, suffix: "", label: "Community moving forward together." },
];

export const pillars = [
  { n: "01", title: "Connection", text: "Build genuine relationships with men who understand the journey, share the conversation, and make space for you to be yourself." },
  { n: "02", title: "Direction", text: "Find greater clarity in where you are going, what matters to you, and the kind of man you want to become." },
  { n: "03", title: "Growth", text: "Give yourself room to learn, reflect, and grow through honest conversations and the experiences we share together." },
  { n: "04", title: "Brotherhood", text: "Show up for one another, celebrate the wins, carry each other through the hard days, and never walk the journey alone." },
];

export type EventStatus = "upcoming" | "past" | "tba";
export type CommunityEvent = {
  title: string;
  location: string;
  time: string;
  /** ISO date (YYYY-MM-DD). Leave null if not confirmed. */
  date: string | null;
  /** Used only when `date` is null. */
  fallbackStatus: EventStatus;
  image: string;
  link: string;
  linkLabel: string;
};

// Add new events to this list — the section renders all of them.
export const events: CommunityEvent[] = [
  {
    title: "JustUsBoys Inaugural Event",
    location: "Lagos",
    time: "10:00 AM",
    date: null,
    fallbackStatus: "past",
    image: flyer.url,
    link: "https://tinyurl.com/2x3whnhw",
    linkLabel: "Event details",
  },
];

export function eventStatus(e: Pick<CommunityEvent, "date" | "fallbackStatus">, now = new Date()): EventStatus {
  if (!e.date) return e.fallbackStatus;
  const end = new Date(e.date + "T23:59:59");
  return end.getTime() < now.getTime() ? "past" : "upcoming";
}

export const gallery = [
  { src: boysDay.url, alt: "Just Us Boys community members on Boys Day", w: 1024, h: 1280 },
  { src: img09.url, alt: "Just Us Boys community gathering", w: 512, h: 341 },
];

export const socials = [
  { label: "Instagram", handle: "@justusboysafrica", href: "https://www.instagram.com/justusboysafrica/" },
  { label: "X", handle: "@Justusboysafric", href: "https://x.com/Justusboysafric?s=20" },
  { label: "WhatsApp", handle: "+234 903 624 9990", href: "https://wa.me/2349036249990" },
  { label: "Email", handle: "info@justusboysafrica.com", href: "mailto:info@justusboysafrica.com" },
];

/**
 * Newsletter integration point. No mailing service is connected yet,
 * so this honestly reports "not-configured". Replace with a real call later.
 */
export async function subscribe(_email: string): Promise<{ ok: true } | { ok: false; reason: "not-configured" | "error" }> {
  return { ok: false, reason: "not-configured" };
}
