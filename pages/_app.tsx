import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SectionHeader from '../components/SectionHeader'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full px-[10%] h-full '>
      <SectionHeader />
      <Component {...pageProps} />
    </div>
  )
}
