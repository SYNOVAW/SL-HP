"use client"

import { useI18n } from "@/lib/i18n"

export default function ServicesSection() {
  const { t } = useI18n()

  const services = [
    {
      title: t("svc1_title"),
      description: t("svc1_desc"),
      features: [t("svc1_f1"), t("svc1_f2"), t("svc1_f3")]
    },
    {
      title: t("svc2_title"),
      description: t("svc2_desc"),
      features: [t("svc2_f1"), t("svc2_f2"), t("svc2_f3")]
    },
    {
      title: t("svc3_title"),
      description: t("svc3_desc"),
      features: [t("svc3_f1"), t("svc3_f2"), t("svc3_f3")]
    }
  ]

  return (
    <section id="services" className="relative z-10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6"
            style={{ filter: "url(#glass-effect)" }}
          >
            <span className="text-white/90 text-sm font-light">{t('services_title_chip')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Revolutionary</span> AI Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{ filter: "url(#glass-effect)" }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/60 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}