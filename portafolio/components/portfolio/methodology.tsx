"use client"

import { useI18n } from "@/components/portfolio/i18n"

export function Methodology() {
  const { t } = useI18n()
  const steps = [
    { number: "01", title: t("method.step.1.title"), description: t("method.step.1.desc") },
    { number: "02", title: t("method.step.2.title"), description: t("method.step.2.desc") },
    { number: "03", title: t("method.step.3.title"), description: t("method.step.3.desc") },
    { number: "04", title: t("method.step.4.title"), description: t("method.step.4.desc") },
    { number: "05", title: t("method.step.5.title"), description: t("method.step.5.desc") }
  ]
  const mainStack = [t("method.stack.1"), t("method.stack.2"), t("method.stack.3"), t("method.stack.4")]
  const executionBlocks = [
    {
      title: t("method.extra.1.title"),
      items: [t("method.extra.1.item1"), t("method.extra.1.item2"), t("method.extra.1.item3")]
    },
    {
      title: t("method.extra.2.title"),
      items: [t("method.extra.2.item1"), t("method.extra.2.item2"), t("method.extra.2.item3")]
    },
    {
      title: t("method.extra.3.title"),
      items: [t("method.extra.3.item1"), t("method.extra.3.item2"), t("method.extra.3.item3")]
    }
  ]

  return (
    <section id="metodologia" className="war-section war-section-dense">
      <div className="war-container">
        {/* Section Title */}
        <div className="war-heading-row flex items-center gap-4 mb-12">
          <h2 className="war-heading text-sm tracking-wider font-medium whitespace-nowrap">{t("section.methodology")}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Steps - Desktop */}
        <div className="hidden md:grid grid-cols-5 gap-4 mb-16 war-panel war-panel-deco war-project-look p-6">
          {steps.map((step) => (
            <div key={step.number} className="war-card text-center min-h-[210px]">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-8 bg-primary/20 border border-primary text-white flex items-center justify-center p-1">
                  <img src="/gears.png" alt="Logo" className="w-full h-full object-contain" />
                </span>
                <span className="war-card-title text-sm">{step.title}</span>
              </div>
              <p className="war-card-text text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Steps - Mobile */}
        <div className="md:hidden war-panel war-panel-deco war-project-look mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`p-6 ${index < steps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-primary/20 border border-primary text-white flex items-center justify-center p-1">
                  <img src="/gears.png" alt="Logo" className="w-full h-full object-contain" />
                </span>
                <span className="text-sm font-semibold tracking-wider">{step.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="war-panel war-panel-deco war-project-look p-6 md:p-8 mb-10">
          <h3 className="war-card-title mb-5">{t("method.extra.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {executionBlocks.map((block) => (
              <article key={block.title} className="border border-border p-4 bg-black/15">
                <h4 className="war-card-subtitle mb-3">{block.title}</h4>
                <div className="war-separator mb-3" />
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-relaxed">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Philosophy & Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="war-panel war-panel-deco war-project-look war-card">
            <h3 className="war-card-title mb-2">{t("method.philosophy.title")}</h3>
            <div className="war-separator" />
            <p className="war-card-text">
              {t("method.philosophy.text")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="border border-border p-3 bg-black/10">
                <p className="war-card-subtitle">{t("method.philosophy.box1.title")}</p>
                <p className="text-sm text-muted-foreground mt-2">{t("method.philosophy.box1.text")}</p>
              </div>
              <div className="border border-border p-3 bg-black/10">
                <p className="war-card-subtitle">{t("method.philosophy.box2.title")}</p>
                <p className="text-sm text-muted-foreground mt-2">{t("method.philosophy.box2.text")}</p>
              </div>
            </div>
          </div>

          <div className="war-panel war-panel-deco war-project-look war-card">
            <h3 className="war-card-title mb-2">{t("method.stack.title")}</h3>
            <div className="war-separator" />
            <div className="flex flex-wrap gap-2">
              {mainStack.map((tech) => (
                <span
                  key={tech}
                  className="war-chip px-3 py-1.5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="border border-border p-3 bg-black/10 mt-3">
              <p className="war-card-subtitle mb-2">{t("method.stack.box.title")}</p>
              <p className="text-sm text-muted-foreground">{t("method.stack.box.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
