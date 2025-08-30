"use client"

export default function ServicesSection() {
  const services = [
    {
      title: "Multi-Agent LLM Analysis",
      description: "Revolutionary investment analysis through collaborative AI agents that provide deep market insights and comprehensive reporting capabilities.",
      features: ["Multi-agent collaboration", "Deep market research", "Investment report generation"]
    },
    {
      title: "Neural Network–Driven Quantitative Trading",
      description: "Advanced neural network-driven quantitative systems that continuously learn and adapt to market conditions for optimized trading performance.",
      features: ["Adaptive neural networks", "Real-time optimization", "Pattern recognition"]
    },
    {
      title: "AI Trader Community",
      description: "Intelligent platform connecting AI traders with collaborative tools, strategy sharing, and community-driven performance enhancement.",
      features: ["Strategy marketplace", "Community insights", "Performance analytics"]
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
            <span className="text-white/90 text-sm font-light">Our Core Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Revolutionary</span> AI Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            SaiL Lab provides comprehensive AI-powered solutions that transform traditional financial operations into intelligent, adaptive systems.
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
                <div className="text-4xl mb-4">{service.icon}</div>
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