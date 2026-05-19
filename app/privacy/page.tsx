import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p>Last updated: June 13, 2025</p>

            <h2>Introduction</h2>
            <p>
              Welcome to my personal portfolio website. I respect your privacy and am committed to protecting your
              personal data. This privacy policy will inform you about how I look after your personal data when you
              visit my website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>The Data I Collect</h2>
            <p>When you use the contact form on my website, I collect the following personal information:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>

            <h2>How I Use Your Data</h2>
            <p>I use the information you provide via the contact form solely to:</p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Communicate with you regarding potential collaboration or employment opportunities</li>
              <li>Improve my website and services</li>
            </ul>

            <h2>Data Storage and Security</h2>
            <p>
              I take appropriate security measures to prevent unauthorized access, disclosure, modification, or
              unauthorized destruction of your data. The personal information you provide is stored in a secure
              environment and is only accessible by me.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              I use Resend.com as an email service provider to process contact form submissions. Their use of your
              personal data is governed by their own privacy policy.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              I may update this privacy policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions about this privacy policy or my data practices, please contact me at:
              ghenea.andrew@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
