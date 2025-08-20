"use client"

import HeroSection from "../components/HeroSection"
import ShowcaseSection from "../components/ShowcaseSection"
import FeaturesSection from "../components/FeaturesSection"
import PricingSection from "../components/PricingSection"
import FAQSection from "../components/FAQSection"
import ProcessSection from "../components/ProcessSection"
import Footer from "../components/Footer"
import Beams from "../components/Beams"

export default function BusinessArabiaPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Unified Beams Background */}
      <Beams />
      
      {/* Content Sections with higher z-index */}
      <div className="relative z-10">
        <HeroSection />
        <ShowcaseSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <ProcessSection />
        <Footer />
      </div>
    </main>
  )
}
