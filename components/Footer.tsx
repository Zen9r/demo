"use client"

import { Globe, Mail, Phone, MapPin, Clock, Users, Award } from "lucide-react"

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

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">بزنس اريبيا</h3>
                  <p className="text-gray-400 text-sm">حلول تقنية متطورة</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                نقدم حلول تقنية متطورة ومخصصة لمساعدة الشركات على النمو والتطور في العصر الرقمي.
              </p>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">خبرة أكثر من 5 سنوات</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">خدماتنا</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">الشركة</h4>
              <ul className="space-y-3">
                {companyInfo.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">معلومات التواصل</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <a 
                        href={info.link} 
                        className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                © {new Date().getFullYear()} بزنس اريبيا. جميع الحقوق محفوظة.
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                سياسة الخصوصية
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                شروط الاستخدام
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
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
