import React from "react"
import { Button } from "./Button"
import Link from "next/link"

const ContactBanner = () => {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Ready to Expand Your Global Trade Opportunities?
            </h2>
            <p className="mx-auto max-w-[700px] opacity-90 md:text-lg">
              Partner with XERXESLIR EXIM for seamless import and export
              solutions tailored to your business needs.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-4 border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              <Link href="#contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactBanner
