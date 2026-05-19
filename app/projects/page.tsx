"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Monitor, Terminal } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Background3D from "@/components/background-3d"
import { ImageCarousel } from "@/components/image-carousel"

const projects = [
  {
    title: "NetConnect Pro Console",
    slug: "netconnect-pro",
    description:
      "IT management desktop app for RDP connections, VPN client management, Identity Vault for credential storage, and system health monitoring dashboard.",
    images: [
      "/images/netconnect-dashboard.png",
      "/images/netconnect-rdp.png",
      "/images/netconnect-vault.png",
    ],
    tags: ["Electron", "TypeScript", "Node.js", "Security", "RDP", "VPN"],
    liveUrl: null,
    isLocalApp: true,
  },
  {
    title: "Home Manager App",
    slug: "home-management-app",
    description:
      "Comprehensive home management solution with calendar, task management, expense tracking, weather integration, smart home control (Tuya devices), inventory management, and meal planning.",
    images: [
      "/images/home-dashboard-dark.png",
      "/images/home-calendar.png",
      "/images/home-tuya.png",
      "/images/home-dashboard-light.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Tuya API", "Weather API"],
    liveUrl: "https://homehub.tapya.xyz",
    isLocalApp: false,
  },
  {
    title: "Minesweeper Game",
    slug: "minesweeper-game",
    description:
      "Modern implementation of the classic Minesweeper game with multiple difficulty levels (Easy, Medium, Hard), timer, flag counter, and responsive design.",
    images: [
      "/images/minesweeper-medium.png",
      "/images/minesweeper-hard.png",
    ],
    tags: ["React", "TypeScript", "CSS", "Game Logic"],
    liveUrl: "https://minesweeper.tapya.xyz",
    isLocalApp: false,
  },
  {
    title: "AWS Infrastructure Lab",
    slug: "aws-lab",
    description:
      "Personal lab environment for practicing AWS services: VPC networking, EC2 provisioning, RDS setup, S3 lifecycle policies, and IAM role management using Terraform.",
    images: [],
    tags: ["AWS", "Terraform", "VPC", "EC2", "RDS", "IAM"],
    liveUrl: null,
    isLocalApp: false,
  },
  {
    title: "CI/CD Pipeline Sandbox",
    slug: "cicd-sandbox",
    description:
      "Docker-based CI/CD pipeline using GitHub Actions for automated testing, building container images, and deploying to a staging environment with health checks.",
    images: [],
    tags: ["Docker", "GitHub Actions", "CI/CD", "Bash", "Nginx"],
    liveUrl: null,
    isLocalApp: false,
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Background3D />
      </div>

      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4"
        >
          <Button variant="outline" size="icon" asChild className="border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">All Projects</h1>
            <p className="text-muted-foreground">A collection of my personal and professional projects</p>
          </div>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all group">
                <CardContent className="p-0">
                  <div className={`grid ${project.images.length > 0 ? 'lg:grid-cols-2' : ''}`}>
                    {project.images.length > 0 ? (
                      <div className="p-3">
                        <ImageCarousel
                          images={project.images}
                          alt={project.title}
                          autoPlayInterval={4500}
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
                    <div className="p-6 flex flex-col justify-center">
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0">
                          <Link href={`/projects/${project.slug}`}>
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
                          <div className="flex items-center gap-2 text-sm text-purple-400">
                            <Monitor className="h-4 w-4" />
                            <span>Desktop App</span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
