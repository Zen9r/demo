"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, MessageCircle, Clock, Shield, Zap } from "lucide-react"

export default function FAQSection() {
  const faqs = [
    {
      question: "كم تستغرق عملية تطوير الموقع المخصص؟",
      answer: "تستغرق عملية التطوير عادة من 3-6 أسابيع حسب تعقيد المشروع. نبدأ بجلسة استماع لفهم احتياجاتك، ثم ننتقل إلى التصميم والتطوير، وأخيراً الاختبار والإطلاق. نضمن لك جدول زمني واضح ومتابعة مستمرة خلال كل مرحلة.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      question: "هل يمكنني تحديث محتوى الموقع بنفسي؟",
      answer: "نعم! نقدم لك نظام إدارة محتوى متقدم وسهل الاستخدام يتيح لك تحديث النصوص والصور وإضافة صفحات جديدة بسهولة. سنقوم بتدريبك على استخدام النظام مجاناً، ويمكنك الوصول إلى دعم فني متواصل عند الحاجة.",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      question: "ما الفرق بين الموقع المخصص وقوالب WordPress؟",
      answer: "المواقع المخصصة مصممة خصيصاً لاحتياجات عملك، مما يضمن أداءً أفضل وأماناً أعلى وتصميماً فريداً. أما قوالب WordPress فهي عامة وقد تستخدمها آلاف المواقع الأخرى، مما يقلل من تميز علامتك التجارية ويجعلها عرضة للمخاطر الأمنية.",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      question: "هل الموقع سيعمل على الهواتف والأجهزة اللوحية؟",
      answer: "بالتأكيد! جميع المواقع التي نطورها مصممة لتكون متجاوبة بالكامل مع جميع الأجهزة والشاشات. نختبر المواقع على مختلف الأجهزة لضمان تجربة مستخدم مثالية سواء كنت تستخدم الهاتف أو الكمبيوتر أو الجهاز اللوحي.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "ما نوع الدعم الفني الذي تقدمونه بعد الإطلاق؟",
      answer: "نقدم دعم فني شامل لمدة شهر مجاناً بعد الإطلاق، يتضمن إصلاح أي مشاكل فنية وتحديثات الأمان والتدريب على استخدام النظام. بعد ذلك، نقدم باقات دعم فني مرنة تشمل الصيانة الدورية والتحديثات والنسخ الاحتياطية.",
      icon: <Shield className="w-5 h-5" />
    }
  ]

  return (
    <section className="py-20 px-4 bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
            إجابات على أكثر الأسئلة شيوعاً حول تطوير المواقع المخصصة
          </p>
        </div>

        <Card className="bg-gray-900/50 border-gray-800 luxury-hover">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-white font-arabic">
              كل ما تحتاج معرفته
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-right hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                        {faq.icon}
                      </div>
                      <span className="text-lg font-semibold text-white font-arabic text-right">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-right">
                    <div className="pt-4 pb-2">
                      <p className="text-gray-300 leading-relaxed font-arabic text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 cursor-pointer luxury-hover">
            <MessageCircle className="w-6 h-6" />
            <span className="font-arabic">هل لديك سؤال آخر؟ تواصل معنا الآن</span>
          </div>
        </div>
      </div>
    </section>
  )
}
