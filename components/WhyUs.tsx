import Image from "next/image"
import React from "react"
import food from "@/assets/food.jpg"
import lightMachine from "@/assets/lightMachine.jpg"
import agriculture from "@/assets/combine-harvester.jpg"
import spare from "@/assets/spareParts.jpg"

const WhyUs = () => {
  return (
    <div>
      <section className="bg-primary/5 py-16 md:py-24 h-screen">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose XERXESLIR EXIM?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Global Network</h3>
                    <p className="text-muted-foreground">
                      Extensive network of suppliers and buyers across
                      continents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Rigorous quality control processes for all products.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Competitive Pricing</h3>
                    <p className="text-muted-foreground">
                      Optimal pricing strategies to maximize value for our
                      clients.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Reliable Logistics</h3>
                    <p className="text-muted-foreground">
                      Seamless shipping and delivery solutions worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  // src="/placeholder.svg?height=300&width=300"
                  src={agriculture}
                  alt="Agricultural machinery"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  // src="/placeholder.svg?height=300&width=300"
                  src={food}

                  alt="Food commodities"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  // src="/placeholder.svg?height=300&width=300"
                  src={lightMachine}

                  alt="Light machinery"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  // src="/placeholder.svg?height=300&width=300"
                  src={spare}

                  alt="Spare parts"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs
