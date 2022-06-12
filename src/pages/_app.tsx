import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

export default ({ Component, pageProps }: AppProps) => {
  return(
    <>
      <NextNProgress
        color='#00aaff'
      />
      <Component {...pageProps} />
    </>
  )
}
