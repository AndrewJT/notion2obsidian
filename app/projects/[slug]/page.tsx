"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Background3D from "@/components/background-3d"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch project data based on the slug
  const project = {
    title: "Automated Testing Framework",
    description: "A comprehensive automated testing framework using Selenium and Java for web applications.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["Java", "Selenium", "TestNG", "Jenkins", "Git"],
    details: `
      This project involved creating a robust automated testing framework for a large-scale web application. 
      The framework was designed to be maintainable, scalable, and easy to use for QA engineers with varying levels of programming experience.
      
      Key features of the framework include:
      
      - Page Object Model design pattern for better maintainability
      - Data-driven testing capabilities
      - Detailed HTML reports with screenshots
      - Integration with CI/CD pipeline via Jenkins
      - Cross-browser testing support
      - Parallel test execution for faster feedback
      
      The framework significantly reduced regression testing time from days to hours and improved test coverage by 40%.
    `,
    challenges: [
      "Handling dynamic elements in the web application",
      "Ensuring test stability across different environments",
      "Optimizing test execution time for large test suites",
      "Creating a framework that could be used by testers with limited coding experience",
    ],
    outcomes: [
      "Reduced regression testing time by 75%",
      "Increased test coverage by 40%",
      "Improved bug detection in early stages of development",
      "Enabled non-technical QA team members to contribute to automation efforts",
    ],
  }

  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Background3D />
      </div>

      <div className="container py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button variant="outline" size="icon" asChild className="mb-4">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to projects</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-8 overflow-hidden rounded-lg border border-white/10"
        >
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full object-cover" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 space-y-8"
          >
            <Card className="bg-black/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Project Overview</h2>
                <div className="prose max-w-none">
                  {project.details.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-7 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Challenges</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-muted-foreground">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Outcomes</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="text-muted-foreground">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-black/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Duration</h4>
                    <p>6 months</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
                    <p>Lead Test Automation Engineer</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Team Size</h4>
                    <p>4 members</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Related Projects</h3>
                <div className="space-y-4">
                  <Link href="/projects/performance-testing-suite" className="block hover:text-primary">
                    Performance Testing Suite
                  </Link>
                  <Link href="/projects/bug-tracking-system" className="block hover:text-primary">
                    Bug Tracking System
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
