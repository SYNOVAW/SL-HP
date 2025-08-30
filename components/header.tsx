"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import LanguageSwitcher from './language-switcher'

export default function Header() {
  const t = useTranslations()

  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10">
            <Image 
              src="/joe_logo.png" 
              alt="SAIL Lab Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
          </div>
          <div className="text-white">
            <div className="font-semibold text-lg">SAIL Lab</div>
            <div className="text-xs text-white/70 -mt-1">AI Financial Solutions</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="#services"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          {t('nav.services')}
        </a>
        <a
          href="#team"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          {t('nav.team')}
        </a>
        <a
          href="#products"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          {t('nav.products')}
        </a>
        <a
          href="#contact"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          {t('nav.contact')}
        </a>
        <LanguageSwitcher />
      </nav>

      {/* Contact Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          {t('nav.getStarted')}
        </button>
      </div>
    </header>
  )
}
