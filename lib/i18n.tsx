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
    products_chip: "Our Products",
    products_cta_line: "Interested in custom solutions tailored to your specific needs?",
    contact_team: "Contact Our Team",
    requestAccess: "Request Access",
    getNotified: "Get Notified",
    status_available: "Available",
    status_beta: "Beta",
    // Product 1
    p1_name: "LLM Multi-Agent Analysis",
    p1_category: "Mid & Long-term Value Investment",
    p1_desc: "Revolutionary multi-LLM agent system providing bias-free investment analysis reports. Integrates news, earnings, institutional forecasts, and reinforcement learning through hierarchical agent collaboration.",
    p1_f1: "Bias suppression technology",
    p1_f2: "Multi-language reports (JP/EN/CN)",
    p1_f3: "Weekly automated delivery",
    p1_f4: "Proven track record (TOYOTA +12%)",
    p1_pricing: "$18/month Basic, $39/month Pro",
    // Product 2
    p2_name: "Neural Quantitative System",
    p2_category: "Short-term Trading (Stocks, Forex, Crypto)",
    p2_desc: "Advanced neural network-driven quantitative system using Offline RL + Heuristic integration and Oracle Imitation Learning (OIL). Enhances existing trading strategies without replacement.",
    p2_f1: "Offline RL + Heuristics",
    p2_f2: "Strategy refinement (not replacement)",
    p2_f3: "Custom model generation",
    p2_f4: "BackTest proven superior performance",
    p2_pricing: "$120-180k/year enterprise",
    // Product 3
    p3_name: "AI Trader Community",
    p3_category: "Education & Traffic Monetization",
    p3_desc: "Specialized community platform for 'AI × Trading' connecting traders, AI engineers, and investors. Features educational content, strategy sharing, and closed-loop revenue generation.",
    p3_f1: "Learning → Performance verification",
    p3_f2: "Creator revenue sharing (30-50%)",
    p3_f3: "Copy trading via partners",
    p3_f4: "Offline events & courses",
    p3_pricing: "$9/month Core, $15/month Pro",
    // Contact
    contact_chip: "Get In Touch",
    contact_title_ready: "Ready",
    contact_title_rest: "to Transform",
    contact_subtitle: "Partner with Sail Lab to revolutionize your financial operations with cutting-edge AI solutions.",
    contact_intro: "Let's Start a Conversation",
    contact_email_title: "Email Us",
    contact_email_desc: "Get in touch for partnerships and inquiries",
    contact_call_title: "Call Us",
    contact_call_desc: "Speak directly with our team",
    contact_visit_title: "Visit Us",
    contact_visit_desc: "Schedule a meeting at our headquarters",
    contact_hours: "Business Hours",
    contact_hours_week: "Monday - Friday: 9:00 AM - 6:00 PM JST",
    contact_hours_247: "Emergency Support: 24/7 for enterprise clients",
    contact_form_title: "Send Us a Message",
    contact_first_name: "First Name",
    contact_last_name: "Last Name",
    contact_email: "Email",
    contact_company: "Company",
    contact_interest: "Interest",
    contact_interest_placeholder: "Select a service",
    contact_interest_automation: "AI Financial Automation",
    contact_interest_risk: "Risk Management",
    contact_interest_trading: "Quantitative Trading",
    contact_interest_custom: "Custom Solution",
    contact_message: "Message",
    contact_message_placeholder: "Tell us about your project and how we can help...",
    contact_send: "Send Message",
    // Team
    team_chip: "Meet Our Team",
    team_title_visionary: "Visionary",
    team_title_rest: "Leadership",
    team_subtitle: "Our founding team combines decades of experience in AI research, financial technology, and quantitative analysis.",
    // Footer
    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    footer_company: "Sail Lab",
    footer_tagline: "AI Financial Solutions",
    footer_desc: "Sail Lab revolutionizes financial services through AI-driven automation, intelligent risk management, and cutting-edge quantitative trading solutions.",
    footer_rights: "© 2025 Sail Lab. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_cookies: "Cookies",
  },
  zh: {
    tagline: "AI驱动的金融创新",
    description:
      "Sail Lab 通过 AI 自动化、智能风控与量化交易解决方案，实时适应市场变化，重塑金融服务。",
    learnMore: "了解更多",
    contactUs: "联系我们",
    services_title_chip: "核心服务",
    products_chip: "我们的产品",
    products_cta_line: "对针对您特定需求的定制解决方案感兴趣？",
    contact_team: "联系我们的团队",
    requestAccess: "申请访问",
    getNotified: "获得通知",
    status_available: "可用",
    status_beta: "测试版",
    // Product 1
    p1_name: "LLM 多智能体分析",
    p1_category: "中长期价值投资",
    p1_desc: "多 LLM 智能体协同生成无偏见投资分析报告；通过分层智能体协作整合新闻、财报、机构预测与强化学习。",
    p1_f1: "偏见抑制技术",
    p1_f2: "多语言报告（日/英/中）",
    p1_f3: "每周自动化交付",
    p1_f4: "经验证的结果（丰田 +12%）",
    p1_pricing: "基础 $18/月，专业 $39/月",
    // Product 2
    p2_name: "神经量化系统",
    p2_category: "短期交易（股票/外汇/加密）",
    p2_desc: "采用离线强化学习 + 启发式集成与 OIL（Oracle 模仿学习），在不替换的前提下增强现有策略。",
    p2_f1: "离线 RL + 启发式",
    p2_f2: "策略精炼（非替换）",
    p2_f3: "定制模型生成",
    p2_f4: "回测验证优异表现",
    p2_pricing: "企业 $12-18 万/年",
    // Product 3
    p3_name: "AI 交易者社区",
    p3_category: "教育与流量变现",
    p3_desc: "面向“AI × 交易”的专业社区，连接交易员、AI 工程师与投资者，提供教育内容、策略分享与闭环收益。",
    p3_f1: "学习 → 业绩验证",
    p3_f2: "创作者分成（30-50%）",
    p3_f3: "合作方复制交易",
    p3_f4: "线下活动与课程",
    p3_pricing: "$9/月（核心），$15/月（专业）",
    // Contact
    contact_chip: "联系我们",
    contact_title_ready: "准备好",
    contact_title_rest: "开始转型",
    contact_subtitle: "与 Sail Lab 合作，以前沿 AI 方案重塑您的金融业务。",
    contact_intro: "让我们开始沟通",
    contact_email_title: "邮件联系",
    contact_email_desc: "合作与商务咨询欢迎联系",
    contact_call_title: "电话联系",
    contact_call_desc: "直接与我们的团队沟通",
    contact_visit_title: "来访我们",
    contact_visit_desc: "欢迎预约来总部面谈",
    contact_hours: "工作时间",
    contact_hours_week: "周一至周五：9:00 - 18:00（JST）",
    contact_hours_247: "企业客户紧急支持：7×24 小时",
    contact_form_title: "发送消息",
    contact_first_name: "名",
    contact_last_name: "姓",
    contact_email: "邮箱",
    contact_company: "公司",
    contact_interest: "意向",
    contact_interest_placeholder: "请选择服务",
    contact_interest_automation: "AI 金融自动化",
    contact_interest_risk: "风险管理",
    contact_interest_trading: "量化交易",
    contact_interest_custom: "定制方案",
    contact_message: "留言",
    contact_message_placeholder: "请介绍您的项目与诉求...",
    contact_send: "发送",
    // Team
    team_chip: "核心团队",
    team_title_visionary: "远见",
    team_title_rest: "领航",
    team_subtitle: "我们的核心团队融合 AI 研究、金融科技与量化分析的深厚积累。",
    // Footer
    footer_quick_links: "快速链接",
    footer_contact: "联系",
    footer_company: "Sail Lab",
    footer_tagline: "AI 金融解决方案",
    footer_desc: "Sail Lab 以 AI 自动化、智能风控与量化交易方案重塑金融服务。",
    footer_rights: "© 2025 Sail Lab. 保留所有权利。",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    footer_cookies: "Cookies",
  },
  ja: {
    tagline: "AI駆動の金融イノベーション",
    description:
      "Sail Lab は、AI 自動化・インテリジェントリスク管理・最先端の量的取引ソリューションにより、市場の変化にリアルタイムで適応し金融サービスを革新します。",
    learnMore: "詳細を見る",
    contactUs: "お問い合わせ",
    services_title_chip: "コアサービス",
    products_chip: "プロダクト",
    products_cta_line: "特定のニーズに合わせたカスタムソリューションにご興味はありますか？",
    contact_team: "チームにお問い合わせ",
    requestAccess: "アクセス申請",
    getNotified: "通知を受け取る",
    status_available: "利用可能",
    status_beta: "ベータ版",
    // Product 1
    p1_name: "LLM マルチエージェント分析",
    p1_category: "中長期バリュー投資",
    p1_desc: "複数 LLM エージェントの協調によりバイアスのない投資分析レポートを生成。ニュース・決算・機関予想・強化学習を階層連携で統合。",
    p1_f1: "バイアス抑制技術",
    p1_f2: "多言語レポート（日/英/中）",
    p1_f3: "週次の自動配信",
    p1_f4: "実証済み実績（トヨタ +12%）",
    p1_pricing: "$18/月（Basic）, $39/月（Pro）",
    // Product 2
    p2_name: "ニューラル量的システム",
    p2_category: "短期取引（株式・FX・暗号資産）",
    p2_desc: "Offline RL + ヒューリスティック統合と OIL（Oracle 模倣学習）により、既存戦略を置き換えずに強化。",
    p2_f1: "オフライン RL + ヒューリスティック",
    p2_f2: "戦略精錬（置換ではない）",
    p2_f3: "カスタムモデル生成",
    p2_f4: "バックテストで優位性を確認",
    p2_pricing: "企業 $120-180k/年",
    // Product 3
    p3_name: "AI トレーダーコミュニティ",
    p3_category: "教育とトラフィック収益化",
    p3_desc: "「AI × 取引」に特化したコミュニティで、トレーダー・AI エンジニア・投資家をつなぎ、教育・戦略共有・クローズドループ収益化を提供。",
    p3_f1: "学習 → パフォーマンス検証",
    p3_f2: "クリエイター収益分配（30-50%）",
    p3_f3: "パートナー経由のコピートレード",
    p3_f4: "オフラインイベントとコース",
    p3_pricing: "$9/月（Core）, $15/月（Pro）",
    // Contact
    contact_chip: "お問い合わせ",
    contact_title_ready: "準備は",
    contact_title_rest: "できていますか",
    contact_subtitle: "最先端の AI ソリューションで金融業務の革新を実現します。",
    contact_intro: "まずはご相談から",
    contact_email_title: "メール",
    contact_email_desc: "提携・お問い合わせはこちら",
    contact_call_title: "お電話",
    contact_call_desc: "チームへ直接ご連絡ください",
    contact_visit_title: "ご来社",
    contact_visit_desc: "本社でのご面談をご予約ください",
    contact_hours: "営業時間",
    contact_hours_week: "月〜金：9:00 - 18:00（JST）",
    contact_hours_247: "エンタープライズ緊急対応：24時間365日",
    contact_form_title: "メッセージを送る",
    contact_first_name: "名",
    contact_last_name: "姓",
    contact_email: "メール",
    contact_company: "会社名",
    contact_interest: "関心事項",
    contact_interest_placeholder: "サービスを選択",
    contact_interest_automation: "AI 金融オートメーション",
    contact_interest_risk: "リスク管理",
    contact_interest_trading: "クオンツ取引",
    contact_interest_custom: "カスタムソリューション",
    contact_message: "メッセージ",
    contact_message_placeholder: "プロジェクト内容やご要望をご記入ください...",
    contact_send: "送信",
    // Team
    team_chip: "チーム紹介",
    team_title_visionary: "ビジョナリー",
    team_title_rest: "リーダーシップ",
    team_subtitle: "創業チームは AI 研究・フィンテック・クオンツ分析で豊富な経験を有します。",
    // Footer
    footer_quick_links: "クイックリンク",
    footer_contact: "お問い合わせ",
    footer_company: "Sail Lab",
    footer_tagline: "AI 金融ソリューション",
    footer_desc: "Sail Lab は、AI 自動化・インテリジェントリスク管理・量的取引ソリューションで金融サービスを刷新します。",
    footer_rights: "© 2025 Sail Lab. 無断転載を禁ず。",
    footer_privacy: "プライバシー",
    footer_terms: "利用規約",
    footer_cookies: "クッキー",
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
