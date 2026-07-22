import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import WhyChemicalWala from "@/components/home/WhyChemicalWala";
import Subjects from "@/components/home/Subjects";
import Founder from "@/components/home/Founder";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020817] text-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <WhyChemicalWala />
      <Subjects />
      <Founder />
      <Footer />
    </main>
  );
}