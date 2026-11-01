import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { HeroSection } from "@/components/site/HeroSection";
import { ImpactStats } from "@/components/site/ImpactStats";
import { MissionSection } from "@/components/site/MissionSection";
import { ValuesSection } from "@/components/site/ValuesSection";
import { CommunityCTA } from "@/components/site/CommunityCTA";
import { EventsSection } from "@/components/site/EventsSection";
import { GallerySection } from "@/components/site/GallerySection";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

const title = "Just Us Boys Africa — No Pressure. Just Direction.";
const description = "Just men building men. A safe space in Lagos and across Africa for connection, expression, and conversations that actually matter.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <HeroSection />
        <ImpactStats />
        <MissionSection />
        <ValuesSection />
        <CommunityCTA />
        <EventsSection />
        <GallerySection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  );
}
