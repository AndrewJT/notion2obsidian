"use client"

import Link from "next/link"
import { useState } from "react"
import { Github, Linkedin, Mail, ChevronDown, Menu, X, Download, Award, BookOpen, MapPin, Phone, Terminal, Cloud, Database, Server, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Background3D from "@/components/background-3d"
import { ContactForm } from "@/components/contact-form"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const handleScroll = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const experiences = [
    {
      role: "Systems & DevOps Engineer",
      company: "Digitronica.it",
      location: "Verona, Italy",
      period: "2024 – Present",
      responsibilities: [
        "Architected multi-account AWS environments using AWS Organizations and IAM Identity Center, sustaining 99.9% availability for critical production workloads of Tier-1 clients including Ferrari, BNL Group, and Verona Airport.",
        "Engineered scalable, reusable Infrastructure as Code (IaC) modules using Terraform to standardize and accelerate environment provisioning across multiple client projects.",
        "Eliminated 40% of manual operational overhead by deploying custom Python and Bash self-healing automation frameworks for continuous monitoring, backup validation, and infrastructure tasks.",
        "Designed secure hybrid-cloud networking architectures configuring resilient Site-to-Site IPsec VPNs and SSL VPNs connecting on-premise enterprise systems to AWS.",
        "Led technical documentation and disaster recovery mapping, drastically reducing Mean Time to Resolution (MTTR) during incident responses.",
      ],
    },
    {
      role: "DevOps & QA Automation Engineer",
      company: "Samsung Electronics (Akodis)",
      location: "Verona/Milan, Italy",
      period: "2023 – 2024",
      responsibilities: [
        "Bridged Development and Operations by integrating automated regression and data-validation suites directly into Jenkins and GitHub Actions CI/CD pipelines, accelerating release velocity.",
        "Designed complex backend validation scripts utilizing advanced SQL to audit data integrity, proactively identifying performance bottlenecks and architectural defects before production deployment.",
        "Containerized testing dependencies with Docker, ensuring environment parity between development, staging, and production environments.",
        "Collaborated on release readiness frameworks, providing actionable engineering insights that improved overall deployment stability and system reliability.",
      ],
    },
    {
      role: "Functional Analyst & Deployment Specialist",
      company: "Intesa Sanpaolo (Akodis)",
      location: "Verona Area, Italy",
      period: "2019 – 2023",
      responsibilities: [
        "Orchestrated end-to-end deployment workflows for core banking applications using Jenkins CI/CD pipelines, ensuring strict adherence to banking compliance and zero-downtime release strategies.",
        "Managed high-availability production database operations (Oracle/SQL), leading critical migrations, data schema updates, and performance tuning for high-transaction banking systems.",
        "Automated environment provisioning and pre-deployment configuration checks, drastically reducing delivery friction and cutting feature time-to-market.",
        "Served as technical liaison coordinating between Dev, Operations, and Business stakeholders to manage controlled financial software rollouts and maintain service continuity.",
      ],
    },
  ]

  const projects = [
    {
      title: "AWS Infrastructure Lab",
      description: "Modular Terraform architecture for a highly available web application on AWS — VPC networking, EC2 provisioning with auto-scaling, RDS Multi-AZ, S3 lifecycle policies, and least-privilege IAM role management.",
      images: [],
      tags: ["AWS", "Terraform", "VPC", "EC2", "RDS", "IAM", "S3"],
      link: "/projects/aws-lab",
      liveUrl: null,
      isLocalApp: false,
      featured: true,
    },
    {
      title: "CI/CD Pipeline Sandbox",
      description: "End-to-end CI/CD pipeline built with GitHub Actions that automates testing, builds and pushes container images, and deploys to a local Kubernetes cluster (K3s) with automated security scanning and health checks.",
      images: [],
      tags: ["Docker", "GitHub Actions", "Kubernetes", "K3s", "CI/CD", "Bash", "Trivy"],
      link: "/projects/cicd-sandbox",
      liveUrl: null,
      isLocalApp: false,
      featured: true,
    },
    {
      title: "NetConnect Pro Console",
      description: "IT management desktop app for RDP connections, VPN client management, Identity Vault for credential storage, and system health monitoring dashboard.",
      images: [
        "/images/netconnect-dashboard.png",
        "/images/netconnect-rdp.png",
        "/images/netconnect-vault.png",
      ],
      tags: ["Electron", "TypeScript", "Node.js", "Security", "RDP", "VPN"],
      link: "/projects/netconnect-pro",
      liveUrl: null,
      isLocalApp: true,
      featured: false,
    },
    {
      title: "Home Manager App",
      description: "Comprehensive home management solution with calendar, task management, expense tracking, weather integration, smart home control (Tuya devices), inventory management, and meal planning.",
      images: [
        "/images/home-dashboard-dark.png",
        "/images/home-calendar.png",
        "/images/home-tuya.png",
        "/images/home-dashboard-light.png",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Tuya API", "Weather API"],
      link: "/projects/home-management-app",
      liveUrl: "https://homehub.tapya.xyz",
      isLocalApp: false,
      featured: false,
    },
  ]

  const achievements = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2026",
      description: "Professional certification validating expertise in designing distributed systems on AWS.",
      type: "certification",
    },
    {
      title: "Fundamentals of Database Engineering",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering database internals, ACID, indexing, partitioning, and replication.",
      type: "course",
    },
    {
      title: "Java Microservices & Spring Boot, Spring Cloud & AWS",
      issuer: "Udemy",
      date: "2022",
      description: "Advanced microservices architecture with Spring ecosystem and AWS deployment.",
      type: "course",
    },
    {
      title: "Kubernetes Fundamentals",
      issuer: "Self-Learning",
      date: "2024",
      description: "Container orchestration, deployments, services, and cluster management.",
      type: "learning",
    },
    {
      title: "Terraform — Infrastructure as Code",
      issuer: "Self-Learning",
      date: "2024",
      description: "Infrastructure as Code fundamentals, AWS provider, reusable modules, and state management.",
      type: "learning",
    },
  ]

  const languages = [
    { name: "Romanian", level: "Native", proficiency: 100 },
    { name: "Russian", level: "C2", proficiency: 100 },
    { name: "English", level: "C1", proficiency: 90 },
    { name: "Italian", level: "C1", proficiency: 90 },
    { name: "French", level: "B1", proficiency: 55 },
  ]

  const skillCategories = [
    {
      title: "DevOps & CI/CD",
      icon: Terminal,
      skills: ["Jenkins", "Git", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Amazon EKS", "Bash", "Python", "PowerShell"],
    },
    {
      title: "Cloud & IaC",
      icon: Cloud,
      skills: ["AWS VPC", "AWS EC2", "AWS S3", "AWS RDS", "AWS IAM Hardening", "AWS Organizations", "IAM Identity Center", "CloudWatch", "Lambda", "Terraform", "Ansible", "CloudFormation"],
    },
    {
      title: "Systems & Networking",
      icon: Server,
      skills: ["Linux (RHEL/Ubuntu)", "Windows Server", "Site-to-Site IPsec VPNs", "SSL VPNs", "Cloud Routing", "Firewalls", "DNS"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["Oracle", "MySQL", "PostgreSQL", "SQL Performance Tuning", "High Availability (HA) Failover", "Backup & Recovery"],
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Background3D />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AG.
            </Link>

            {/* Mobile menu button */}
            <button className="block md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {["hero", "about", "experience", "skills", "achievements", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleScroll(section)}
                  className={`text-sm font-medium transition-all hover:text-cyan-400 ${activeSection === section ? "text-cyan-400" : "text-muted-foreground"
                    }`}
                >
                  {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>

            <Button size="sm" className="hidden md:flex bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0" asChild>
              <a href="/ANDREI_GHENEA.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
            >
              <div className="container py-4">
                <nav className="flex flex-col gap-4">
                  {["hero", "about", "experience", "skills", "achievements", "projects", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => handleScroll(section)}
                      className={`text-sm font-medium transition-colors hover:text-cyan-400 text-left ${activeSection === section ? "text-cyan-400" : "text-muted-foreground"
                        }`}
                    >
                      {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                  <Button size="sm" className="mt-2 bg-gradient-to-r from-cyan-500 to-purple-600" asChild>
                    <a href="/ANDREI_GHENEA.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </header>

        {/* Main content */}
        <main>
          {/* Hero Section */}
          <section id="hero" className="flex min-h-screen items-center pt-16">
            <div className="container">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Available for Opportunities</Badge>
                  <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                    <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                      Andrei Ghenea
                    </span>
                  </h1>
                  <p className="mb-6 text-xl md:text-2xl font-medium bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    DevOps &amp; Cloud Infrastructure Engineer
                  </p>
                  <p className="mb-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                    Enterprise Infrastructure Automation Engineer with 6+ years of experience specializing in high-availability AWS deployments, modular Infrastructure as Code (Terraform), and robust CI/CD frameworks for Tier-1 enterprises.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button onClick={() => handleScroll("contact")} className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </Button>
                    <Button variant="outline" onClick={() => handleScroll("projects")} className="border-cyan-500/50 hover:bg-cyan-500/10">
                      View Projects
                    </Button>
                    <Button variant="outline" asChild className="border-purple-500/50 hover:bg-purple-500/10 bg-transparent">
                      <a href="https://github.com/AndrewJT" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-16 animate-bounce"
                >
                  <button onClick={() => handleScroll("about")} aria-label="Scroll down" className="rounded-full p-2 text-cyan-400">
                    <ChevronDown className="h-6 w-6" />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-4xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-center">About Me</h2>
                <div className="mb-12 h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>

                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-cyan-400">Professional Summary</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Cloud &amp; DevOps Engineer focused on building scalable, secure, and automated infrastructure for enterprise environments. Hands-on with AWS, Linux administration, scripting (Bash/Python), CI/CD pipelines, and database management.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-purple-500/30 transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Info</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-cyan-400" />
                          <span>Verona, Italy</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4 text-cyan-400" />
                          <span>Telegram @AndreiJT</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4 text-cyan-400" />
                          <span>ghenea.andrew@gmail.com</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 bg-black/50 backdrop-blur-xl border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Education</h3>
                    <div className="flex flex-col gap-3">
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="font-medium">B.Sc. in Computer Science</p>
                        <p className="text-sm text-muted-foreground">Università degli Studi di Verona</p>
                        <p className="text-xs text-cyan-400 mt-1">2018 – 2022</p>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="font-medium">Informatics Diploma</p>
                        <p className="text-sm text-muted-foreground">Finance and Banking College of Chisinau</p>
                        <p className="text-xs text-cyan-400 mt-1">2014 – 2018</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Languages */}
                <Card className="mt-8 bg-black/50 backdrop-blur-xl border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Languages</h3>
                    <div className="grid gap-3">
                      {languages.map((lang) => (
                        <div key={lang.name} className="flex items-center gap-4">
                          <span className="w-24 text-sm font-medium">{lang.name}</span>
                          <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${lang.proficiency}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
                            />
                          </div>
                          <span className="w-12 text-xs text-muted-foreground">{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-5xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-center">Experience</h2>
                <div className="mb-12 h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>

                {/* Mobile timeline (zigzag alternating left/right) */}
                <div className="md:hidden relative">
                  {/* SVG zigzag line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="zigzagGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(6,182,212)" />
                        <stop offset="50%" stopColor="rgb(168,85,247)" />
                        <stop offset="100%" stopColor="rgb(6,182,212)" />
                      </linearGradient>
                    </defs>
                    {experiences.map((_, index) => {
                      const isLeft = index % 2 === 0
                      const nextIsLeft = (index + 1) % 2 === 0
                      const segmentHeight = 100 / experiences.length
                      const yStart = segmentHeight * index + segmentHeight * 0.08
                      const yEnd = segmentHeight * (index + 1) + segmentHeight * 0.08
                      const xStart = isLeft ? "15%" : "85%"
                      const xEnd = index < experiences.length - 1 ? (nextIsLeft ? "15%" : "85%") : (isLeft ? "15%" : "85%")

                      return (
                        <line
                          key={index}
                          x1={xStart}
                          y1={`${yStart}%`}
                          x2={xEnd}
                          y2={`${yEnd}%`}
                          stroke="url(#zigzagGrad)"
                          strokeWidth="2"
                          strokeOpacity="0.6"
                        />
                      )
                    })}
                  </svg>

                  <div className="relative z-10 space-y-6">
                    {experiences.map((job, index) => {
                      const isLeft = index % 2 === 0
                      return (
                        <div key={index} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                          <div className="relative w-[80%]">
                            {/* Dot */}
                            <div className={`absolute top-4 ${isLeft ? "-left-4" : "-right-4"} flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan-500 bg-black shadow-lg shadow-cyan-500/20 z-20`}>
                              <span className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                            </div>
                            <Card className={`bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all group ${isLeft ? "ml-6" : "mr-6"}`}>
                              <CardContent className="p-5">
                                <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                                <p className="text-cyan-400 font-medium text-sm">{job.company}</p>
                                <p className="text-xs text-muted-foreground">{job.location}</p>
                                <p className="text-xs text-purple-400 mb-3">{job.period}</p>
                                <ul className="space-y-1.5">
                                  {job.responsibilities.map((responsibility, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                                      <span>{responsibility}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Desktop timeline (line in center, alternating) */}
                <div className="hidden md:block relative space-y-12 before:absolute before:left-1/2 before:-translate-x-px before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-cyan-500">
                  {experiences.map((job, index) => (
                    <div key={index} className="relative">
                      <div className={`flex items-start ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-500 bg-black shadow-lg shadow-cyan-500/20 -translate-x-1/2 z-10">
                          <span className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                        </div>

                        {/* Content card */}
                        <div className={`w-[45%] ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                          <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all group">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                              </div>
                              <p className="text-cyan-400 font-medium">{job.company}</p>
                              <p className="text-sm text-muted-foreground mb-1">{job.location}</p>
                              <p className="text-sm text-purple-400 mb-4">{job.period}</p>
                              <ul className="space-y-2">
                                {job.responsibilities.map((responsibility, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                                    <span>{responsibility}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-5xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-center">Technical Skills</h2>
                <div className="mb-12 h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>

                <div className="grid gap-6 md:grid-cols-2">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all h-full group">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-all">
                              <category.icon className="h-5 w-5 text-cyan-400" />
                            </div>
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-cyan-500/20 transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Programming Languages */}
                <Card className="mt-8 bg-black/50 backdrop-blur-xl border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Programming & IaC</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Java", "C#", "SQL", "Terraform (basic)"].map((skill) => (
                        <Badge key={skill} className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-cyan-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-5xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-center">Courses & Certifications</h2>
                <div className="mb-12 h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className={`bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all h-full ${achievement.inProgress ? 'border-purple-500/30' : ''}`}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <div className={`p-2 rounded-lg ${achievement.type === 'certification' ? 'bg-cyan-500/20' : achievement.type === 'course' ? 'bg-purple-500/20' : 'bg-yellow-500/20'}`}>
                              {achievement.type === 'certification' ? (
                                <Award className="h-5 w-5 text-cyan-400" />
                              ) : (
                                <BookOpen className="h-5 w-5 text-purple-400" />
                              )}
                            </div>
                            {achievement.inProgress && (
                              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                                In Progress
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold mt-3 mb-1">{achievement.title}</h3>
                          <p className="text-sm text-cyan-400">{achievement.issuer}</p>
                          <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                          <p className="text-sm text-muted-foreground mt-3">{achievement.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-6xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-center">Featured Projects</h2>
                <div className="mb-12 h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>

                <div className="grid gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all overflow-hidden group">
                        <CardContent className="p-0">
                          <div className={`grid ${project.featured && project.images.length > 0 ? 'lg:grid-cols-2' : ''}`}>
                            {/* Image Carousel or Icon Placeholder */}
                            {project.images.length > 0 ? (
                              <div className="p-2">
                                <ImageCarousel
                                  images={project.images}
                                  alt={project.title}
                                  autoPlayInterval={4000}
                                  className="rounded-lg"
                                />
                              </div>
                            ) : (
                              <div className="p-6 flex items-center justify-center min-h-[200px] bg-gradient-to-br from-cyan-500/5 to-purple-600/5">
                                <div className="text-center">
                                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-white/10">
                                    <Terminal className="h-8 w-8 text-cyan-400" />
                                  </div>
                                  <p className="text-xs text-muted-foreground">Learning / Sandbox Project</p>
                                </div>
                              </div>
                            )}

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-center">
                              <div className="flex items-center gap-2 mb-2">
                                {project.featured && (
                                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 border-0 text-xs">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="bg-white/5">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-3">
                                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0">
                                  <Link href={project.link}>
                                    View Details
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                                {project.liveUrl ? (
                                  <Button variant="outline" asChild className="border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                      Live Demo
                                      <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                  </Button>
                                ) : project.isLocalApp ? (
                                  <Badge variant="outline" className="border-purple-500/50 text-purple-400 py-2 px-4">
                                    Desktop App
                                  </Badge>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button variant="outline" asChild className="border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent">
                    <Link href="/projects">
                      View All Projects
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-4xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-center">Get In Touch</h2>
                <div className="mb-12 h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>

                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                      <div className="space-y-4">
                        <a href="mailto:ghenea.andrew@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-cyan-400 transition-colors">
                          <div className="p-2 rounded-lg bg-cyan-500/20">
                            <Mail className="h-5 w-5 text-cyan-400" />
                          </div>
                          <span>ghenea.andrew@gmail.com</span>
                        </a>
                        <a href="tel:+393247908209" className="flex items-center gap-3 text-muted-foreground hover:text-cyan-400 transition-colors">
                          <div className="p-2 rounded-lg bg-cyan-500/20">
                            <Phone className="h-5 w-5 text-cyan-400" />
                          </div>
                          <span>Telegram @AndreiJT</span>
                        </a>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="p-2 rounded-lg bg-cyan-500/20">
                            <MapPin className="h-5 w-5 text-cyan-400" />
                          </div>
                          <span>Verona, Italy</span>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h4 className="text-sm font-semibold mb-4">Connect With Me</h4>
                        <div className="flex gap-3">
                          <Button variant="outline" size="icon" asChild className="border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent">
                            <a href="https://github.com/AndrewJT" target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                            </a>
                          </Button>
                          <Button variant="outline" size="icon" asChild className="border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-5 w-5" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Andrei Ghenea. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
