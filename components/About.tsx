import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <div>
      <section id="about" className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Welcome to XERXESLIR EXIM
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Your trusted partner in global trade. With expertise in the
                import and export of agricultural machinery, food commodities,
                light machinery, and spare parts, we are dedicated to providing
                seamless trade solutions that empower businesses across the
                world.
              </p>
              <p className="text-muted-foreground md:text-lg">
                At XERXESLIR EXIM, we leverage our extensive network of
                suppliers and buyers to offer premium products, competitive
                pricing, and reliable logistics. We take pride in meeting the
                ever-evolving demands of the international market while ensuring
                excellence, efficiency, and unmatched customer satisfaction in
                every transaction.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Our philosophy is rooted in building long-term partnerships
                based on trust and value. Whether you&apos;re seeking to source
                high-quality food commodities, cutting-edge agricultural
                equipment, or durable spare parts, we are committed to
                delivering solutions tailored to your specific business needs.
              </p>
              <p className="font-medium md:text-lg">
                Experience the difference with XERXESLIR EXIM—where quality
                meets reliability, and your business thrives.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Global trade operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
