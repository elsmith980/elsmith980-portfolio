import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ella Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Hey, I'm Ella!" />
        <p className="description">
          Computer Engineering Co-op @ UWaterloo
          <br></br>
          Pleasure to meet ya :)
        </p>
      </main>

      <Footer />
    </div>
  )
}
