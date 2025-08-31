"use client"

import React from "react"

type Messages = Record<string, string>

type Locale = "en" | "zh" | "ja"

const defaultMessages: Record<Locale, Messages> = {
  en: {
    tagline: "AI-Powered Financial Innovation",
    description:
      "Sail Lab revolutionizes financial services through AI-driven automation, intelligent risk management, and cutting-edge quantitative trading solutions that adapt to market dynamics in real-time.",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    services_title_chip: "Our Core Services",
  },
  zh: {
    tagline: "AI驱动的金融创新",
    description:
      "SAIL 实验室通过 AI 自动化、智能风控与量化交易解决方案，实时适应市场变化，重塑金融服务。",
    learnMore: "了解更多",
    contactUs: "联系我们",
    services_title_chip: "核心服务",
  },
  ja: {
    tagline: "AI駆動の金融イノベーション",
    description:
      "SAIL Lab は、AI 自動化・インテリジェントリスク管理・最先端の量的取引ソリューションにより、市場の変化にリアルタイムで適応し金融サービスを革新します。",
    learnMore: "詳しく見る",
    contactUs: "お問い合わせ",
    services_title_chip: "コアサービス",
  },
}

export const I18nContext = React.createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}>({
  locale: "en",
  setLocale: () => {},
  t: (k) => defaultMessages.en[k] ?? k,
})

export function I18nProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocale] = React.useState<Locale>(initialLocale)
  const t = React.useCallback((key: string) => {
    const dict = defaultMessages[locale] ?? defaultMessages.en
    return dict[key] ?? key
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = React.useContext(I18nContext)
  return ctx
}
