"use client"

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function TeamSection() {
  const { t } = useI18n()
  const team = [
    {
      name: "Jayne Yu",
      role: "CEO",
      expertise: t('team_m1_expertise'),
      description: t('team_m1_desc'),
      image: "JY",
      imageSrc: "/Jayne.jpg",
      color: "from-blue-500 to-purple-600",
      credentials: t('team_m1_cred'),
      linkedin: "https://linkedin.com/in/jayne-yu-synovaw/"
    },
    {
      name: "Joe Wang",
      role: "CTO", 
      expertise: t('team_m2_expertise'),
      description: t('team_m2_desc'),
      image: "JW",
      imageSrc: "/Joe.jpg",
      color: "from-purple-500 to-pink-600",
      credentials: t('team_m2_cred'),
      linkedin: "https://linkedin.com/in/wang1946may7/"
    },
    {
      name: "Evy Yang",
      role: "COO",
      expertise: t('team_m3_expertise'),
      description: t('team_m3_desc'),
      image: "EY", 
      imageSrc: "/Evy.jpg",
      color: "from-pink-500 to-red-600",
      credentials: t('team_m3_cred'),
      linkedin: "https://linkedin.com/in/evy-yang-086b24375"
    }
  ]

  return (
    <section id="team" className="relative z-10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6"
            style={{ filter: "url(#glass-effect)" }}
          >
            <span className="text-white/90 text-sm font-light">Meet Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Visionary</span> Leadership
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('team_subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{ filter: "url(#glass-effect)" }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center">
                {/* Avatar */}
                {member.imageSrc ? (
                  <div className={`w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border border-white/20`}>
                    <Image
                      src={member.imageSrc}
                      alt={`${member.name} photo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                    {member.image}
                  </div>
                )}
                
                <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                <div className="text-blue-400 text-sm font-medium mb-1">{member.role}</div>
                <div className="text-white/60 text-xs mb-2">{member.expertise}</div>
                <div className="text-cyan-300 text-xs mb-4 font-light italic">{member.credentials}</div>
                
                <p className="text-white/70 text-sm leading-relaxed">{member.description}</p>
                
                {/* Social links placeholder */}
                <div className="flex justify-center space-x-3 mt-6">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  )}
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}