import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "SAIL Lab - Agentic Investing OS | AI-Powered Multi-Agent Financial Intelligence",
    template: "%s | SAIL Lab"
  },
  description: "SAIL Lab's Agentic Investing OS delivers AI-powered investment intelligence through multi-LLM agents, neural quantitative systems, and AI trader communities. Founded by Sony AI researchers, serving retail, prosumers, and institutions with short-term signals and long-term conviction.",
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;
  
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}