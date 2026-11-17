/* eslint-disable prettier/prettier */
// Central, editable brand content for Just Us Boys Africa.
import logo from "@/assets/white.png";
import flyer from "@/assets/lineup.jpeg";
import hero from "@/assets/hero.jpg";
import mission from "@/assets/connection.jpg";
import circle from "@/assets/panel.jpeg";
import gallery1 from "@/assets/gallery (1).jpeg";
import gallery1b from "@/assets/gallery (1).jpg";
import gallery2 from "@/assets/gallery (2).jpeg";
import gallery2b from "@/assets/gallery (2).jpg";
import gallery3 from "@/assets/gallery (3).jpeg";
import gallery3b from "@/assets/gallery (3).jpg";
import gallery4 from "@/assets/gallery (4).jpeg";
import gallery4b from "@/assets/gallery (4).jpg";
import gallery5 from "@/assets/gallery (5).jpeg";
import gallery6 from "@/assets/gallery (6).jpeg";
import gallery7 from "@/assets/gallery (7).jpeg";
import gallery8 from "@/assets/gallery (8).jpeg";
import gallery9 from "@/assets/gallery9.jpeg";



export const WA_COMMUNITY_URL = "https://chat.whatsapp.com/KxeSILPI6LYF4ZLDhvW6wZ?s=cl&p=i&mlu=4&ilr=4&iam=2";

export const brand = {
  name: "Just Us Boys",
  logo: logo,
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
  { value: 1, suffix: "+", label: "Gatherings and community experiences." },
  { value: 10, suffix: "+", label: "Mentors, professionals and experienced voices." },
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
    date: "2024-03-31",
    fallbackStatus: "past",
    image: flyer,
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
  { src: gallery1, alt: "Just Us Boys community gathering", w: 1024, h: 1280 },
  { src: gallery1b, alt: "Just Us Boys community gathering", w: 512, h: 341 },
  { src: gallery2, alt: "Just Us Boys community members on Boys Day", w: 512, h: 1000 },
  { src: gallery2b, alt: "Just Us Boys community members on Boys Day", w: 512, h: 1000 },
  { src: gallery3, alt: "Just Us Boys community gathering", w: 512, h: 300 },
  { src: gallery3b, alt: "Just Us Boys community gathering", w: 512, h: 300 },
  { src: gallery4, alt: "Just Us Boys community members on Boys Day", w: 512, h: 1000 },
  { src: gallery4b, alt: "Just Us Boys community members on Boys Day", w: 512, h: 1000 },
  { src: gallery5, alt: "Just Us Boys community gathering", w: 512, h: 300 },
  { src: gallery6, alt: "Just Us Boys community gathering", w: 512, h: 300 },
  { src: gallery7, alt: "Just Us Boys community gathering", w: 512, h: 300 },
  { src: gallery8, alt: "Just Us Boys community gathering", w: 512, h: 300 },
  { src: gallery9, alt: "Just Us Boys community gathering", w: 512, h: 300 },
];

export const socials = [
  { label: "Instagram", handle: "@justusboysafrica", href: "https://www.instagram.com/justusboysafrica/" },
  { label: "WhatsApp", handle: "+234 903 624 9990", href: "https://chat.whatsapp.com/KxeSILPI6LYF4ZLDhvW6wZ?s=cl&p=i&mlu=4&ilr=4&iam=2" },
];

/**
 * Newsletter integration point. No mailing service is connected yet,
 * so this honestly reports "not-configured". Replace with a real call later.
 */
export async function subscribe(_email: string): Promise<{ ok: true } | { ok: false; reason: "not-configured" | "error" }> {
  return { ok: false, reason: "not-configured" };
}
