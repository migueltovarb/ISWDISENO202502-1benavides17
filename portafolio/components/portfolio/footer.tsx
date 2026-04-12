"use client"

import { useI18n } from "@/components/portfolio/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="war-topbar border-t border-border py-8 bg-black/25">
      <div className="war-container">
        <div className="war-panel p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {t("footer.title")}
          </p>
          <p>
            {t("footer.base")}
          </p>
        </div>
      </div>
    </footer>
  )
}
