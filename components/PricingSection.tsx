"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Clock, Users, Shield, Zap, Palette, Globe, Award, AlertCircle, ArrowRight, Sparkles, Bot, Key, GraduationCap } from "lucide-react"

export default function PricingSection() {
  const essentialPackage = {
    name: "باقة الانطلاق",
    tagline: "نقطة بداية احترافية وكاملة، لكنها محدودة المرونة المستقبلية.",
    price: "1,800",
    originalPrice: "3,000",
    discount: "عرض تأسيسي بخصم 40%",
    features: [
      "تطوير موقع مخصص (4 صفحات)",
      "أساس تقني آمن (Private Git Repo)",
      "لوحة تحكم Sanity.io لإدارة المحتوى الديناميكي",
      "تواصل مباشر عبر واتساب",
      "مدة الإنجاز: 4 أسابيع (تحديث أسبوعي)",
      "دعم فني: 15 يوماً بعد الإطلاق",
      "لا تشمل: تعديلات أو إضافات مستقبلية"
    ],
    color: "from-gray-500 to-gray-600"
  }

  const growthPackage = {
    name: "باقة النمو",
    tagline: "الصفقة الرابحة التي لا تقاوم، تقدم أعلى قيمة مقابل السعر.",
    price: "3,000",
    originalPrice: "7,500",
    discount: "عرض القيمة الأفضل بخصم 60%",
    features: [
      "كل ما في باقة الانطلاق",
      "✨ أتمتة التواصل: نماذج ذكية تحول استفسارات العملاء إلى رسائل واتساب جاهزة.",
      "✨ مرونة مستقبلية: إمكانية إضافة ميزة أو صفحة جديدة خلال أول 3 أشهر.",
      "✨ سيطرة أكبر على المحتوى: تعديل نصوص الصفحات الرئيسية عبر لوحة التحكم.",
      "🚀 راحة بال ممتدة: دعم فني لمدة 3 أشهر كاملة.",
      "🎓 جلسة تدريبية (45 دقيقة): لشرح كيفية استخدام لوحة التحكم.",
      "📈 متابعة أسرع: تحديثان أسبوعياً خلال التطوير."
    ],
    color: "from-gray-600 to-gray-700",
    popular: true
  }

  const strategicPackage = {
      name: "باقة الشراكة الاستراتيجية",
      tagline: "الحل المتكامل للعميل الطموح الذي يريد السيطرة والأتمتة الكاملة.",
      price: "5,000",
      originalPrice: "10,000",
      discount: "عرض الحل المتكامل بخصم 50%",
      features: [
          "كل ما في باقة النمو",
          "🤖 بوت واتساب للرد الفوري: أتمتة كاملة للرد الأولي على العملاء.",
          "🔑 ملكية واستقلالية مطلقة: تسليم كامل للكود المصدري على حسابات العميل الخاصة.",
          "✨ مرونة قصوى: إمكانية إضافة 3 ميزات جديدة خلال أول 6 أشهر.",
          "👑 سيطرة تسويقية كاملة: القدرة على تعديل كل نصوص الموقع.",
          "🚀 دعم فني VIP: لمدة 6 أشهر كاملة."
      ],
      color: "from-gray-700 to-gray-800"
  }


  return (
    <section className="py-20 px-4 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 border border-gray-600/50 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <AlertCircle className="w-6 h-6 text-white" />
            <h3 className="text-xl font-bold text-white font-arabic">
              عرض محدود!
            </h3>
          </div>
          <p className="text-gray-300 font-arabic">
            هذا العرض المخصص صالح لمدة 14 يوم فقط. احجز مكانك الآن قبل انتهاء الصلاحية!
          </p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
            اختر الباقة التي تناسبك
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
            كل باقة مصممة خصيصاً لتحقيق أهدافك التجارية ودفع عملك للنمو.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Essential Package */}
          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 luxury-hover flex flex-col">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                <Star className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-arabic">
                {essentialPackage.name}
              </CardTitle>
              <p className="text-gray-400 font-arabic text-sm mt-2 h-12">
                {essentialPackage.tagline}
              </p>
              <div className="space-y-2 mt-4">
                <div className="text-4xl font-bold text-gray-300">{essentialPackage.price} SAR</div>
                <div className="text-lg text-gray-500 line-through">{essentialPackage.originalPrice} SAR</div>
                <div className="text-lg text-gray-400 font-bold">{essentialPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="space-y-3 flex-grow">
                {essentialPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium font-arabic">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 text-lg mt-6 font-arabic group transition-all duration-300 luxury-hover">
                <span>ابدأ بباقة الانطلاق</span>
                <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          {/* Growth Package */}
          <Card className="bg-gray-900/50 border-2 border-white hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 relative luxury-hover flex flex-col">
            {growthPackage.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm font-arabic flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  الخيار الأفضل
                </div>
              </div>
            )}
            <CardHeader className="text-center pb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${growthPackage.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                <Crown className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-arabic">
                {growthPackage.name}
              </CardTitle>
              <p className="text-gray-400 font-arabic text-sm mt-2 h-12">
                {growthPackage.tagline}
              </p>
              <div className="space-y-2 mt-4">
                <div className="text-4xl font-bold text-gray-300">{growthPackage.price} SAR</div>
                <div className="text-lg text-gray-500 line-through">{growthPackage.originalPrice} SAR</div>
                <div className="text-lg text-gray-400 font-bold">{growthPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="space-y-3 flex-grow">
                {growthPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium font-arabic">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-black font-semibold py-3 text-lg mt-6 font-arabic group transition-all duration-300 luxury-hover">
                <span>اختر باقة النمو</span>
                <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Strategic Partner Package */}
          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 luxury-hover flex flex-col">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                <Award className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-arabic">
                {strategicPackage.name}
              </CardTitle>
              <p className="text-gray-400 font-arabic text-sm mt-2 h-12">
                {strategicPackage.tagline}
              </p>
              <div className="space-y-2 mt-4">
                <div className="text-4xl font-bold text-gray-300">{strategicPackage.price} SAR</div>
                <div className="text-lg text-gray-500 line-through">{strategicPackage.originalPrice} SAR</div>
                <div className="text-lg text-gray-400 font-bold">{strategicPackage.discount}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="space-y-3 flex-grow">
                {strategicPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium font-arabic">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 text-lg mt-6 font-arabic group transition-all duration-300 luxury-hover">
                <span>كن شريكًا استراتيجيًا</span>
                <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}