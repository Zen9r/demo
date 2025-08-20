"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

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
    { name: "Next.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Sanity.io", icon: "📝" },
    { name: "Supabase", icon: "🗄️" },
    { name: "Three.js", icon: "🎭" },
    { name: "Framer Motion", icon: "✨" },
    { name: "Prisma", icon: "🔧" },
    { name: "Vercel", icon: "🚀" },
    { name: "Stripe", icon: "💳" },
    { name: "SendGrid", icon: "📧" }
  ]

  return (
    <section className="py-20 px-4 text-white">
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
                       <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)] flex items-center justify-center">
                         <div className="text-center">
                           <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                             <div className="text-2xl">✨</div>
                           </div>
                           <p className="text-gray-400 font-arabic">معاينة المشروع</p>
                         </div>
                       </div>
                     </div>
                                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                       <Button 
                         variant="outline" 
                         size="lg"
                         className="border-white/50 text-white hover:bg-white/10 hover:border-white hover:text-white"
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
                     <span className="inline-block px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full font-medium font-arabic">
                       {project.category}
                     </span>
                     <h3 className="text-3xl md:text-4xl font-bold text-white font-arabic">
                       {project.name}
                     </h3>
                   </div>
                  
                                     <p className="text-lg text-gray-300 leading-relaxed font-arabic">
                     {project.description}
                   </p>
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
                   <h3 className="text-sm font-semibold text-gray-300 font-sans">
                     {tech.name}
                   </h3>
                 </CardContent>
               </Card>
             ))}
           </div>

                     {/* Bottom CTA */}
           <div className="text-center mt-16">
             <Card className="bg-gray-900/50 border-gray-800 p-8">
               <CardContent className="space-y-4">
                 <h3 className="text-2xl font-bold text-white font-arabic">
                   جاهز لبدء مشروعك؟
                 </h3>
                 <p className="text-gray-300 font-arabic">
                   دعنا نستخدم هذه التقنيات المتطورة لبناء موقعك الإلكتروني المثالي
                 </p>
                 <Button 
                   size="lg" 
                   variant="outline"
                   className="border-white/50 text-white hover:bg-white/10 hover:border-white font-arabic"
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
