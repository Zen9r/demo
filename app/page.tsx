"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertTriangle, ChevronDown, Shield, Zap, Palette, Settings, TrendingUp, Lock, Globe, Mail, Github, Linkedin } from "lucide-react"
import Particles from "@/components/Particles"

export default function ClientDemoPage() {
  const [message, setMessage] = useState("")
  const [displayedMessage, setDisplayedMessage] = useState("Your message will appear here...")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleDisplayMessage = () => {
    if (message.trim()) {
      setDisplayedMessage(message)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo form submission
    alert("Thank you for your interest! We'll be in touch soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Particles Component */}
      <div className="fixed inset-0 -z-10">
        <Particles
          className="h-full w-full"
          particleCount={150}
          particleSpread={8}
          speed={0.05}
          particleColors={['#A78BFA', '#FFFFFF', '#808080']}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={25}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            This is Not Just a Website, <span className="text-primary">It's a Guided Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto font-medium">
            Discover the real value of a custom-built web solution. Scroll down to begin the journey.
          </p>
          <div className="animate-bounce mt-12">
            <ChevronDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            The Two Paths: <span className="text-primary">Custom vs. Template</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Website */}
            <Card className="card-hover border-green-500/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                  <Check className="w-6 h-6" />
                  Bespoke & Optimized
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Blazing Fast Performance",
                  "High-End Security",
                  "Unique Design",
                  "Effortless Content Management",
                  "Scalable for the Future",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WordPress Template */}
            <Card className="card-hover border-yellow-500/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Standard & Ready-made
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Slower Performance", "Requires Constant Updates", "Generic Design", "Complex for Beginners"].map(
                  (limitation, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-lg">{limitation}</span>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Static vs. Dynamic: <span className="text-primary">See the Difference</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <Input
                placeholder="Write a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-lg p-4 input-focus"
              />
              <Button onClick={handleDisplayMessage} className="w-full text-lg py-3 button-primary" size="lg">
                Display Message
              </Button>
            </div>

            {/* Display Side */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 font-mono card-hover">
              <div className="text-primary mb-2">$ output:</div>
              <div className="text-green-400 min-h-[60px] flex items-center">{displayedMessage}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Backend & Security Showcase */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Your Content, <span className="text-primary">Your Control.</span> Securely.
              </h2>
              <p className="text-xl text-muted-foreground">
                Your website will come with a secure and user-friendly control panel (CMS) where you can update content
                easily. It's protected and private.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 button-primary">
                <Shield className="w-5 h-5 mr-2" />
                Access the Secure Studio (Demo)
              </Button>
            </div>
            
            {/* Right Column - Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                    <Lock className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            A Solution for <span className="text-primary">Every Need</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Solution */}
            <Card className="card-hover border-primary/20 bg-card/50 backdrop-blur-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </span>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">The Custom Solution</CardTitle>
                <CardDescription className="text-lg">Built specifically for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Lightning-fast performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-primary" />
                  <span>Unique, branded design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-primary" />
                  <span>Easy content management</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Scalable architecture</span>
                </div>
              </CardContent>
            </Card>

            {/* WordPress Solution */}
            <Card className="card-hover bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">The WordPress Solution</CardTitle>
                <CardDescription className="text-lg">Template-based approach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span>Standard performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span>Template-based design</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span>Regular maintenance needed</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span>Plugin dependencies</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span>Limited customization</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-primary">Development Journey</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery & Planning", description: "Understanding your needs and goals", icon: Globe },
              { step: "2", title: "Design & Prototyping", description: "Creating visual concepts and wireframes", icon: Palette },
              { step: "3", title: "Development & Testing", description: "Building and refining your solution", icon: Settings },
              { step: "4", title: "Launch & Support", description: "Going live with ongoing maintenance", icon: Zap },
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <phase.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Ready to Build <span className="text-primary">Something Amazing?</span>
          </h2>
          <Card className="card-hover bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-lg p-4 input-focus"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="text-lg p-4 input-focus"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="text-lg p-4 min-h-[120px] input-focus"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-4 button-primary">
                  Start Your Custom Journey
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">Custom Web Solutions</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Custom Web Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
