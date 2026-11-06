import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>
          {/* Full-page dark background — glows radiate from the top corners behind the navbar */}
          <div
            className="pointer-events-none fixed inset-0 -z-10 bg-neutral-950"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_40%)]" />
          </div>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
