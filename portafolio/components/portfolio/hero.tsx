"use client"

import { useI18n } from "@/components/portfolio/i18n"

export function Hero() {
  const { t } = useI18n()
  const tags = [t("hero.tag1"), t("hero.tag2"), t("hero.tag3"), t("hero.tag4"), t("hero.tag5")]

  return (
    <section id="inicio" className="war-section war-section-dense pt-24">
      <div className="war-container">
        <div className="war-panel war-project-look p-6 md:p-10 lg:p-12 relative overflow-hidden">
          <div className="hero-carmine-decor" aria-hidden="true">
            <img src="/carmine.gif" alt="" className="hero-carmine-character" />
          </div>
          <div className="hero-about-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="hero-photo-zone">
              <div className="hero-photo-orbit">
                <span className="hero-blood-ring" />
                <span className="hero-blood-drip hero-blood-drip-a" />
                <span className="hero-blood-drip hero-blood-drip-b" />
                <span className="hero-blood-drip hero-blood-drip-c" />
                <div className="hero-photo-ring">
                  <img src="/pipe.png" alt={t("hero.photoAlt")} className="hero-photo" />
                </div>
                <span className="hero-photo-dot hero-photo-dot-a" />
                <span className="hero-photo-dot hero-photo-dot-b" />
                <span className="hero-photo-dot hero-photo-dot-c" />
              </div>
              <div className="hero-role-pill">
                <span className="hero-role-bullet" />
                {t("hero.role")}
              </div>
            </div>

            <div className="hero-copy-zone">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">RONALD FELIPE BENAVIDES BASTIDAS</h1>
              <p className="text-base md:text-lg text-muted-foreground tracking-[0.12em] mb-6">{t("hero.subtitle")}</p>

              <p className="war-card-text mb-5">
                {t("hero.p1")}
              </p>
              <p className="war-card-text mb-6">
                {t("hero.p2")}
              </p>

              <div className="war-separator mb-5" />

              <div className="flex flex-wrap gap-2.5 mb-6">
                {tags.map((tag) => (
                  <span key={tag} className="war-chip px-4 py-2 tracking-[0.12em]">{tag}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#proyectos" className="war-cta text-white px-8 py-3 text-base tracking-[0.14em]">{t("hero.ctaProjects")}</a>
                <a href="#" className="border border-primary text-primary px-8 py-3 text-base tracking-[0.14em] hover:bg-primary hover:text-white transition-colors">{t("hero.ctaCV")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
