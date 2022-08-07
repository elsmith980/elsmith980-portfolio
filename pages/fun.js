import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
    return (
      <div className="container">
        <Head>
          <title>Ella Smith</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <Header title="Fun" />
          <p className="description">
            fun
          </p>
        </main>
  
        <Footer />
      </div>
    )
  }