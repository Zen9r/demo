import type React from "react"
import type { Metadata } from "next"
import { Tajawal, Raleway } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
})

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "عرض سعر مخصص - بوابة إلكترونية لشركة بزنس اريبيا",
  description: "موقع مخصص مقابل قوالب جاهزة - اكتشف الفرق الجوهري",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" className={`${tajawal.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
