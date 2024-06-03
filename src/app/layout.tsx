import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"

const blackHawk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/BlackHawk/BlackHawk.eot",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BlackHawk/BlackHawk.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BlackHawk/BlackHawk.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BlackHawk/BlackHawk.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "100 900",
  variable: "--font-blackHawk",
})

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/CabinetGrotesk/Fonts/CabinetGrotesk-Variable.eot",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/CabinetGrotesk/Fonts/CabinetGrotesk-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/CabinetGrotesk/Fonts/CabinetGrotesk-Variable.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/CabinetGrotesk/Fonts/CabinetGrotesk-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "100 900",
  variable: "--font-cabinetGrotesk",
})

const gilroy = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Gilroy/font/Gilroy-Medium.eot",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Gilroy/font/Gilroy-Medium.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Gilroy/font/Gilroy-Medium.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Gilroy/font/Gilroy-Medium.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "100 900",
  variable: "--font-gilroy",
})

export const metadata: Metadata = {
  title: "One Wiki",
  description: "using Next.js, tailwindcss, framer-motion, and more",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          blackHawk.variable,
          cabinetGrotesk.variable,
          gilroy.variable,
          "min-h-screen"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
