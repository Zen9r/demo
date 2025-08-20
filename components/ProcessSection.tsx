"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Palette, Code, Rocket, Award, ArrowRight, Zap, Shield } from "lucide-react"

export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "المرحلة الأولى: التخطيط والتصميم",
      description: "فهم متطلبات العميل وتصميم الهيكل العام للموقع",
      duration: "أسبوع واحد",
      icon: <Palette className="w-8 h-8" />,
      color: "from-gray-500 to-gray-600",
      activities: [
        "جلسة استماع لاحتياجات العميل",
        "تحديد الأهداف والمتطلبات",
        "تصميم الهيكل العام للموقع",
        "إنشاء النماذج الأولية (Wireframes)",
        "موافقة العميل على التصميم"
      ],
      details: "نبدأ بفهم عميق لاحتياجات عملك وأهدافك التجارية لنصمم حلولاً مخصصة تناسب رؤيتك"
    },
    {
      step: 2,
      title: "المرحلة الثانية: التطوير والبرمجة",
      description: "تطوير الموقع باستخدام أحدث التقنيات والبرمجة",
      duration: "2-3 أسابيع",
      icon: <Code className="w-8 h-8" />,
      color: "from-gray-600 to-gray-700",
      activities: [
        "تطوير الواجهة الأمامية",
        "برمجة الخلفية وقاعدة البيانات",
        "تكامل نظام إدارة المحتوى",
        "اختبار الوظائف الأساسية",
        "تحسين الأداء والسرعة"
      ],
      details: "نستخدم أحدث التقنيات لبناء موقع سريع وآمن ومتجاوب مع جميع الأجهزة"
    },
    {
      step: 3,
      title: "المرحلة الثالثة: الاختبار والتحسين",
      description: "اختبار شامل للموقع وإجراء التحسينات اللازمة",
      duration: "أسبوع واحد",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-gray-700 to-gray-800",
      activities: [
        "اختبار الوظائف والتفاعلات",
        "اختبار التوافق مع المتصفحات",
        "اختبار الأداء والسرعة",
        "إجراء التحسينات المطلوبة",
        "اختبار الأمان والحماية"
      ],
      details: "نختبر كل جزء من الموقع بدقة لضمان الجودة العالية والأداء المثالي"
    },
    {
      step: 4,
      title: "المرحلة الرابعة: الإطلاق والدعم",
      description: "إطلاق الموقع وتقديم الدعم الفني والتدريب",
      duration: "أسبوع واحد",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-gray-800 to-gray-900",
      activities: [
        "رفع الموقع على الخادم",
        "إعداد النطاق والاستضافة",
        "تدريب العميل على النظام",
        "تقديم الدعم الفني",
        "متابعة الأداء والاستقرار"
      ],
      details: "نضمن إطلاق ناجح للموقع مع دعم فني متواصل وتدريب شامل لفريقك"
    }
  ]

  return (
    <section className="py-20 px-4 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
            خطة العمل المثبتة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
            نتبع منهجية منظمة ومثبتة لضمان نجاح مشروعك وتحقيق أهدافك التجارية
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-gray-300 via-gray-500 to-gray-700 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-white rounded-full border-4 border-gray-600 transform -translate-x-1/2 z-10 hidden lg:block group-hover:scale-150 transition-transform duration-300"></div>
                
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Step Number and Icon */}
                  <div className="relative z-10 lg:hidden">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>

                  {/* Desktop Icon */}
                  <div className="hidden lg:block relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <Card className="flex-1 bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 group-hover:border-white/30 luxury-hover">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-white mb-2 font-arabic">
                            {step.title}
                          </CardTitle>
                          <p className="text-gray-300 text-lg leading-relaxed font-arabic mb-3">
                            {step.description}
                          </p>
                          <p className="text-white/70 text-sm font-arabic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {step.details}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full font-semibold border border-white/20">
                          <Clock className="w-4 h-4" />
                          <span className="font-arabic">{step.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start gap-3 group/item">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                            <span className="text-gray-200 font-medium font-arabic group-hover/item:text-white transition-colors duration-200">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
