"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowLeft } from "lucide-react"

export default function ShowcaseSection() {
  // Client projects data
  const clientProjects = [
    {
      name: "جامعة الملك سعود",
      description: "تطوير مواقع إلكترونية متقدمة لأندية الهندسة الثقافية والزراعية، مع واجهات تفاعلية وإدارة محتوى متطورة.",
      image: "/placeholder-project-1.jpg",
      link: "#",
      category: "تعليمي"
    },
    {
      name: "استوديو الكابتن ماجد",
      description: "تصميم وتطوير موقع إبداعي لاستوديو التصوير، مع معرض صور تفاعلي ونظام حجز متقدم.",
      image: "/placeholder-project-2.jpg",
      link: "#",
      category: "إبداعي"
    },
    {
      name: "شركة تقنية ناشئة",
      description: "بناء منصة SaaS متكاملة مع نظام إدارة المستخدمين والمدفوعات، مع واجهة إدارية متطورة.",
      image: "/placeholder-project-3.jpg",
      link: "#",
      category: "تقني"
    }
  ]

  // Technology stack data
  const technologies = [
    { name: "Next.js", icon: "⚡", color: "text-blue-400" },
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "TypeScript", icon: "📘", color: "text-indigo-400" },
    { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400" },
    { name: "Sanity.io", icon: "📝", color: "text-orange-400" },
    { name: "Supabase", icon: "🗄️", color: "text-green-400" },
    { name: "Three.js", icon: "🎭", color: "text-purple-400" },
    { name: "Framer Motion", icon: "✨", color: "text-pink-400" },
    { name: "Prisma", icon: "🔧", color: "text-gray-400" },
    { name: "Vercel", icon: "🚀", color: "text-blue-300" },
    { name: "Stripe", icon: "💳", color: "text-purple-300" },
    { name: "SendGrid", icon: "📧", color: "text-green-300" }
  ]

  return (
    <section className="py-20 px-4 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Client Showcase Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
              أعمال نفخر بها
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
              مشاريع متنوعة تظهر قدراتنا في تطوير حلول تقنية متقدمة
            </p>
          </div>

          <div className="space-y-20">
            {clientProjects.map((project, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🏗️</div>
                          <p className="text-gray-400 font-arabic">معاينة المشروع</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        <ExternalLink className="w-4 h-4 ml-2" />
                        شاهد المشروع
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-arabic">
                      {project.name}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed font-arabic">
                    {project.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-arabic"
                  >
                    <span>شاهد المشروع</span>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">
              التقنيات التي نثق بها
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic">
              نستخدم أحدث التقنيات لضمان جودة عالية وأداء ممتاز
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className={`text-sm font-semibold ${tech.color} font-arabic`}>
                    {tech.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20 p-8">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-arabic">
                  جاهز لبدء مشروعك؟
                </h3>
                <p className="text-gray-300 font-arabic">
                  دعنا نستخدم هذه التقنيات المتطورة لبناء موقعك الإلكتروني المثالي
                </p>
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-arabic"
                >
                  ابدأ مشروعك الآن
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
