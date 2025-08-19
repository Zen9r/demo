"use client"

import { Button } from "@/components/ui/button"
import { Mail, ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Visual Element - Placeholder for PDF image */}
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">🏢</div>
              <div className="text-blue-600 font-semibold">صورة من PDF</div>
            </div>
          </div>
        </div>

        {/* Headlines */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            عرض سعر مخصص
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-600 leading-tight">
            بوابة إلكترونية لشركة بزنس اريبيا
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            موقع إلكتروني متطور ومتجاوب مصمم خصيصاً لاحتياجات عملك
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            <Mail className="w-5 h-5 ml-2" />
            تواصل معنا الآن
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-200">
            <ChevronDown className="w-5 h-5 ml-2" />
            اكتشف المزيد
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-blue-600" />
        </div>
      </div>
    </section>
  )
}
