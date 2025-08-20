"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Shield, Zap, Palette, Users, Globe, Smartphone } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "تصميم فريد ومخصص",
      description: "تصميم يعكس هوية علامتك التجارية ويميزك عن المنافسين",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "تصميم متجاوب",
      description: "يعمل بشكل مثالي على جميع الأجهزة والشاشات",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "أداء عالي",
      description: "سرعة تحميل فائقة وتجربة مستخدم سلسة",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "أمان متقدم",
      description: "حماية شاملة من التهديدات الإلكترونية",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "سهولة الاستخدام",
      description: "واجهة مستخدم بديهية وسهلة التنقل",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO محسن",
      description: "محسن لمحركات البحث لزيادة الظهور الإلكتروني",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const additionalFeatures = [
    "نظام إدارة محتوى متقدم وسهل الاستخدام",
    "لوحة تحكم شاملة لإدارة الموقع",
    "دعم فني متخصص ومتواصل",
    "تدريب شامل على استخدام النظام",
    "صيانة دورية وتحديثات مستمرة",
    "ضمان الجودة والموثوقية"
  ]

  return (
    <section className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
            المميزات الرئيسية
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
            نقدم مجموعة شاملة من المميزات المتطورة لضمان نجاح موقعك الإلكتروني
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white font-arabic">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 leading-relaxed font-arabic">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 font-arabic">
              مميزات إضافية
            </h3>
            <p className="text-lg text-gray-300 font-arabic">
              نقدم لك قيمة إضافية مع كل مشروع
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium text-lg font-arabic">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg font-arabic">
            <Star className="w-6 h-6" />
            احصل على جميع هذه المميزات مع موقعك المخصص
          </div>
        </div>
      </div>
    </section>
  )
}
