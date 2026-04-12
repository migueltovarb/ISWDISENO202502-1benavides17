"use client"

import { User } from "lucide-react"
import { useI18n } from "@/components/portfolio/i18n"

export function Profile() {
  const { t } = useI18n()
  const specialties = [
    { number: "1", title: t("profile.sp.1.title"), description: t("profile.sp.1.desc") },
    { number: "2", title: t("profile.sp.2.title"), description: t("profile.sp.2.desc") },
    { number: "3", title: t("profile.sp.3.title"), description: t("profile.sp.3.desc") }
  ]
  const stats = [
    { label: t("profile.stat.1.label"), value: t("profile.stat.1.value") },
    { label: t("profile.stat.2.label"), value: t("profile.stat.2.value") },
    { label: t("profile.stat.3.label"), value: t("profile.stat.3.value") },
    { label: t("profile.stat.4.label"), value: t("profile.stat.4.value") }
  ]
  const studies = [
    {
      period: t("profile.study.1.period"),
      title: t("profile.study.1.title"),
      place: t("profile.study.1.place"),
      description: t("profile.study.1.desc")
    },
    {
      period: t("profile.study.2.period"),
      title: t("profile.study.2.title"),
      place: t("profile.study.2.place"),
      description: t("profile.study.2.desc")
    },
    {
      period: t("profile.study.3.period"),
      title: t("profile.study.3.title"),
      place: t("profile.study.3.place"),
      description: t("profile.study.3.desc")
    },
    {
      period: t("profile.study.4.period"),
      title: t("profile.study.4.title"),
      place: t("profile.study.4.place"),
      description: t("profile.study.4.desc")
    },
    {
      period: t("profile.study.5.period"),
      title: t("profile.study.5.title"),
      place: t("profile.study.5.place"),
      description: t("profile.study.5.desc")
    }
  ]

  return (
    <section id="perfil" className="war-section war-section-dense">
      <div className="war-container">
        {/* Section Title */}
        <div className="war-heading-row flex items-center gap-4 mb-12">
          <h2 className="war-heading text-sm tracking-wider font-medium whitespace-nowrap">{t("section.profile")}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1 war-panel war-panel-deco war-project-look war-card">
            <h3 className="war-card-subtitle">{t("profile.aboutTitle")}</h3>
            <p className="war-card-text">{t("profile.aboutText")}</p>
            <p className="war-card-text">{t("profile.aboutText2")}</p>
          </div>
          
          {/* Photo Placeholder */}
          <div className="w-full lg:w-40 h-40 lg:h-auto war-panel war-panel-deco war-project-look flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <picture>
                <source srcSet="/gears.png" type="image/png" />
                <img src="/cog-emblem.svg" alt="Insignia" className="w-20 h-20 object-contain" />
              </picture>
              <span className="text-xs tracking-[0.12em]">{t("profile.badge")}</span>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="war-grid-equal grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {specialties.map((specialty) => (
            <div key={specialty.number} className="war-panel war-panel-deco war-project-look war-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 border border-primary text-primary flex items-center justify-center p-0.5">
                  <img src="/gears.png" alt="Logo" className="w-full h-full object-contain" />
                </span>
                <h4 className="war-card-title">{specialty.title}</h4>
              </div>
              <p className="war-card-text">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-border war-panel war-panel-deco war-project-look">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`p-6 text-center ${index < stats.length - 1 ? 'border-r border-border' : ''} ${index < 2 ? 'border-b md:border-b-0 border-border' : ''}`}
            >
              <p className="text-xs text-muted-foreground tracking-wider mb-2">{stat.label}</p>
              <p className="font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="war-panel war-panel-deco war-project-look p-6 md:p-8 mt-8">
          <h3 className="war-card-title mb-6">{t("profile.studiesTitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studies.map((study) => (
              <article key={`${study.period}-${study.title}`} className="border border-border p-5 bg-black/15">
                <p className="war-card-subtitle mb-2">{study.period}</p>
                <h4 className="war-card-title text-lg mb-1">{study.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{study.place}</p>
                <p className="war-card-text text-sm">{study.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="war-panel war-panel-deco war-project-look p-6 md:p-8 mt-8">
          <h3 className="war-card-title mb-6">{t("profile.experienceTitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="border border-border p-5 bg-black/15">
              <h4 className="war-card-subtitle mb-2">{t("profile.exp.1.title")}</h4>
              <p className="war-card-text text-sm">{t("profile.exp.1.desc")}</p>
            </article>
            <article className="border border-border p-5 bg-black/15">
              <h4 className="war-card-subtitle mb-2">{t("profile.exp.2.title")}</h4>
              <p className="war-card-text text-sm">{t("profile.exp.2.desc")}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
