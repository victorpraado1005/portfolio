import './globals.scss'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '500']
})

export const metadata = {
  title: 'Victor Prado',
  description: 'Victor Prado - Desenvolvedor Front-End',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  )
}
