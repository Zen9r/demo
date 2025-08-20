"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Clock, Users, Shield, Zap, Palette, Globe, Award } from "lucide-react"

export default function PricingSection() {
  const basicPackage = {
    name: "الباقة الأساسية",
    price: "2,500",
    originalPrice: "4,000",
    discount: "خصم 37.5%",
    features: [
      "تصميم موقع مخصص (5-7 صفحات)",
      "تصميم متجاوب لجميع الأجهزة",
      "نظام إدارة محتوى أساسي",
      "ألوان وخطوط مخصصة",
      "SEO أساسي",
      "شهادة SSL للأمان",
      "استضافة لمدة سنة",
      "دعم فني لمدة شهر"
    ],
    duration: "3-4 أسابيع",
    color: "from-gray-500 to-gray-600"
  }

  const advancedPackage = {
    name: "الباقة المتقدمة",
    price: "4,500",
    originalPrice: "8,000",
    discount: "خصم 43.75%",
    features: [
      "كل ما في الباقة الأساسية",
      "تصميم موقع مخصص (8-12 صفحة)",
      "نظام إدارة محتوى متقدم",
      "نظام طلبات وإدارة عملاء",
      "نظام مدفوعات متكامل",
      "لوحة تحكم إدارية شاملة",
      "SEO متقدم",
      "تحليلات وإحصائيات مفصلة",
      "نسخ احتياطية تلقائية",
      "دعم فني لمدة 3 أشهر",
      "تدريب شامل على النظام",
      "صيانة دورية لمدة 6 أشهر"
    ],
    duration: "6-8 أسابيع",
    color: "from-gray-600 to-gray-700",
    popular: true
  }

  return (
    <section className="py-20 px-4 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
            باقات الأسعار
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
            اختر الباقة التي تناسب احتياجات عملك وميزانيتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Basic Package */}
          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
            <CardHeader className="text-center pb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${basicPackage.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                <Star className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-arabic">
                {basicPackage.name}
              </CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-300">{basicPackage.price} SAR</div>
                <div className="text-lg text-gray-500 line-through">{basicPackage.originalPrice} SAR</div>
                <div className="text-lg text-gray-400 font-bold">{basicPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold border border-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-arabic">مدة الإنجاز: {basicPackage.duration}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {basicPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium font-arabic">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 text-lg mt-6 font-arabic">
                اختر الباقة الأساسية
              </Button>
            </CardContent>
          </Card>

          {/* Advanced Package */}
          <Card className="bg-gray-900/50 border-2 border-gray-600 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 relative">
            {advancedPackage.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-2 rounded-full font-bold text-sm font-arabic flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  الأكثر طلباً
                </div>
              </div>
            )}
            <CardHeader className="text-center pb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${advancedPackage.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                <Crown className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-arabic">
                {advancedPackage.name}
              </CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-300">{advancedPackage.price} SAR</div>
                <div className="text-lg text-gray-500 line-through">{advancedPackage.originalPrice} SAR</div>
                <div className="text-lg text-gray-400 font-bold">{advancedPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold border border-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-arabic">مدة الإنجاز: {advancedPackage.duration}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {advancedPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium font-arabic">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 text-lg mt-6 font-arabic">
                اختر الباقة المتقدمة
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-8 md:p-12">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-arabic">
                تحتاج باقة مخصصة؟
              </h3>
              <p className="text-gray-300 font-arabic">
                يمكننا تصميم باقة خاصة تناسب احتياجاتك المحددة
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-arabic"
              >
                تحدث معنا
              </Button>
            </CardContent>
          </div>
        </div>
      </div>
    </section>
  )
}
