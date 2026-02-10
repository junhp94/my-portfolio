import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen text-neutral-900">
      <div className="bg-[#eef2f6]">
        <Navbar />
        <Hero />
      </div>

      <div className="bg-white">
        <About />
      </div>

      <div className="bg-[#eef2f6]">
        <Projects />
      </div>

      <div className="bg-white">
        <Contact />
      </div>

      <div className="bg-[#eef2f6]">
        <Footer />
      </div>
    </div>
  )
}
