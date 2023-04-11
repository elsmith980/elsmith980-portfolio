import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
    return (
      <div className="page-container">
        <Head>
          <title>Ella - Work</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="container">
        <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
      </div>
        </main>
  
      </div>
    )
  }