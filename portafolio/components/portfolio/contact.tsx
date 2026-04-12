"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"
import { useI18n } from "@/components/portfolio/i18n"

export function Contact() {
  const { t } = useI18n()
  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.label.email"),
      value: "felipe.benavides01@gmail.com",
      href: "mailto:felipe.benavides01@gmail.com"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                  className="contact-send w-full"
                >
                  {t("contact.form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
