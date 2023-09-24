import Container from '@/components/Container'
import './globals.css'
import type { Metadata } from 'next'
import { Albert_Sans, DM_Sans, Inter, Oswald, Poppins } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ['latin'] })
const albert_sans = Albert_Sans({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })
const dm_sans = DM_Sans({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })

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
      <body className={`${poppins.className} text-gray-800 flex flex-col h-screen`}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
