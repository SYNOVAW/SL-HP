"use client"

export default function DashboardEmbed() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-full">
        <iframe
          src="https://www.remspiral.com"
          title="Financial Dashboard"
          className="w-full h-full border-0"
          allow="clipboard-read; clipboard-write; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  )
}
