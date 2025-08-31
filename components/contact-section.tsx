"use client"

import { useI18n } from "@/lib/i18n"

export default function ContactSection() {
  const { t } = useI18n()
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t("contact_email_title"),
      content: "wasedajoe@gmail.com",
      description: t("contact_email_desc")
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: t("contact_call_title"),
      content: "+81 3-5985-6245",
      description: t("contact_call_desc")
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t("contact_visit_title"),
      content: "Daiya Gate 5F, Minami-Ikebukuro 1-16-15, Toshima City, Tokyo 171-0022, Japan",
      description: t("contact_visit_desc")
    }
  ]

  return (
    <section id="contact" className="relative z-10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6"
            style={{ filter: "url(#glass-effect)" }}
          >
            <span className="text-white/90 text-sm font-light">{t("contact_chip")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Ready</span> to Transform
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Partner with Sail Lab to revolutionize your financial operations with cutting-edge AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-8">{t("contact_intro")}</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  style={{ filter: "url(#glass-effect)" }}
                >
                  <div className="text-blue-400 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{info.title}</h4>
                    <div className="text-white/90 mb-1">{info.content}</div>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10" style={{ filter: "url(#glass-effect)" }}>
              <h4 className="text-white font-medium mb-2">{t("contact_hours")}</h4>
              <p className="text-white/70 text-sm">{t("contact_hours_week")}</p>
              <p className="text-white/70 text-sm">{t("contact_hours_247")}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            style={{ filter: "url(#glass-effect)" }}
          >
            <h3 className="text-2xl font-medium text-white mb-6">{t("contact_form_title")}</h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">{t("contact_first_name")}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">{t("contact_last_name")}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/70 text-sm mb-2">{t("contact_email")}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-white/70 text-sm mb-2">{t("contact_company")}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label className="block text-white/70 text-sm mb-2">{t("contact_interest")}</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-blue-400 focus:outline-none transition-colors">
                  <option value="" className="bg-black">{t("contact_interest_placeholder")}</option>
                  <option value="automation" className="bg-black">{t("contact_interest_automation")}</option>
                  <option value="risk" className="bg-black">{t("contact_interest_risk")}</option>
                  <option value="trading" className="bg-black">{t("contact_interest_trading")}</option>
                  <option value="custom" className="bg-black">{t("contact_interest_custom")}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/70 text-sm mb-2">{t("contact_message")}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder={t("contact_message_placeholder")}
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-white text-black font-medium transition-all duration-200 hover:bg-white/90"
              >
                {t("contact_send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}