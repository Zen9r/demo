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
    color: "from-blue-500 to-blue-600"
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
    color: "from-purple-500 to-purple-600",
    popular: true
  }

  return (
    <section className="py-20 px-4 text-white">
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
          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                <Star className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-arabic">
                {basicPackage.name}
              </CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">{basicPackage.price} SAR</div>
                <div className="text-lg text-gray-400 line-through">{basicPackage.originalPrice} SAR</div>
                <div className="text-lg text-green-400 font-bold">{basicPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold font-arabic">
                  <Clock className="w-4 h-4" />
                  مدة الإنجاز: {basicPackage.duration}
                </div>
              </div>
              
              <div className="space-y-3">
                {basicPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium font-arabic">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold py-3 text-lg mt-6 font-arabic">
                اختر الباقة الأساسية
              </Button>
            </CardContent>
          </Card>

          {/* Advanced Package */}
          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 relative scale-105">
            {advancedPackage.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white/20 border border-white/30 text-white px-6 py-2 rounded-full text-sm font-bold font-arabic">
                  الأكثر طلباً
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-6 pt-8">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                <Crown className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-arabic">
                {advancedPackage.name}
              </CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">{advancedPackage.price} SAR</div>
                <div className="text-lg text-gray-400 line-through">{advancedPackage.originalPrice} SAR</div>
                <div className="text-lg text-green-400 font-bold">{advancedPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold font-arabic">
                  <Clock className="w-4 h-4" />
                  مدة الإنجاز: {advancedPackage.duration}
                </div>
              </div>
              
              <div className="space-y-3">
                {advancedPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium font-arabic">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold py-3 text-lg mt-6 font-arabic">
                اختر الباقة المتقدمة
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-arabic">
              ضمان الجودة
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6 font-arabic">
              نضمن لك جودة عالية وأداء ممتاز مع كل مشروع. نحن نقدم ضمان استرداد الأموال إذا لم تكن راضياً عن النتيجة النهائية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full font-semibold font-arabic">
                <Shield className="w-5 h-5" />
                ضمان الجودة
              </div>
              <div className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full font-semibold font-arabic">
                <Users className="w-5 h-5" />
                دعم فني متخصص
              </div>
              <div className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full font-semibold font-arabic">
                <Award className="w-5 h-5" />
                شهادة ضمان
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
