import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
    return (
      <div className="page-container">
        <Head>
          <title>Ella Smith</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
        <main>
          <Header title="About Me 😎" />
          <div className="is-size-5 block">
            <p>
              💯 Co-op student with a knack for problem solving, learning, and teamwork
            </p>
            <p>
              🌿 Passionate about sustainability and building inclusive tech that improves lives
            </p>
          </div>
          <div className="columns">
            <nav className="panel is-warning column is-half mx-2">
              <p className="panel-heading">
                Education
              </p>
            <p className="panel-tabs">
              <a className="is-active">Degree</a>
              <a>Courses</a>
              <a>Awards</a>
              <a>Extracurriculars</a>
            </p>
            <div className="panel-block has-text-left is-active">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              <div className="has-text-centered mx-auto"> 
                  <p className="is-size-6">Bachelor of Applied Science</p>
                  <p className="is-size-6">Computer Engineering Co-op</p>
                  <p className="is-size-6">University of Waterloo</p>
                  <p className="is-size-7 mt-3">Graduation: June 2025</p>
                  <p className="is-size-7">Average: ---</p>
              </div>            
            </div>
          </nav>
        <nav className="panel is-warning column is-half mx-2">
            <p className="panel-heading">
              Skills
            </p>
          <p className="panel-tabs px-2">
            <a className="is-active">General</a>
            <a>Languages</a>
            <a>Libraries & Frameworks</a>
            <a>Tools</a>
          </p>
          <div className="panel-block is-active">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
          </div>
        </nav>
        </div>
      </main>

      </div>
    )
  }