"use client"

import React, { useState } from "react"
import { Button } from "./Button"
import { Mail, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (!name.trim()) {
      toast.error("Name is required")
      return
    }
    if (!email.trim()) {
      toast.error("Email is required")
      return
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email")
      return
    }
    if (!company.trim()) {
      toast.error("Company is required")
      return
    }
    if (!subject.trim()) {
      toast.error("Subject is required")
      return
    }
    if (!message.trim()) {
      toast.error("Message is required")
      return
    }

    setIsLoading(true)

    try {
      const formData = { name, email, company, subject, message }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        }
      )

      toast.success("Message sent successfully ✅")

      // Reset form
      setName("")
      setEmail("")
      setCompany("")
      setSubject("")
      setMessage("")
    } catch (err) {
      console.error("EmailJS Error:", err)
      toast.error("Failed to send message ❌")
    } finally {
      setIsLoading(false)
    }
  }

  console.log({
    service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  })

  return (
    <div>
      <section id="contact" className="min-h-screen py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact XERXESLIR EXIM
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Ready to explore global trade opportunities? Reach out to our
                team for personalized solutions.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@xerxeslirexim.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-bold">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Global Trade Center, Business District
                    <br />
                    New York, NY 10001, USA
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-input"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-input"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-input"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm border-input"
                    placeholder="Enter your message"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
