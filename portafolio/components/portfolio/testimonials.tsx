"use client"

import { Quote, Star } from "lucide-react"
import { useI18n } from "@/components/portfolio/i18n"

export function Testimonials() {
  const { t } = useI18n()

  const testimonials = [1, 2, 3].map((idx) => {
    const name = t(`testimonials.${idx}.name`)
    return {
      id: idx,
      name,
      role: t(`testimonials.${idx}.role`),
      org: t(`testimonials.${idx}.org`),
      quote: t(`testimonials.${idx}.quote`),
      initials: name.slice(0, 1).toUpperCase(),
    }
  })

  return (
    <section id="testimonios" className="war-section war-section-dense">
      <div className="war-container">
        <div className="war-heading-row flex items-center gap-4 mb-12">
          <h2 className="war-heading text-sm tracking-wider font-medium whitespace-nowrap">{t("section.testimonials")}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="war-panel testimonial-card war-card p-6 border-primary/45"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-full border border-primary/70 bg-primary/30 text-primary flex items-center justify-center font-bold text-lg">
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="war-card-title text-base leading-tight truncate">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-tight">{item.role}</p>
                    <p className="text-xs text-primary/90 tracking-[0.08em] mt-1 truncate">{item.org}</p>
                  </div>
                </div>
                <Quote className="w-7 h-7 text-primary/80 shrink-0" />
              </div>

              <div className="flex items-center gap-1 mt-5 text-yellow-400" aria-hidden="true">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>

              <p className="war-card-text text-sm italic mt-4 leading-relaxed">"{item.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
