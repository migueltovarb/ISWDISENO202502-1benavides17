"use client"

import { useI18n } from "@/components/portfolio/i18n"

export function Projects() {
  const { t } = useI18n()
  const projects = [
    {
      id: 1,
      title: t("projects.1.title"),
      type: t("projects.1.type"),
      description: t("projects.1.desc"),
      technologies: [t("projects.1.tech.1"), t("projects.1.tech.2"), t("projects.1.tech.3"), t("projects.1.tech.4")],
      demoUrl: "#",
      githubUrl: "https://github.com/benavides17/reproductor-de-musica-.git",
      detailUrl: "https://github.com/benavides17/reproductor-de-musica-.git",
      image: "/reproductor.png"
    },
    {
      id: 2,
      title: t("projects.2.title"),
      type: t("projects.2.type"),
      description: t("projects.2.desc"),
      technologies: [t("projects.2.tech.1"), t("projects.2.tech.2"), t("projects.2.tech.3"), t("projects.2.tech.4")],
      demoUrl: "#",
      githubUrl: "#",
      detailUrl: "https://mentes-creativas.vercel.app/",
      image: "/mente.png"
    },
    {
      id: 3,
      title: t("projects.3.title"),
      type: t("projects.3.type"),
      description: t("projects.3.desc"),
      technologies: [t("projects.3.tech.1"), t("projects.3.tech.2"), t("projects.3.tech.3"), t("projects.3.tech.4")],
      demoUrl: "#",
      githubUrl: "#",
      detailUrl: "https://para-calculo.vercel.app/",
      image: "/calculo.png"
    }
  ]

  return (
    <section id="proyectos" className="war-section war-section-dense">
      <div className="war-container">
        {/* Section Title */}
        <div className="war-heading-row flex items-center gap-4 mb-12">
          <h2 className="war-heading text-sm tracking-wider font-medium whitespace-nowrap">{t("section.projects")}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Projects Grid */}
        <div id="proyectos-grid" className="war-grid-equal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.id} className="pt-3">
              <div className="relative">
                <div className="war-panel sooty-surface war-card war-card-reveal relative flex flex-col overflow-hidden min-h-[360px]">
                  <img
                    src={project.image}
                    alt={`Decoracion de ${project.title}`}
                    className="project-card-bg absolute inset-0 w-full h-full object-cover opacity-18"
                  />
                  <div className="project-card-tint absolute inset-0 bg-gradient-to-b from-black/62 via-black/72 to-black/90" />
                  <img src="/war-noise.svg" alt="Textura militar" className="project-card-noise absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay" />

                {/* Content */}
                  <div className="flex flex-col flex-1 relative z-10">
                  {/* Title & Type */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="war-card-title">{project.title}</h3>
                    <span className="war-chip px-2 py-1 tracking-[0.12em] shrink-0">
                      {project.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="war-card-text mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="border-t border-border pt-4 mb-6">
                    <h4 className="war-card-subtitle mb-3">{t("projects.tech")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="war-chip px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                    <div className="flex items-center justify-between gap-4 mb-5">
                      <a href={project.githubUrl} className="sooty-link">{t("projects.github")}</a>
                      <a href={project.demoUrl} className="sooty-link">{t("projects.demo")}</a>
                    </div>

                  {/* CTA Button */}
                    <a
                      href={project.detailUrl}
                      target={project.detailUrl !== "#" ? "_blank" : undefined}
                      rel={project.detailUrl !== "#" ? "noopener noreferrer" : undefined}
                      className="w-full border border-primary py-3.5 text-base tracking-[0.14em] text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors text-center"
                    >
                      {t("projects.detail")}
                    </a>
                  </div>
                </div>
              </div>

              <div className="war-panel mt-5 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="w-full h-44 object-contain bg-black/40 p-2"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 war-panel p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-muted-foreground">
            {t("projects.note")}
          </p>
          <a href="#proyectos-grid" className="war-cta text-white px-7 py-2.5 text-base tracking-[0.14em] transition-colors text-center">
            {t("projects.viewAll")}
          </a>
        </div>
      </div>
    </section>
  )
}
