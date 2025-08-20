"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Shield, Zap, Palette, Users, Globe, Smartphone, TrendingUp, Target } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "تصميم فريد ومخصص",
      problem: "هل يبدو موقعك مثل باقي المواقع؟",
      solution: "نصمم هوية بصرية فريدة تعكس شخصية علامتك التجارية وتميزك عن المنافسين",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "تصميم متجاوب",
      problem: "هل يفقد موقعك العملاء على الهواتف؟",
      solution: "يعمل موقعك بشكل مثالي على جميع الأجهزة والشاشات لضمان تجربة مستخدم مثالية",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "أداء عالي",
      problem: "هل يعاني موقعك من البطء؟",
      solution: "نضمن سرعة تحميل فائقة لتحسين تجربة المستخدم وترتيبك في محركات البحث",
      color: "from-gray-400 to-gray-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "أمان متقدم",
      problem: "هل تقلق من اختراق موقعك؟",
      solution: "حماية شاملة من التهديدات الإلكترونية مع شهادات SSL ونسخ احتياطية دورية",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "سهولة الاستخدام",
      problem: "هل يصعب على عملائك التنقل في موقعك؟",
      solution: "واجهة مستخدم بديهية وسهلة التنقل لزيادة معدل التحويل والتفاعل",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO محسن",
      problem: "هل لا يجد عملاؤك موقعك في البحث؟",
      solution: "تحسين شامل لمحركات البحث لزيادة الظهور الإلكتروني وجذب المزيد من العملاء",
      color: "from-gray-400 to-gray-500"
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
    <section className="py-20 px-4 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
            لماذا تختار موقع مخصص؟
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
            اكتشف كيف يمكن لموقع مخصص أن يحل مشاكل موقعك الحالي ويحقق نتائج مذهلة
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 luxury-hover">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white font-arabic">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {/* Problem */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <p className="text-gray-300 font-semibold font-arabic text-sm">
                    {feature.problem}
                  </p>
                </div>
                
                {/* Solution */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <p className="text-white font-arabic text-sm">
                    {feature.solution}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 font-arabic">
              مميزات إضافية تضمن نجاحك
            </h3>
            <p className="text-lg text-gray-300 font-arabic">
              نقدم لك قيمة إضافية مع كل مشروع لضمان تحقيق أهدافك التجارية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium text-lg font-arabic">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 luxury-hover cursor-pointer">
            <Target className="w-6 h-6" />
            <span className="font-arabic">احصل على جميع هذه المميزات مع موقعك المخصص</span>
          </div>
        </div>
      </div>
    </section>
  )
}
