import Container from '@/components/Container'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "700", "800"] })

export const metadata: Metadata = {
  title: 'Praisify',
  description: 'Find your next praise jam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
