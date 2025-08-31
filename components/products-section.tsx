"use client"

import { useI18n } from "@/lib/i18n"

export default function ProductsSection() {
  const { t } = useI18n()
  const products = [
    {
      name: t('p1_name'),
      category: t('p1_category'),
      description: t('p1_desc'),
      features: [t('p1_f1'), t('p1_f2'), t('p1_f3'), t('p1_f4')],
      status: t('status_available'),
      statusKey: 'Available',
      statusColor: "text-green-400",
      pricing: t('p1_pricing')
    },
    {
      name: t('p2_name'),
      category: t('p2_category'),
      description: t('p2_desc'),
      features: [t('p2_f1'), t('p2_f2'), t('p2_f3'), t('p2_f4')],
      status: t('status_beta'),
      statusKey: 'Beta',
      statusColor: "text-yellow-400",
      pricing: t('p2_pricing')
    },
    {
      name: t('p3_name'),
      category: t('p3_category'),
      description: t('p3_desc'),
      features: [t('p3_f1'), t('p3_f2'), t('p3_f3'), t('p3_f4')],
      status: t('status_beta'),
      statusKey: 'Beta',
      statusColor: "text-yellow-400",
      pricing: t('p3_pricing')
    }
  ]

  const actionLabel = (statusKey: string) => {
    if (statusKey === "Available") return t('learnMore')
    if (statusKey === "Beta") return t('requestAccess')
    return t('getNotified')
  }

  return (
    <section id="products" className="relative z-10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6"
            style={{ filter: "url(#glass-effect)" }}
          >
            <span className="text-white/90 text-sm font-light">{t('products_chip')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Innovative</span> Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('products_subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{ filter: "url(#glass-effect)" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{product.name}</h3>
                    <div className="text-white/60 text-sm">{product.category}</div>
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full bg-white/10 ${product.statusColor}`}>
                    {product.status}
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="mb-4">
                  <div className="text-cyan-300 text-xs font-medium">{product.pricing}</div>
                </div>
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-white/60 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 px-4 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors border border-white/20">
                  {actionLabel(product.statusKey)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">
            {t('products_cta_line')}
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90">
            {t('contact_team')}
          </button>
        </div>
      </div>
    </section>
  )
}