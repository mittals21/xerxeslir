"use client"
import { Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "./Button"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">XERXESLIR EXIM</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <Link href="#contact">Get in Touch</Link>
        </Button>

        {/* Mobile Menu Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle menu</span>
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
  className={`absolute left-0 right-0 z-30 bg-background/60 shadow-lg backdrop-blur-md transform transition-all duration-150 ease-in-out md:hidden ${
    isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0  pointer-events-none"
  }`}
>
  <div className="flex flex-col gap-2 p-4">
    <Link
      href="#home"
      className="text-sm font-medium hover:text-primary"
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>
    <Link
      href="#about"
      className="text-sm font-medium hover:text-primary"
      onClick={() => setIsOpen(false)}
    >
      About Us
    </Link>
    <Link
      href="#services"
      className="text-sm font-medium hover:text-primary"
      onClick={() => setIsOpen(false)}
    >
      Services
    </Link>
    <Link
      href="#contact"
      className="text-sm font-medium hover:text-primary"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
  </div>
</div>


    </header>
  )
}

export default Navbar
