import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Teh Jogja - Authentic Taste of Yogyakarta",
  description:
    "Discover the authentic taste of Yogyakarta with our premium tea collection. Made with traditional recipes and the finest ingredients.",
  keywords: "teh jogja, yogyakarta tea, traditional tea, indonesian tea, premium tea",
  authors: [{ name: "Teh Jogja" }],
  openGraph: {
    title: "Teh Jogja - Authentic Taste of Yogyakarta",
    description: "Discover the authentic taste of Yogyakarta with our premium tea collection.",
    type: "website",
    locale: "id_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
