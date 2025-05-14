import React from "react"
import { Button } from "./Button"
import Link from "next/link"
import Image from "next/image"
import img1 from "@/assets/image1.png"

const Home = () => {
  return (
    <div>
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            // src="/placeholder.svg?height=800&width=1920"
            src={img1}
            alt="Global trade background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center space-y-14 py-24 text-center md:py-32 lg:py-40">
          <div className="space-y-10">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Your Trusted Partner in Global Trade
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Connecting businesses worldwide with premium agricultural
              machinery, food commodities, light machinery, and spare parts.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row ">
            <Button asChild size="lg">
              <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button
              asChild
              // variant="outline"
              size="lg"
              // className="bg-background/100 hover:bg-background/40 text-white border-white/20"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
