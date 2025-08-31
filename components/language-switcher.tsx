"use client"

import { useI18n } from "@/lib/i18n"

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="inline-flex items-center gap-2 text-xs text-white/80">
      <button
        className={`px-2 py-1 rounded ${locale==='en' ? 'bg-white/20 text-white' : 'hover:bg-white/10'}`}
        onClick={() => setLocale('en')}
      >EN</button>
      <button
        className={`px-2 py-1 rounded ${locale==='zh' ? 'bg-white/20 text-white' : 'hover:bg白/10'}`}
        onClick={() => setLocale('zh')}
      >中文</button>
      <button
        className={`px-2 py-1 rounded ${locale==='ja' ? 'bg白/20 text白' : 'hover:bg-white/10'}`}
        onClick={() => setLocale('ja')}
      >日本語</button>
    </div>
  )
}