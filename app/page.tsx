import Hero from "@/components/sections/Hero"
import ProductVariants from "@/components/sections/ProductVariants"
import Testimonials from "@/components/sections/Testimonials"
import Information from "@/components/sections/Information"
import Contact from "@/components/sections/Contact"
import Maps from "@/components/sections/Maps"
import Footer from "@/components/sections/Footer"
import TopBar from "@/components/layout/TopBar"
import LogoSection from "@/components/sections/LogoSection"

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <section id="hero">
          <Hero />
        </section>
        <section id="products">
          <ProductVariants />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="information">
          <Information />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Maps />
        <LogoSection />
        <Footer />
      </main>
    </>
  )
}
