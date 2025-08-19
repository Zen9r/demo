"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function ComparisonSection() {
  const customFeatures = [
    "تصميم فريد ومخصص لعلامتك التجارية",
    "أداء عالي وسرعة في التحميل",
    "أمان متقدم وحماية من الاختراق",
    "سهولة في التحديث والصيانة",
    "دعم فني متخصص ومتواصل",
    "مرونة في التطوير والتوسع"
  ]

  const templateFeatures = [
    "تصميم عام ومشابه للمواقع الأخرى",
    "أداء محدود وبطء في التحميل",
    "أمان ضعيف وعرضة للاختراق",
    "صعوبة في التحديث والصيانة",
    "دعم محدود وغير متخصص",
    "قيود في التطوير والتوسع"
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            مقارنة شاملة: موقع مخصص أم قالب جاهز؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف الفرق الجوهري بين الحلول المخصصة والقوالب الجاهزة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Custom Website */}
          <Card className="border-2 border-green-200 bg-green-50/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700 font-bold">
                الموقع المخصص
              </CardTitle>
              <p className="text-green-600 font-medium">الحل الأمثل لعملك</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {customFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Template Website */}
          <Card className="border-2 border-red-200 bg-red-50/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-red-700 font-bold">
                القوالب الجاهزة
              </CardTitle>
              <p className="text-red-600 font-medium">حلول محدودة ومقيدة</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {templateFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            اختر الحل المخصص لضمان نجاح موقعك الإلكتروني
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-semibold">
            <Check className="w-5 h-5" />
            الموقع المخصص هو الخيار الأفضل
          </div>
        </div>
      </div>
    </section>
  )
}
