import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";
import WhyChemicalWala from "@/components/WhyChemicalWala";
import Subjects from "@/components/Subjects";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <FeatureCards />
      <WhyChemicalWala />
      <Subjects />
      <Founder />
      <Footer />
    </main>
  );
}