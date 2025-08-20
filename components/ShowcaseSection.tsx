"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ExternalLink, ArrowLeft, Play, Eye } from "lucide-react"

export default function ShowcaseSection() {
  // Client projects data with high-quality images
  const clientProjects = [
    {
      name: "جامعة الملك سعود",
      description: "تطوير مواقع إلكترونية متقدمة لأندية الهندسة الثقافية والزراعية، مع واجهات تفاعلية وإدارة محتوى متطورة.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=800&h=600&fit=crop&crop=center",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop&crop=center",
      link: "#",
      category: "تعليمي",
      hasVideo: true
    },
    {
      name: "استوديو الكابتن ماجد",
      description: "تصميم وتطوير موقع إبداعي لاستوديو التصوير، مع معرض صور تفاعلي ونظام حجز متقدم.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&crop=center",
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&crop=center",
      link: "#",
      category: "إبداعي",
      hasVideo: false
    },
    {
      name: "شركة تقنية ناشئة",
      description: "بناء منصة SaaS متكاملة مع نظام إدارة المستخدمين والمدفوعات، مع واجهة إدارية متطورة.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      link: "#",
      category: "تقني",
      hasVideo: true
    }
  ]

  // Technology stack data with tooltips
  const technologies = [
    { 
      name: "Next.js", 
      icon: "⚡", 
      color: "text-gray-300",
      tooltip: "موقع سريع يحبه جوجل ويحقق أعلى معدلات الأداء"
    },
    { 
      name: "React", 
      icon: "⚛️", 
      color: "text-gray-300",
      tooltip: "واجهة تفاعلية سلسة تجعل تجربة المستخدم مميزة"
    },
    { 
      name: "TypeScript", 
      icon: "📘", 
      color: "text-gray-300",
      tooltip: "كود آمن وخالي من الأخطاء لموقع مستقر وموثوق"
    },
    { 
      name: "Tailwind CSS", 
      icon: "🎨", 
      color: "text-gray-300",
      tooltip: "تصميم جميل ومتجاوب يعمل على جميع الأجهزة"
    },
    { 
      name: "Sanity.io", 
      icon: "📝", 
      color: "text-gray-300",
      tooltip: "نظام إدارة محتوى متقدم لتحديث الموقع بسهولة"
    },
    { 
      name: "Supabase", 
      icon: "🗄️", 
      color: "text-gray-300",
      tooltip: "قاعدة بيانات آمنة وسريعة لحفظ بيانات موقعك"
    },
    { 
      name: "Three.js", 
      icon: "🎭", 
      color: "text-gray-300",
      tooltip: "رسومات ثلاثية الأبعاد تفاعلية تجذب الزوار"
    },
    { 
      name: "Framer Motion", 
      icon: "✨", 
      color: "text-gray-300",
      tooltip: "حركات سلسة وجميلة تجعل الموقع حيوي ومتطور"
    },
    { 
      name: "Prisma", 
      icon: "🔧", 
      color: "text-gray-300",
      tooltip: "أدوات تطوير متقدمة لبناء موقع قوي ومتطور"
    },
    { 
      name: "Vercel", 
      icon: "🚀", 
      color: "text-gray-300",
      tooltip: "استضافة سريعة وآمنة لموقعك مع دعم فني متواصل"
    }
  ]

  return (
    <section className="py-20 px-4 seamless-dark-bg text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Client Showcase Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic animate-fade-in">
              أعمال نفخر بها
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic animate-fade-in" style={{ animationDelay: '0.2s' }}>
              مشاريع متنوعة تظهر قدراتنا في تطوير حلول تقنية متقدمة
            </p>
          </div>

          <div className="space-y-20">
            {clientProjects.map((project, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-beams-hover transition-all duration-500">
                      <img 
                        src={project.thumbnail} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Video Play Button */}
                      {project.hasVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="border-white text-white hover:bg-white hover:text-black"
                        >
                          <Eye className="w-4 h-4 ml-2" />
                          <span className="font-arabic">معاينة</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="border-white text-white hover:bg-white hover:text-black"
                        >
                          <ExternalLink className="w-4 h-4 ml-2" />
                          <span className="font-arabic">زيارة الموقع</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium border border-white/30">
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
                    className="border-white text-white hover:bg-white hover:text-black font-arabic shadow-beams hover:shadow-beams-hover transition-all duration-300"
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic animate-fade-in">
              التقنيات التي نثق بها
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-arabic animate-fade-in" style={{ animationDelay: '0.2s' }}>
              نستخدم أحدث التقنيات لضمان جودة عالية وأداء ممتاز
            </p>
          </div>

          <TooltipProvider>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {technologies.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 group hover:shadow-beams-hover animate-scale-in cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h3 className={`text-sm font-semibold ${tech.color} font-arabic`}>
                          {tech.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-gray-800 text-white border-gray-700 font-arabic text-sm">
                    {tech.tooltip}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>

 
      </div>
    </section>
  )
}
