import { Poppins } from 'next/font/google'
import 'aos/dist/aos.css'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'ArchiSync Studio',
  description: 'ArchiSync Studio Redefining Architectural Excellence',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
