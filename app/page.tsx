import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import WhatWeDo from "@/components/WhatWeDo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink">
      <Header />
      <Hero />
      <VideoShowcase />
      <WhatWeDo />
      <Contact />
      <Footer />
    </main>
  );
}
