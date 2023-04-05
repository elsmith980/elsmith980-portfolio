import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Ella Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{marginBottom: '10%', borderRadius: '300px', overflow: 'hidden', width: '300px', height: '300px', pointerEvents:'none'}}>
          <Image
            src="/headshot.jpg"
            width = "300"
            height = "325"
            objectFit = "cover"
          />
        </div>
        <div class="title">Nice to meet you, I'm Ella!</div>
        <h3> Computer Engineering Co-op @ UWaterloo </h3>
        <p>Really excited about creative problem solving, coding, and data (among some <a href='/fun' style={{color: '#de5499'}}>other things</a>) </p>
      </main>
    </div>
  )
}
