import StyledComponentsRegistry from '../lib/registry'
import { Quicksand } from 'next/font/google'
import './globalstyle.css'


const  quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  icons: [{ rel: 'icon', type: 'image/ico', url: '/alpine-logo.jpeg' }],
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}