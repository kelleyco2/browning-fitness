import '../styles/globals.css'
import type { AppProps } from 'next/app'
// TODO: Update font
import { Work_Sans } from '@next/font/google'

const work_sans = Work_Sans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${work_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
