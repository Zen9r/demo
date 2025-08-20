"use client"

import { Globe, Mail, Phone, MapPin, Clock, Users, Award, Linkedin, Twitter, Instagram, Youtube, Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./ThemeToggle"

export default function Footer() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "الهاتف",
      value: "+966 50 000 0000",
      link: "tel:+966500000000"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "البريد الإلكتروني",
      value: "info@businessarabia.com",
      link: "mailto:info@businessarabia.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "العنوان",
      value: "الرياض، المملكة العربية السعودية",
      link: "#"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "ساعات العمل",
      value: "الأحد - الخميس: 9:00 ص - 6:00 م",
      link: "#"
    }
  ]

  const services = [
    "تصميم مواقع إلكترونية",
    "تطوير تطبيقات الويب",
    "نظام إدارة المحتوى",
    "تصميم متجاوب",
    "SEO وتحسين محركات البحث",
    "صيانة ودعم فني"
  ]

  const companyInfo = [
    "من نحن",
    "فريق العمل",
    "مشاريعنا",
    "آراء العملاء",
    "الشركاء",
    "وظائف شاغرة"
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "#",
      color: "hover:text-white"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      link: "#",
      color: "hover:text-white"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      link: "#",
      color: "hover:text-white"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      link: "#",
      color: "hover:text-white"
    }
  ]

  return (
    <footer className="bg-[#050505] text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-arabic">بزنس اريبيا</h3>
                  <p className="text-gray-400 text-sm font-arabic">حلول تقنية متطورة</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-arabic">
                نقدم حلول تقنية متطورة ومخصصة لمساعدة الشركات على النمو والتطور في العصر الرقمي.
              </p>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm text-gray-300 font-arabic">خبرة أكثر من 5 سنوات</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white font-arabic">خدماتنا</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-arabic">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white font-arabic">الشركة</h4>
              <ul className="space-y-3">
                {companyInfo.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-arabic">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white font-arabic">معلومات التواصل</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-arabic">{info.label}</p>
                      <a 
                        href={info.link} 
                        className="text-white hover:text-gray-300 transition-colors duration-200 font-medium font-arabic"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold text-white mb-3 font-arabic">تابعنا على</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} hover:bg-white/20`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-white" />
              <span className="text-gray-300 font-arabic">
                © {new Date().getFullYear()} بزنس اريبيا. جميع الحقوق محفوظة.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200 font-arabic"
              >
                سياسة الخصوصية
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200 font-arabic"
              >
                شروط الاستخدام
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200 font-arabic"
              >
                خريطة الموقع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
