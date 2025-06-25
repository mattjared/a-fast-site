import type React from "react"
import "./globals.css"
import { GeistMono } from "geist/font/mono"

import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.className} dark`}>
      <head>
      </head>
      <body className=" bg-black text-white min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
      <SpeedInsights />
    </html>
  )
}
