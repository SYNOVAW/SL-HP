"use client"

export default function ProductsSection() {
  const products = [
    {
      name: "LLM Multi-Agent Analysis",
      category: "Mid & Long-term Value Investment",
      description: "Revolutionary multi-LLM agent system providing bias-free investment analysis reports. Integrates news, earnings, institutional forecasts, and reinforcement learning through hierarchical agent collaboration.",
      features: ["Bias suppression technology", "Multi-language reports (JP/EN/CN)", "Weekly automated delivery", "Proven track record (TOYOTA +12%)"],
      status: "Available",
      statusColor: "text-green-400",
      pricing: "$18/month Basic, $39/month Pro"
    },
    {
      name: "Neural Quantitative System", 
      category: "Short-term Trading (Stocks, Forex, Crypto)",
      description: "Advanced neural network-driven quantitative system using Offline RL + Heuristic integration and Oracle Imitation Learning (OIL). Enhances existing trading strategies without replacement.",
      features: ["Offline RL + Heuristics", "Strategy refinement (not replacement)", "Custom model generation", "BackTest proven superior performance"],
      status: "Available",
      statusColor: "text-green-400",
      pricing: "$120-180k/year enterprise"
    },
    {
      name: "AI Trader Community",
      category: "Education & Traffic Monetization", 
      description: "Specialized community platform for 'AI × Trading' connecting traders, AI engineers, and investors. Features educational content, strategy sharing, and closed-loop revenue generation.",
      features: ["Learning → Performance verification", "Creator revenue sharing (30-50%)", "Copy trading via partners", "Offline events & courses"],
      status: "Beta",
      statusColor: "text-yellow-400",
      pricing: "$9/month Core, $15/month Pro"
    }
  ]

  return (
    <section id="products" className="relative z-10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6"
            style={{ filter: "url(#glass-effect)" }}
          >
            <span className="text-white/90 text-sm font-light">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Innovative</span> Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover our suite of AI-powered financial products designed to transform your business operations.
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
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{product.name}</h3>
                    <div className="text-white/60 text-sm">{product.category}</div>
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full bg-white/10 ${product.statusColor}`}>
                    {product.status}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                {/* Pricing */}
                <div className="mb-4">
                  <div className="text-cyan-300 text-xs font-medium">{product.pricing}</div>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-white/60 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Action Button */}
                <button className="w-full py-2 px-4 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors border border-white/20">
                  {product.status === "Available" ? "Learn More" : 
                   product.status === "Beta" ? "Request Access" : "Get Notified"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">
            Interested in custom solutions tailored to your specific needs?
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  )
}