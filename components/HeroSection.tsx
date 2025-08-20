"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Award } from "lucide-react"

export default function HeroSection() {
  // This would be dynamically populated based on the client
  const clientName = "لبزنس اريبيا"
  
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        {/* Small Heading */}
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-medium text-gray-300 font-arabic">
            عرض سعر مخصص
          </h2>
        </div>

        {/* Main Title */}
        <div className="space-y-6 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-arabic text-shadow">
            عرض مخصص <span className="text-luxury">{clientName}</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-normal leading-relaxed font-arabic">
            بعد دراسة متطلبات عملك بعناية، نقدم لك هذا العرض المخصص لبناء موقع إلكتروني احترافي يواكب طموحاتك ويحقق أهدافك التجارية.
          </p>
        </div>

        

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
  <Button 
    size="lg" 
    className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl"
  >
    <span className="font-arabic">ابدأ مشروعك الآن</span>
    <ArrowRight className="w-5 h-5 mr-2 text-black group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
  </Button>
</div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}
