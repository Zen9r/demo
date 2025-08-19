"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TechStackSection() {
  const techStack = [
    {
      name: "Next.js",
      icon: "⚡",
      description: "إطار عمل متطور لبناء مواقع سريعة ومتجاوبة",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "React",
      icon: "⚛️",
      description: "مكتبة JavaScript لبناء واجهات مستخدم تفاعلية",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "TypeScript",
      icon: "📘",
      description: "لغة برمجة آمنة ومتطورة لكتابة كود خالي من الأخطاء",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description: "إطار عمل CSS حديث لتصميم سريع ومتجاوب",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Sanity.io",
      icon: "📝",
      description: "نظام إدارة محتوى متقدم وسهل الاستخدام",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Supabase",
      icon: "🗄️",
      description: "قاعدة بيانات قوية وآمنة مع واجهة برمجة حديثة",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            التقنيات المتطورة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نستخدم أحدث التقنيات لضمان جودة عالية وأداء ممتاز
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {tech.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              لماذا هذه التقنيات؟
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              نختار بعناية كل تقنية لضمان أفضل النتائج. هذه التقنيات تتيح لنا بناء مواقع سريعة وآمنة وقابلة للتطوير، مع الحفاظ على سهولة الاستخدام والصيانة.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
