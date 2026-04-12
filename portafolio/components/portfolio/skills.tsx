"use client"

import { Square } from "lucide-react"
import { useI18n } from "@/components/portfolio/i18n"

export function Skills() {
  const { t } = useI18n()
  const skillCategories = [
    {
      title: t("skills.frontend"),
      description: t("skills.frontend.desc"),
      skills: [t("skills.frontend.1"), t("skills.frontend.2"), t("skills.frontend.3"), t("skills.frontend.4"), t("skills.frontend.5"), t("skills.frontend.6")]
    },
    {
      title: t("skills.multimedia"),
      description: t("skills.multimedia.desc"),
      skills: [t("skills.multimedia.1"), t("skills.multimedia.2"), t("skills.multimedia.3"), t("skills.multimedia.4"), t("skills.multimedia.5")]
    },
    {
      title: t("skills.tools"),
      description: t("skills.tools.desc"),
      skills: [t("skills.tools.1"), t("skills.tools.2"), t("skills.tools.3"), t("skills.tools.4"), t("skills.tools.5")]
    },
    {
      title: t("skills.concepts"),
      description: t("skills.concepts.desc"),
      skills: [t("skills.concepts.1"), t("skills.concepts.2"), t("skills.concepts.3"), t("skills.concepts.4"), t("skills.concepts.5"), t("skills.concepts.6")]
    },
    {
      title: t("skills.backend"),
      description: t("skills.backend.desc"),
      skills: [t("skills.backend.1"), t("skills.backend.2"), t("skills.backend.3"), t("skills.backend.4"), t("skills.backend.5")]
    },
    {
      title: t("skills.professional"),
      description: t("skills.professional.desc"),
      skills: [t("skills.professional.1"), t("skills.professional.2"), t("skills.professional.3"), t("skills.professional.4"), t("skills.professional.5")]
    }
  ]

  return (
    <section id="habilidades" className="war-section war-section-dense">
      <div className="war-container relative overflow-visible">
        {/* Section Title */}
        <div className="war-heading-row flex items-center gap-4 mb-12">
          <h2 className="war-heading text-sm tracking-wider font-medium whitespace-nowrap">{t("section.skills")}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Skills Grid */}
        <div className="war-grid-equal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {skillCategories.map((category, index) => (
            <article key={category.title} className="war-panel war-panel-deco war-project-look war-card relative h-full min-h-[470px] pb-8">
                <div className="war-skill-head relative z-10">
                  <span className="war-skill-index" aria-hidden="true">
                    <img src="/gears.png" alt="" className="w-6 h-6 object-contain" />
                  </span>
                  <div className="war-skill-title-wrap flex items-center gap-2">
                    <Square className="w-4 h-4 text-primary" />
                    <h3 className="war-card-title">{category.title}</h3>
                  </div>
                </div>

                <div className="war-separator relative z-10" />

                <p className="war-card-text text-sm relative z-10 mb-1 opacity-90">
                  {category.description}
                </p>

                <div className="war-skill-tags grid grid-cols-1 auto-rows-min content-start gap-2.5 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="war-chip war-skill-chip skill-pill w-fit px-3 py-1.5 tracking-[0.12em]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
