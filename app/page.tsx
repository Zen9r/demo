"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertTriangle, ChevronDown, Shield, Zap, Palette, Settings, TrendingUp, Lock, Globe, Mail, Github, Linkedin, Star, Crown, Rocket, Target, Users, Code, Database, Cloud, Smartphone, Award, Clock, CheckCircle, XCircle } from "lucide-react"
import Particles from "@/components/Particles"

// Demo data for previous clients
const previousClients = [
  { name: "جامعة الملك سعود", description: "النادي الثقافي الاجتماعي، نادي الهندسة الزراعية" },
  { name: "استديو الكابتن ماجد", description: "موقع إبداعي متطور" },
]

// Tech stack data
const techStack = [
  { name: "Next.js", logo: "⚡", description: "أداء فائق وسرعة في التحميل" },
  { name: "React", logo: "⚛️", description: "تجربة مستخدم تفاعلية وسلسة" },
  { name: "TypeScript", logo: "📘", description: "كود آمن وخالي من الأخطاء" },
  { name: "Tailwind CSS", logo: "🎨", description: "تصميم متجاوب وعصري" },
  { name: "Sanity.io", logo: "📝", description: "إدارة محتوى سهلة ومتقدمة" },
  { name: "Supabase", logo: "🗄️", description: "قاعدة بيانات قوية وآمنة" },
]

