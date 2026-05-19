"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Home, Thermometer, Sun, DollarSign, ListTodo, Utensils, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Background3D from "@/components/background-3d"

export default function HomeManagementPage() {
  const screenshots = [
    {
      src: "/images/home-dashboard-dark.png",
      alt: "Home Manager Dashboard - Dark Theme",
      caption: "Main dashboard with weather, tasks, expenses, and smart home overview",
    },
    {
      src: "/images/home-dashboard-light.png",
      alt: "Home Manager Dashboard - Light Theme",
      caption: "Light theme variant with weather integration and quick stats",
    },
    {
      src: "/images/home-calendar.png",
      alt: "Calendar View",
      caption: "Full calendar with event management and reminders",
    },
    {
      src: "/images/home-tuya.png",
      alt: "Tuya Smart Home Integration",
      caption: "Control smart home devices including lights, thermostats, and plugs",
    },
  ]

  const features = [
    {
      icon: Calendar,
      title: "Calendar & Events",
      description: "Full-featured calendar with event creation, reminders, and appointment scheduling with location support.",
    },
    {
      icon: ListTodo,
      title: "Task Management",
      description: "Organize tasks with priorities, due dates, and categories to stay on top of household responsibilities.",
    },
    {
      icon: DollarSign,
      title: "Expense Tracking",
      description: "Track monthly expenses, categorize spending, and monitor your household budget with visual reports.",
    },
    {
      icon: Sun,
      title: "Weather Integration",
      description: "Live weather data with current conditions, 5-day forecasts, and location-based weather alerts.",
    },
    {
      icon: Thermometer,
      title: "Smart Home (Tuya)",
      description: "Control Tuya-compatible smart devices including lights, thermostats, switches, and plugs from one dashboard.",
    },
    {
      icon: Utensils,
      title: "Meal Planning",
      description: "Plan weekly meals, manage recipes, and coordinate grocery shopping with inventory tracking.",
    },
  ]

  const techStack = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Tuya Cloud API",
    "Open-Meteo API",
    "React Query",
    "Zustand",
    "Prisma",
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Background3D />
      </div>

      <div className="relative z-10">
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="container flex h-16 items-center">
            <Button variant="ghost" asChild className="mr-4">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </header>

        <main className="container pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Full-Stack Application
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  Live Demo Available
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                Home Manager App
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mb-6">
                Comprehensive home management solution combining calendar, tasks, expenses, 
                weather, smart home control, and meal planning in one unified dashboard.
              </p>
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0">
                <a href="https://homehub.tapya.xyz" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </a>
              </Button>
            </div>

            {/* Main Screenshot */}
            <Card className="mb-12 bg-black/50 backdrop-blur-xl border-white/10 overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/home-dashboard-dark.png"
                  alt="Home Manager Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-cyan-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 w-fit mb-4">
                          <feature.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={screenshot.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/50 backdrop-blur-xl border-white/10 overflow-hidden group">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={screenshot.src || "/placeholder.svg"}
                          alt={screenshot.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">{screenshot.caption}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <Card className="bg-black/50 backdrop-blur-xl border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Home Manager was born from the need to consolidate multiple household management 
                    tools into a single, cohesive application. Instead of juggling between calendar apps, 
                    expense trackers, and smart home controls, everything is accessible from one dashboard.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The Tuya integration allows direct control of smart home devices, including adjusting 
                    light brightness, setting thermostat temperatures, and toggling switches - all without 
                    leaving the app. The weather integration provides real-time data using the Open-Meteo API.
                  </p>
                  <p className="text-muted-foreground">
                    Built with Next.js for optimal performance and SEO, the app supports both light and 
                    dark themes, offline functionality, and responsive design for use on any device.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
