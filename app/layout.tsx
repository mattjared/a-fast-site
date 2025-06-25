import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { GeistMono } from "geist/font/mono"

// import { Roboto_Mono } from "next/font/google"
// // const font = Roboto_Mono({
// //   subsets: ['latin'],
// //   weight: ['100', '200', '300', '400', '500', '600', '700'],
// // })

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
      <body className=" bg-black text-white min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
      <SpeedInsights />
    </html>
  )
}
