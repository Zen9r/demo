"use client"

import HeroSection from "../components/HeroSection"
import ShowcaseSection from "../components/ShowcaseSection"
import FeaturesSection from "../components/FeaturesSection"
import PricingSection from "../components/PricingSection"
import ProcessSection from "../components/ProcessSection"
import Footer from "../components/Footer"

export default function BusinessArabiaPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <PricingSection />
      <ProcessSection />
      <Footer />
    </main>
  )
}
