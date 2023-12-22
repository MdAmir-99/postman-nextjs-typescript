import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {MainContextProvider} from '@/context/MainContext'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Postman',
  description: 'API Testing tool like Postman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/assets/logo.png" type="image/png" />
      <body className={inter.className}>
        <Navbar />
        <MainContextProvider>
          {children}
        </MainContextProvider>
        {/* <Footer /> */}
        <Toaster />
      </body>
    </html>
  )
}
