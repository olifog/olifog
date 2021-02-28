import '../styles/globals.css';
import Head from 'next/head';
import SectionContainer from '../components/SectionContainer';
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  return (
    <div id="main" className="h-screen">
      <div id="stars3"></div>
      
      <div className="antialiased">
        <Head>
          <title>Oliver Fogelin</title>
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
        <SectionContainer>
          <Header />
        </SectionContainer>
        <SectionContainer>
          <main>
            <Component {...pageProps} />
          </main>
        </SectionContainer>
      </div>

      <div id="stars"></div>
      <div id="stars2"></div>
    </div>
  )
}