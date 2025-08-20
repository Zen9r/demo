"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Palette, Code, Rocket, Award } from "lucide-react"

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
      ]
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
      ]
    },
    {
      step: 3,
      title: "المرحلة الثالثة: الاختبار والتحسين",
      description: "اختبار شامل للموقع وإجراء التحسينات اللازمة",
      duration: "أسبوع واحد",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-gray-400 to-gray-500",
      activities: [
        "اختبار الوظائف والتفاعلات",
        "اختبار التوافق مع المتصفحات",
        "اختبار الأداء والسرعة",
        "إجراء التحسينات المطلوبة",
        "اختبار الأمان والحماية"
      ]
    },
    {
      step: 4,
      title: "المرحلة الرابعة: الإطلاق والدعم",
      description: "إطلاق الموقع وتقديم الدعم الفني والتدريب",
      duration: "أسبوع واحد",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-gray-500 to-gray-600",
      activities: [
        "رفع الموقع على الخادم",
        "إعداد النطاق والاستضافة",
        "تدريب العميل على النظام",
        "تقديم الدعم الفني",
        "متابعة الأداء والاستقرار"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
            خطة العمل
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
            نتبع منهجية منظمة ومثبتة لضمان نجاح مشروعك
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-600 transform -translate-x-1/2"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Step Number and Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-300 font-bold text-sm">{step.step}</span>
                  </div>
                </div>

                {/* Step Content */}
                <Card className="flex-1 bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-bold text-white mb-2 font-arabic">
                          {step.title}
                        </CardTitle>
                        <p className="text-gray-300 text-lg leading-relaxed font-arabic">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full font-semibold border border-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="font-arabic">{step.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200 font-medium font-arabic">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-arabic">
              لماذا نتبع هذه الخطة؟
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <Users className="w-8 h-8 text-gray-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-arabic">تعاون مستمر</h4>
                <p className="text-gray-300 font-arabic">نعمل معك في كل مرحلة لضمان تحقيق رؤيتك</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <Award className="w-8 h-8 text-gray-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-arabic">جودة عالية</h4>
                <p className="text-gray-300 font-arabic">نلتزم بأعلى معايير الجودة في كل خطوة</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <Clock className="w-8 h-8 text-gray-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-arabic">التزام بالمواعيد</h4>
                <p className="text-gray-300 font-arabic">نحترم المواعيد المتفق عليها وننجز المشروع في الوقت المحدد</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
