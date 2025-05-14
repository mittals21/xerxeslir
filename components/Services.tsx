import { ChevronRight, Cog, Package, Truck } from "lucide-react"
import Link from "next/link"
import React from "react"

const Services = () => {
  return (
    <div>
      <section id="services" className="py-16 md:py-24 h-screen">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              {/* <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Services
              </div> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Comprehensive Trade Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                We specialize in the import and export of premium products
                across multiple categories, ensuring quality and reliability in
                every transaction.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Agricultural Machinery</h3>
              <p className="text-muted-foreground">
                Cutting-edge farming equipment and machinery to enhance
                agricultural productivity and efficiency.
              </p>
              <Link
                href="#contact"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Food Commodities</h3>
              <p className="text-muted-foreground">
                High-quality food products and commodities sourced from trusted
                suppliers worldwide.
              </p>
              <Link
                href="#contact"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cog className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Light Machinery</h3>
              <p className="text-muted-foreground">
                Reliable and efficient light machinery for various industrial
                and commercial applications.
              </p>
              <Link
                href="#contact"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.9 4.9 14.2 14.2" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m2 12 2 0" />
                  <path d="m20 12 2 0" />
                  <path d="m6.3 17.7-1.4 1.4" />
                  <path d="m19.1 4.9-1.4 1.4" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Spare Parts</h3>
              <p className="text-muted-foreground">
                Genuine spare parts and components for machinery maintenance and
                repairs.
              </p>
              <Link
                href="#contact"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
