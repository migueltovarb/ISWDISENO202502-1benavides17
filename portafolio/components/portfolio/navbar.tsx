"use client"

import { useEffect, useState } from "react"
import { Github, Languages, Menu, MessageCircle, MoonStar, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/portfolio/i18n"

const navLinks = [
  { href: "#inicio", key: "nav.inicio" },
  { href: "#habilidades", key: "nav.habilidades" },
  { href: "#proyectos", key: "nav.proyectos" },
  { href: "#perfil", key: "nav.perfil" },
  { href: "#metodologia", key: "nav.metodologia" },
  { href: "#testimonios", key: "nav.testimonios" },
  { href: "#hobbies", key: "nav.hobbies" },
  { href: "#contacto", key: "nav.contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWhiteMode, setIsWhiteMode] = useState(false)
  const [presenceIndex, setPresenceIndex] = useState(0)
  const whatsappUrl = "https://wa.me/573014958628"
  const githubUrl = "https://github.com/benavides17"
  const { lang, setLang, t } = useI18n()
  const presenceModes = ["online", "focus", "away"] as const
  const currentPresence = presenceModes[presenceIndex]

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("color-mode") : null
    const white = saved === "white"
    setIsWhiteMode(white)
    document.documentElement.classList.toggle("white-mode", white)

    const savedPresence = typeof window !== "undefined" ? window.localStorage.getItem("presence-mode") : null
    const idx = savedPresence ? presenceModes.indexOf(savedPresence as (typeof presenceModes)[number]) : -1
    if (idx >= 0) setPresenceIndex(idx)
  }, [])

  const toggleColorMode = () => {
    const next = !isWhiteMode
    setIsWhiteMode(next)
    document.documentElement.classList.toggle("white-mode", next)
    window.localStorage.setItem("color-mode", next ? "white" : "war")
  }

  const cyclePresence = () => {
    const next = (presenceIndex + 1) % presenceModes.length
    setPresenceIndex(next)
    window.localStorage.setItem("presence-mode", presenceModes[next])
  }

  return (
    <header className="war-topbar fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-sm border-b border-border">
      <div className="war-container">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="war-panel px-3 py-2 text-sm sm:text-base font-semibold tracking-[0.16em] hover:border-primary transition-colors flex items-center gap-2">
            <picture>
              <source srcSet="/gears.png" type="image/png" />
              <img src="/cog-emblem.svg" alt="Emblema táctico" className="w-7 h-7 object-contain" />
            </picture>
            <span>RONALD // COG UNIT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="war-nav-link text-base text-muted-foreground hover:text-primary transition-colors tracking-[0.12em]"
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.whatsappAria")}
              className="war-panel p-2 text-primary hover:text-white hover:bg-primary transition-colors"
              title={t("nav.whatsappTitle")}
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.githubAria")}
              className="war-panel p-2 text-primary hover:text-white hover:bg-primary transition-colors"
              title={t("nav.githubTitle")}
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="#inicio"
              aria-label={t("nav.logoAria")}
              className="war-panel p-2 text-primary hover:text-white hover:bg-primary transition-colors"
              title={t("nav.logoTitle")}
            >
              <img src="/cog-emblem.svg" alt={t("nav.logoAlt")} className="w-5 h-5 object-contain" />
            </a>

            <button
              type="button"
              onClick={toggleColorMode}
              aria-label={t("nav.themeAria")}
              className="war-panel px-2.5 py-2 text-primary hover:text-white hover:bg-primary transition-colors inline-flex items-center gap-2"
              title={t("nav.themeTitle")}
            >
              {isWhiteMode ? <Sun className="w-4 h-4" /> : <MoonStar className="w-4 h-4" />}
              <span className="text-[10px] tracking-[0.12em]">{isWhiteMode ? t("nav.themeWhite") : t("nav.themeWar")}</span>
            </button>

            <div className="war-panel flex items-center gap-1.5 p-1 text-primary">
              <Languages className="w-4 h-4" />
              {(["es", "en", "jp"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-[10px] tracking-[0.14em] border transition-colors ${lang === code ? "border-primary bg-primary text-white" : "border-primary/35 hover:border-primary"}`}
                >
                  {t(`lang.${code}`)}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={cyclePresence}
              className={`war-chip presence-chip ${currentPresence} px-2.5 py-1 text-[10px] text-primary inline-flex items-center gap-1.5`}
              title={t("nav.presenceHint")}
              aria-label={t("nav.presenceAria")}
            >
              <span className="presence-dot" aria-hidden="true" />
              <span>{t(`nav.status.${currentPresence}`)}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.whatsappAria")}
              className="war-panel p-2 text-primary hover:text-white hover:bg-primary transition-colors"
              title={t("nav.whatsappTitle")}
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.githubAria")}
              className="war-panel p-2 text-primary hover:text-white hover:bg-primary transition-colors"
              title={t("nav.githubTitle")}
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="#inicio"
              aria-label={t("nav.logoAria")}
              className="war-panel p-2 text-primary hover:text-white hover:bg-primary transition-colors"
              title={t("nav.logoTitle")}
            >
              <img src="/cog-emblem.svg" alt={t("nav.logoAlt")} className="w-5 h-5 object-contain" />
            </a>

            <button
              type="button"
              onClick={toggleColorMode}
              aria-label={t("nav.themeAria")}
              className="war-panel p-2 text-primary hover:text-white hover:bg-primary transition-colors"
              title={t("nav.themeTitle")}
            >
              {isWhiteMode ? <Sun className="w-4 h-4" /> : <MoonStar className="w-4 h-4" />}
            </button>

            <div className="war-panel flex items-center gap-1 p-1 text-primary">
              <Languages className="w-4 h-4" />
              {(["es", "en", "jp"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-[10px] tracking-[0.14em] border transition-colors ${lang === code ? "border-primary bg-primary text-white" : "border-primary/35 hover:border-primary"}`}
                >
                  {t(`lang.${code}`)}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={cyclePresence}
              className={`war-chip presence-chip ${currentPresence} px-2 py-1 text-[10px] text-primary inline-flex items-center gap-1`}
              title={t("nav.presenceHint")}
              aria-label={t("nav.presenceAria")}
            >
              <span className="presence-dot" aria-hidden="true" />
              <span>{t(`nav.status.${currentPresence}`)}</span>
            </button>

            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="ml-2 text-xs tracking-wider">{t("nav.menu")}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border war-panel mt-2 mb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors tracking-[0.12em]"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
