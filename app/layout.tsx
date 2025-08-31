import './globals.css'
import { I18nProvider } from '@/lib/i18n'

export const metadata = {
  title: 'SAIL Lab - Intelligent Financial Solutions',
  description: 'AI-powered financial innovation and trading solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}