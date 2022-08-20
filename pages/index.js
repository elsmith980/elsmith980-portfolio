import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ella Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{borderRadius: '300px', overflow: 'hidden', width: '300px', height: '300px'}}>
          <Image
            src="/headshot.jpg"
            width = "300"
            height = "325"
            objectFit = "cover"
          />
        </div>
        <Header title="Hey, I'm Ella!" />
        <h3>
          Computer Engineering Co-op @ UWaterloo
        </h3>
        <body>
          Just a gal who's really excited about problem solving, coding, and data (among some other things) 
        </body>
      </main>

      <Footer />
    </div>
  )
}
