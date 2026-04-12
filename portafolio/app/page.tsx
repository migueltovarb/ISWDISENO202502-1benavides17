import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Profile } from "@/components/portfolio/profile"
import { Methodology } from "@/components/portfolio/methodology"
import { Testimonials } from "@/components/portfolio/testimonials"
import { Hobbies } from "@/components/portfolio/hobbies"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { I18nProvider } from "@/components/portfolio/i18n"

export default function HomePage() {
  return (
    <I18nProvider>
      <div className="war-page-frame">
        <Navbar />
        <main className="war-shell relative z-0">
          <Hero />
          <Skills />
          <Projects />
          <Profile />
          <Methodology />
          <Testimonials />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
