import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import WhatWeDo from "@/components/WhatWeDo";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-ink">
      <Hero />
      <VideoShowcase />
      <WhatWeDo />
      <Contact />
    </main>
  );
}
