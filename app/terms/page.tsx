import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">
      <div className="container py-20">
        <Button variant="outline" size="icon" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p>Last updated: June 13, 2025</p>

            <h2>Introduction</h2>
            <p>
              Welcome to my personal portfolio website. By accessing and using this website, you accept and agree to be
              bound by the terms and provisions of this agreement.
            </p>

            <h2>Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, I own the intellectual property rights for all material on this website. All
              intellectual property rights are reserved. You may view and/or print pages from the website for your own
              personal use subject to restrictions set in these terms and conditions.
            </p>

            <h3>You must not:</h3>
            <ul>
              <li>Republish material from this website without attribution</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website for commercial purposes</li>
              <li>Redistribute content from this website (unless content is specifically made for redistribution)</li>
            </ul>

            <h2>User Content</h2>
            <p>
              When you submit content through the contact form or any other means, you grant me a non-exclusive,
              worldwide, irrevocable license to use, reproduce, adapt, publish, translate, and distribute it in any
              media. Your name will be credited as the author of the content.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or
              implied, and hereby disclaim and negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for
              loss of data or profit, or due to business interruption) arising out of the use or inability to use the
              materials on this website, even if I or an authorized representative has been notified orally or in
              writing of the possibility of such damage.
            </p>

            <h2>Links</h2>
            <p>
              This website may contain links to external websites that are not provided or maintained by me. I do not
              guarantee the accuracy, relevance, timeliness, or completeness of any information on these external
              websites.
            </p>

            <h2>Modifications</h2>
            <p>
              I may revise these terms of service at any time without notice. By using this website, you are agreeing to
              be bound by the then current version of these terms of service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Italy and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>Contact</h2>
            <p>If you have any questions about these Terms of Service, please contact me at: ghenea.andrew@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
