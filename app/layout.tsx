import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "XERXESLIR EXIM - Your Trusted Partner in Global Trade",
  description:
    "XERXESLIR EXIM specializes in the import and export of agricultural machinery, food commodities, light machinery, and spare parts, providing seamless trade solutions worldwide.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
      <Toaster richColors position="top-right" />
    </html>
  )
}
