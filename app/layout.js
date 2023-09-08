import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/app/components/Nav'
import Header from '@/app/components/Header'
import Audio from '@/app/components/Audio'
import Providers from '@/app/store/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Next App',
  description: 'Music Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Nav />
          {children}
          <Audio />
        </Providers>
      </body>
    </html>
  )
}
