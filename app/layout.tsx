'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navbar from '@/components/navbar'

const metadata: Metadata = {
  metadataBase: new URL('https://postgres-prisma.vercel.app'),
  title: 'Vercel Postgres Demo with Prisma',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="min-h-full">
          <Navbar />
          {children}
      </div>
      </body>
    </html>
  )
}
