"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, MessageCircle, CircleCheckBig, TriangleAlert } from "lucide-react"
import { useI18n } from "@/components/portfolio/i18n"

export function Contact() {
  const { t } = useI18n()
  const contactEmail = "felipe.benavides01@gmail.com"
  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.label.email"),
      value: contactEmail,
      href: `mailto:${contactEmail}`
    },
    {
      icon: MessageCircle,
      label: t("contact.label.whatsapp"),
      value: "+57 3014958628",
      href: "https://wa.me/573014958628"
    },
    {
      icon: Github,
      label: t("contact.label.github"),
      value: "github.com/benavides17",
      href: "https://github.com/benavides17"
    },
    {
      icon: Linkedin,
      label: t("contact.label.linkedin"),
      value: "linkedin.com/in/felipebenavides",
      href: "https://linkedin.com/in/felipebenavides"
    }
  ]

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  })
  const [submitFeedback, setSubmitFeedback] = useState("")
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitFeedback("")
    setSubmitState("idle")

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          _subject: formData.asunto,
          message: formData.mensaje
        })
      })

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario")
      }

      setSubmitFeedback("Mensaje enviado correctamente.")
      setSubmitState("success")
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
      })
    } catch {
      setSubmitFeedback("No se pudo enviar. Intenta de nuevo en unos segundos.")
      setSubmitState("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitState !== "idle") {
      setSubmitState("idle")
      setSubmitFeedback("")
    }

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="war-section war-section-dense">
      <div className="war-container">
        {/* Section Title */}
        <div className="war-heading-row flex items-center gap-4 mb-12">
          <h2 className="war-heading text-sm tracking-wider font-medium whitespace-nowrap">{t("section.contact")}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div id="contacto-form" className="contact-shell contact-shell-red grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="contact-title">{t("contact.header")}</h3>
            <p className="contact-intro mb-7">{t("contact.introLong")}</p>

            <div className="contact-mini-grid mb-6">
              <div className="contact-mini-card">
                <p className="contact-mini-label">{t("contact.meta.1.label")}</p>
                <p className="contact-mini-value">{t("contact.meta.1.value")}</p>
              </div>
              <div className="contact-mini-card">
                <p className="contact-mini-label">{t("contact.meta.2.label")}</p>
                <p className="contact-mini-value">{t("contact.meta.2.value")}</p>
              </div>
              <div className="contact-mini-card">
                <p className="contact-mini-label">{t("contact.meta.3.label")}</p>
                <p className="contact-mini-value">{t("contact.meta.3.value")}</p>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? "#"}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  className="contact-item"
                >
                  <span className="contact-item-icon"><item.icon className="w-5 h-5" /></span>
                  <span>
                    <span className="contact-item-label">{item.label}</span>
                    <span className="contact-item-value">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="contact-field-box">
                  <label htmlFor="nombre" className="contact-form-label">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder={t("contact.form.name.placeholder")}
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="contact-input w-full"
                  />
                </div>
                <div className="contact-field-box">
                  <label htmlFor="email" className="contact-form-label">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("contact.form.email.placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input w-full"
                  />
                </div>
                <div className="contact-field-box">
                  <label htmlFor="asunto" className="contact-form-label">{t("contact.form.subject")}</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    placeholder={t("contact.form.subject.placeholder")}
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="contact-input w-full"
                  />
                </div>
                <div className="contact-field-box">
                  <label htmlFor="mensaje" className="contact-form-label">{t("contact.form.message")}</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder={t("contact.form.message.placeholder")}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-input w-full resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-send w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "[ ENVIANDO... ]" : t("contact.form.send")}
                </button>

                {submitFeedback && (
                  <div
                    className={`contact-feedback flex items-center gap-2 border px-3 py-2 text-sm tracking-[0.04em] ${
                      submitState === "success"
                        ? "contact-feedback-success border-emerald-400/60 bg-emerald-500/10 text-emerald-300"
                        : "contact-feedback-error border-red-400/60 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {submitState === "success" ? <CircleCheckBig className="w-4 h-4" /> : <TriangleAlert className="w-4 h-4" />}
                    <p>{submitFeedback}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
