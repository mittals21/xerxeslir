import img2 from "@/assets/image2.png"
import img3 from "@/assets/image3.png"
import Navbar from "@/components/Navbar"
import Home from "@/components/Home"
import About from "@/components/About"
import Services from "@/components/Services"
import WhyUs from "@/components/WhyUs"
import Contact from "@/components/Contact"
import ContactBanner from "@/components/ContactBanner"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="">
        <Home />
        <Services />
        <WhyUs />
        <About />
        <Contact />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  )
}
