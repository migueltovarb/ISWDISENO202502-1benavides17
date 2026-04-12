"use client"

import { Bike, BookOpenText, Coffee, Dumbbell, Gamepad2, Landmark, MonitorCog, MountainSnow, ShoppingBag, Tv, UtensilsCrossed, Volleyball } from "lucide-react"
import { useI18n } from "@/components/portfolio/i18n"

export function Hobbies() {
  const { t } = useI18n()
  const icons = [Volleyball, Dumbbell, MonitorCog, Gamepad2, Coffee, Landmark, Tv, UtensilsCrossed, ShoppingBag, MountainSnow, Bike, BookOpenText]
  const hobbies = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    icon: icons[i],
    title: t(`hobbies.${i + 1}.title`),
    description: t(`hobbies.${i + 1}.desc`),
    tags: [t(`hobbies.${i + 1}.tag1`), t(`hobbies.${i + 1}.tag2`)],
    imageSrc: i === 0 ? "/futbol.png" : i === 1 ? "/gym.png" : i === 2 ? "/programar.png" : i === 3 ? "/anime.png" : i === 4 ? "/cafe.png" : i === 5 ? "/experiencia.png" : i === 6 ? "/juego.png" : i === 7 ? "/comida.png" : i === 8 ? "/figuras.png" : i === 9 ? "/accion.png" : i === 10 ? "/moto.png" : i === 11 ? "/estudiar.png" : null,
    imagePosition: i === 0 ? "object-[50%_10%]" : i === 1 ? "object-[50%_12%]" : i === 2 ? "object-[50%_24%]" : i === 3 ? "object-[50%_26%]" : i === 4 ? "object-[50%_20%]" : i === 5 ? "object-[50%_24%]" : i === 6 ? "object-[50%_14%]" : i === 7 ? "object-[50%_34%]" : i === 8 ? "object-[50%_24%]" : i === 9 ? "object-[50%_24%]" : i === 10 ? "object-[50%_26%]" : i === 11 ? "object-[50%_22%]" : "object-center",
    imageScale: i === 0 ? "scale-[1.16]" : i === 1 ? "scale-[1.18]" : i === 2 ? "scale-[1.08]" : i === 3 ? "scale-[1.10]" : i === 4 ? "scale-[1.14]" : i === 5 ? "scale-[1.10]" : i === 6 ? "scale-[1.18]" : i === 7 ? "scale-[1.08]" : i === 8 ? "scale-[1.08]" : i === 9 ? "scale-[1.12]" : i === 10 ? "scale-[1.12]" : i === 11 ? "scale-[1.08]" : "scale-100"
  }))

  return (
    <section id="hobbies" className="war-section war-section-dense">
      <div className="war-container">
        <div className="war-heading-row flex items-center gap-4 mb-12">
          <h2 className="war-heading text-sm tracking-wider font-medium whitespace-nowrap">{t("section.hobbies")}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <article key={hobby.title} className="war-panel war-project-look war-card">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 border border-primary flex items-center justify-center text-primary">
                  <hobby.icon className="w-4 h-4" />
                </span>
                <h3 className="war-card-title text-lg">{hobby.title}</h3>
              </div>
              <div className="war-separator" />
              <p className="war-card-text text-sm">{hobby.description}</p>
              {hobby.imageSrc ? (
                <div className="border border-border bg-black/25 p-1.5 mt-1 overflow-hidden rounded-sm">
                  <img
                    src={hobby.imageSrc}
                    alt={hobby.title}
                    className={`w-full h-40 sm:h-44 object-cover ${hobby.imagePosition} ${hobby.imageScale}`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="border border-border bg-black/15 px-2.5 mt-1 h-40 sm:h-44 flex items-center justify-center text-center rounded-sm">
                  <p className="text-[11px] tracking-[0.12em] text-muted-foreground">{t("hobbies.imageSlot")}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-auto">
                {hobby.tags.map((tag) => (
                  <span key={tag} className="war-chip px-2.5 py-1">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