export default function BusinessArabiaPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
  })
  const [demoItems, setDemoItems] = useState([
    { id: 1, name: "مثال 1", description: "وصف تجريبي للمنتج الأول", imageUrl: "/placeholder.jpg" },
    { id: 2, name: "مثال 2", description: "وصف تجريبي للمنتج الثاني", imageUrl: "/placeholder.jpg" },
    { id: 3, name: "مثال 3", description: "وصف تجريبي للمنتج الثالث", imageUrl: "/placeholder.jpg" },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.description) {
      const newItem = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        imageUrl: formData.imageUrl || "/placeholder.jpg"
      }
      setDemoItems([newItem, ...demoItems])
      setFormData({ name: "", description: "", imageUrl: "" })
    }
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Particles Component */}
      <div className="fixed inset-0 -z-10">
        <Particles
          className="h-full w-full"
          particleCount={100}
          particleSpread={6}
          speed={0.03}
          particleColors={['#3B82F6', '#FFFFFF', '#808080']}
          moveParticlesOnHover={false}
          alphaParticles={true}
          particleBaseSize={60}
          sizeRandomness={0.6}
          cameraDistance={30}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-patrick text-primary leading-tight arabic-fade-in">
            عرض سعر مخصص
          </h1>
          <h2 className="text-3xl md:text-5xl font-arabic font-bold leading-tight arabic-fade-in" style={{animationDelay: '0.2s'}}>
            بوابة إلكترونية لشركة بزنس اريبيا
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto font-medium arabic-fade-in" style={{animationDelay: '0.4s'}}>
            اكتشف الفرق الجوهري بين الموقع المخصص والقوالب الجاهزة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 arabic-fade-in" style={{animationDelay: '0.5s'}}>
            <Button size="lg" className="text-lg px-8 py-4 button-primary font-arabic">
              <Mail className="w-5 h-5 ml-2" />
              تواصل معنا الآن
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 button-secondary font-arabic">
              <ChevronDown className="w-5 h-5 ml-2" />
              اكتشف المزيد
            </Button>
          </div>
          <div className="animate-bounce-slow mt-12 arabic-fade-in" style={{animationDelay: '0.6s'}}>
            <ChevronDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-center mb-16 arabic-fade-in">
            الفرق الجوهري: موقع مخصص أم قالب جاهز؟
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Website */}
            <Card className="card-hover border-green-500/20 bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600 font-arabic flex items-center gap-2">
                  <Check className="w-6 h-6" />
                  الموقع المخصص
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "أداء فائق",
                  "أمان عالٍ",
                  "تجربة مستخدم فريدة",
                  "مرونة مستقبلية",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-lg font-arabic">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WordPress Template */}
            <Card className="card-hover border-yellow-500/20 bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-600 font-arabic flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  قوالب WordPress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["أداء أبطأ", "عرضة للاختراق", "تصميم مقيد", "صيانة مستمرة"].map(
                  (limitation, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      <span className="text-lg font-arabic">{limitation}</span>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-center mb-16 arabic-fade-in">
            التقنيات التي تضمن الجودة
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm text-center arabic-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl mb-4">{tech.logo}</div>
                  <h3 className="text-xl font-bold font-arabic">{tech.name}</h3>
                  <p className="text-muted-foreground font-arabic">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Clients Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-center mb-16 arabic-fade-in">
            شركاء وثقوا بنا
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {previousClients.map((client, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: `${0.2 + index * 0.2}s`}}>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-bold font-arabic mb-2">{client.name}</h3>
                  <p className="text-muted-foreground font-arabic">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-center mb-16 arabic-fade-in">
            قوة المحتوى الديناميكي
          </h2>
          
          {/* Part A: The Concept */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-hover bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-xl font-arabic">الكود الثابت</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                  <Code className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-arabic">
                  يحتاج إلى مبرمج لتعديل المحتوى
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="text-xl font-arabic">المحتوى الديناميكي</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                  <Database className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-arabic">
                  تعديل سهل عبر لوحة التحكم
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Part B: The Live Demo Form */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm mb-16 arabic-fade-in" style={{animationDelay: '0.6s'}}>
            <CardHeader>
              <CardTitle className="text-2xl font-arabic text-center">جرب الآن</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="اسم المنتج"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-lg p-4 input-focus font-arabic"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="رابط الصورة (اختياري)"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      className="text-lg p-4 input-focus"
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="وصف المنتج..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    className="text-lg p-4 min-h-[120px] input-focus font-arabic"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-4 button-primary font-arabic">
                  إضافة منتج جديد
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Part C: The Result - Dynamic Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {demoItems.map((item, index) => (
              <Card key={item.id} className="card-hover bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.jpg"
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold font-arabic mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground font-arabic">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-center mb-16 arabic-fade-in">
            اختر باقة الشراكة التي تناسب طموحاتك
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1: الانطلاق */}
            <Card className="card-hover bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-arabic">الانطلاق</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">1,800 SAR</div>
                  <div className="text-sm text-muted-foreground line-through">3,000 SAR</div>
                  <div className="text-sm text-green-600 font-bold">خصم 40%</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">موقع مخصص (4 صفحات)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">تصميم متجاوب وكود مصدري خاص</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">لوحة تحكم Sanity.io</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">تواصل مباشر عبر واتساب</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">مدة الإنجاز: 4 أسابيع</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">دعم فني: 15 يوماً</span>
                  </div>
                </div>
                <Button className="w-full button-primary font-arabic">
                  اختر هذه الباقة
                </Button>
              </CardContent>
            </Card>

            {/* Package 2: النمو - HIGHLIGHTED */}
            <Card className="card-hover bg-card/50 backdrop-blur-sm border-2 border-primary relative scale-105 arabic-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold font-arabic">
                  الأفضل قيمة
                </span>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-arabic">النمو</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">3,000 SAR</div>
                  <div className="text-sm text-muted-foreground line-through">7,500 SAR</div>
                  <div className="text-sm text-green-600 font-bold">خصم 60%</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">كل ما في باقة الانطلاق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-arabic">نظام نماذج واتساب الذكي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-arabic">مرونة مستقبلية (3 أشهر)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-arabic">سيطرة أكبر على المحتوى</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">دعم فني ممتد: 3 أشهر</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-arabic">جلسة تدريبية على لوحة التحكم</span>
                  </div>
                </div>
                <Button className="w-full button-primary font-arabic">
                  اختر هذه الباقة
                </Button>
              </CardContent>
            </Card>

            {/* Package 3: الشراكة الاستراتيجية */}
            <Card className="card-hover bg-card/50 backdrop-blur-sm arabic-fade-in" style={{animationDelay: '0.6s'}}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-arabic">الشراكة الاستراتيجية</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">5,000 SAR</div>
                  <div className="text-sm text-muted-foreground line-through">10,000 SAR</div>
                  <div className="text-sm text-green-600 font-bold">خصم 50%</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">كل ما في باقة النمو</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-arabic">بوت واتساب للرد الفوري</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-arabic">ملكية واستقلالية مطلقة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-arabic">مرونة قصوى (6 أشهر)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-arabic">سيطرة تسويقية كاملة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-arabic">دعم فني VIP: 6 أشهر</span>
                  </div>
                </div>
                <Button className="w-full button-primary font-arabic">
                  اختر هذه الباقة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold font-arabic">بزنس اريبيا</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/966500000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                title="تواصل عبر واتساب"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@businessarabia.com"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                title="راسلنا عبر البريد الإلكتروني"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground font-arabic">
              © {new Date().getFullYear()} بزنس اريبيا. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
