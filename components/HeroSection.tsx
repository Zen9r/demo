"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        {/* Small Heading */}
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-medium text-white font-arabic">
            عرض سعر
          </h2>
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-arabic text-shadow">
            تطوير يواكب طموحاتك
          </h1>
        </div>

        {/* Subheading */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-normal leading-relaxed font-arabic">
            نحول أفكارك إلى واقع رقمي متكامل. مواقع ويب سريعة، تطبيقات مذهلة، وحلول تقنية تُحدث فرقًا.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-4 border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold transition-all duration-300 group"
          >
            <span className="font-arabic">ابدأ مشروعك</span>
            <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
