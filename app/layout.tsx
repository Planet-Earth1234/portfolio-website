import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rahul Gupta | AI/ML Engineer & Full-Stack Developer',
  description: 'AI/ML architect specializing in computer vision, NLP, and production systems. Turning research into products that scale.',
  keywords: ['AI', 'Machine Learning', 'Full-Stack', 'Computer Vision', 'NLP', 'Deep Learning', 'React', 'Django'],
  authors: [{ name: 'Rahul Gupta' }],
  openGraph: {
    title: 'Rahul Gupta | AI/ML Engineer & Full-Stack Developer',
    description: 'Turning AI research into products that scale to millions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Gupta | AI/ML Engineer & Full-Stack Developer',
    description: 'Turning AI research into products that scale to millions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono">
        {children}
      </body>
    </html>
  )
}