export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import './globals.css'
import { Toaster } from 'sonner'
import { Providers } from './providers';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        <Providers>
        {children}
        <Toaster position="top-center" /> 
        </Providers>
      
      </body>
    </html>
  )
}
