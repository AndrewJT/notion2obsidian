"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Bomb, Grid3X3, Flag, Clock, Trophy, Smile, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Background3D from "@/components/background-3d"

export default function MinesweeperPage() {
  const screenshots = [
    {
      src: "/images/minesweeper-medium.png",
      alt: "Minesweeper Medium Difficulty",
      caption: "Medium difficulty (16x16) with flags placed and numbers revealed",
    },
    {
      src: "/images/minesweeper-hard.png",
      alt: "Minesweeper Hard Difficulty",
      caption: "Hard difficulty (30x16) grid with 99 mines for expert players",
    },
  ]

  const features = [
    {
      icon: Grid3X3,
      title: "Multiple Difficulty Levels",
      description: "Choose from Easy (9x9), Medium (16x16), or Hard (30x16) grids with varying mine counts.",
    },
    {
      icon: Flag,
      title: "Flag System",
      description: "Right-click to flag suspected mines. Track remaining mines with the counter display.",
    },
    {
      icon: Clock,
      title: "Timer & Scoring",
      description: "Built-in timer to track your solving speed. Compete against your best times.",
    },
    {
      icon: Bomb,
      title: "First Click Safety",
      description: "The first click is always safe - mines are placed after your initial move.",
    },
    {
      icon: Smile,
      title: "Classic UI",
      description: "Retro-inspired interface with modern touches. Reset button shows game state emoticons.",
    },
    {
      icon: Trophy,
      title: "Win Detection",
      description: "Automatic win detection when all non-mine cells are revealed.",
    },
  ]

  const techStack = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "Game Logic",
    "State Management",
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
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                  Game Development
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  Play Online
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                Minesweeper Game
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mb-6">
                A modern React implementation of the classic Minesweeper game with clean UI, 
                multiple difficulty levels, and smooth gameplay experience.
              </p>
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0">
                <a href="https://minesweeper.tapya.xyz" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Play Now
                </a>
              </Button>
            </div>

            {/* Main Screenshot */}
            <Card className="mb-12 bg-black/50 backdrop-blur-xl border-white/10 overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/minesweeper-medium.png"
                  alt="Minesweeper Game"
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
              <h2 className="text-2xl font-bold mb-6">Game Features</h2>
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
                    This Minesweeper implementation focuses on recreating the nostalgic gameplay 
                    of the classic Windows game while adding modern polish and responsive design.
                    The game logic handles mine placement, cell revealing with flood-fill algorithm,
                    and win/lose state detection.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Key challenges included implementing the flood-fill algorithm for revealing 
                    empty cells efficiently, ensuring the first click is always safe by delaying 
                    mine placement, and creating an intuitive UI that works on both desktop and mobile.
                  </p>
                  <p className="text-muted-foreground">
                    The project demonstrates strong understanding of React state management,
                    game development patterns, and creating engaging user interfaces with 
                    attention to detail in animations and visual feedback.
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
