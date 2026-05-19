"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Monitor, Shield, Server, Key } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Background3D from "@/components/background-3d"

export default function NetConnectProPage() {
  const screenshots = [
    {
      src: "/images/netconnect-dashboard.png",
      alt: "NetConnect Pro Dashboard",
      caption: "Main dashboard with system metrics and quick access to RDP/VPN connections",
    },
    {
      src: "/images/netconnect-rdp.png",
      alt: "Remote RDP Management",
      caption: "RDP connection manager with grouped servers and one-click launch",
    },
    {
      src: "/images/netconnect-vault.png",
      alt: "Identity Vault",
      caption: "Secure credential storage with encrypted identity management",
    },
  ]

  const features = [
    {
      icon: Monitor,
      title: "RDP Connection Manager",
      description: "Manage multiple remote desktop connections with organized groups, saved credentials, and one-click launch capabilities.",
    },
    {
      icon: Shield,
      title: "VPN Client Integration",
      description: "Built-in VPN client management for secure connections to enterprise networks with multiple protocol support.",
    },
    {
      icon: Key,
      title: "Identity Vault",
      description: "Encrypted credential storage system for secure management of usernames, passwords, and connection details.",
    },
    {
      icon: Server,
      title: "System Health Dashboard",
      description: "Real-time monitoring of connection status, system health metrics, and console performance indicators.",
    },
  ]

  const techStack = [
    "Electron",
    "TypeScript",
    "Node.js",
    "React",
    "Tailwind CSS",
    "SQLite",
    "Windows API",
    "OpenVPN",
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
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  Enterprise Tool
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  Desktop Application
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                NetConnect Pro Console
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Enterprise-grade IT management tool for managing RDP connections, VPN clients, 
                and secure credential storage with real-time system monitoring.
              </p>
              <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                <Monitor className="h-4 w-4 text-purple-400" />
                Local desktop application - not available as a web demo
              </p>
            </div>

            {/* Main Screenshot */}
            <Card className="mb-12 bg-black/50 backdrop-blur-xl border-white/10 overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/netconnect-dashboard.png"
                  alt="NetConnect Pro Dashboard"
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
              <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
                            <feature.icon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    NetConnect Pro Console was developed to streamline IT operations by providing a unified 
                    interface for managing remote connections and credentials. The application addresses common 
                    pain points in enterprise IT environments where administrators need to manage multiple 
                    servers across different networks.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The Identity Vault feature uses AES-256 encryption to securely store credentials locally, 
                    eliminating the need to remember or repeatedly enter complex passwords. The RDP manager 
                    organizes connections by groups (e.g., by client, location, or purpose) and supports 
                    quick-launch functionality.
                  </p>
                  <p className="text-muted-foreground">
                    Built with Electron for cross-platform compatibility, the application provides native 
                    performance while maintaining a modern, responsive UI built with React and Tailwind CSS.
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
