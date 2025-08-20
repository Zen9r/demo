"use client"

import HeroSection from "../components/HeroSection"
import ShowcaseSection from "../components/ShowcaseSection"
import FeaturesSection from "../components/FeaturesSection"
import PricingSection from "../components/PricingSection"
import ProcessSection from "../components/ProcessSection"
import Footer from "../components/Footer"
import Beams from "../components/Beams"

export default function BusinessArabiaPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Unified Beams Background */}
      <Beams />
      
      {/* Content Sections with higher z-index */}
      <div className="relative z-10">
        <HeroSection />
        <ShowcaseSection />
        <FeaturesSection />
        <PricingSection />
        <ProcessSection />
        <Footer />
      </div>
    </main>
  )
}
