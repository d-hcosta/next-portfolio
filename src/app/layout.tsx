import { Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diego Portfolio!",
  description:
    "Personal website created in Next.js, Tailwind with Framer-Motion and Typescript, the purpose is to be a professional portfolio.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
