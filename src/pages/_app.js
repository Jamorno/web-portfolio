import '@/styles/globals.css'
import { Lato } from 'next/font/google'
import Head from 'next/head'

const lato = Lato({ weight: ["400", "700", "900"], subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Head>
        <title>O website</title>
      </Head>
      
      <Component {...pageProps} />
    </main>
  )
}
