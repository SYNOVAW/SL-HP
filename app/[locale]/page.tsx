"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import ProductsSection from "@/components/products-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function SAILLabWebsite() {
  return (
    <ShaderBackground>
      {/* Hero Section with fixed positioning */}
      <div className="relative min-h-screen">
        <Header />
        <HeroContent />
      </div>
      
      {/* Scrollable Content Sections */}
      <ServicesSection />
      <TeamSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </ShaderBackground>
  )
}