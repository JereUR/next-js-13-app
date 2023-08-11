import './globals.css'
import { Space_Grotesk } from '@next/font/google'
import Navigation from './components/Navigation'

const font = Space_Grotesk({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>App with Next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
