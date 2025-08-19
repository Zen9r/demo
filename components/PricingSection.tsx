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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            باقات الأسعار
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر الباقة التي تناسب احتياجات عملك وميزانيتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Basic Package */}
          <Card className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
            <CardHeader className="text-center pb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${basicPackage.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                <Star className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {basicPackage.name}
              </CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">{basicPackage.price} SAR</div>
                <div className="text-lg text-gray-500 line-through">{basicPackage.originalPrice} SAR</div>
                <div className="text-lg text-green-600 font-bold">{basicPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Clock className="w-4 h-4" />
                  مدة الإنجاز: {basicPackage.duration}
                </div>
              </div>
              
              <div className="space-y-3">
                {basicPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg mt-6">
                اختر الباقة الأساسية
              </Button>
            </CardContent>
          </Card>

          {/* Advanced Package */}
          <Card className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-purple-300 relative scale-105">
            {advancedPackage.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  الأكثر طلباً
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-6 pt-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${advancedPackage.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                <Crown className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {advancedPackage.name}
              </CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">{advancedPackage.price} SAR</div>
                <div className="text-lg text-gray-500 line-through">{advancedPackage.originalPrice} SAR</div>
                <div className="text-lg text-green-600 font-bold">{advancedPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Clock className="w-4 h-4" />
                  مدة الإنجاز: {advancedPackage.duration}
                </div>
              </div>
              
              <div className="space-y-3">
                {advancedPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 text-lg mt-6">
                اختر الباقة المتقدمة
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ضمان الجودة
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              نضمن لك جودة عالية وأداء ممتاز مع كل مشروع. نحن نقدم ضمان استرداد الأموال إذا لم تكن راضياً عن النتيجة النهائية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold">
                <Shield className="w-5 h-5" />
                ضمان الجودة
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold">
                <Users className="w-5 h-5" />
                دعم فني متخصص
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-semibold">
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
