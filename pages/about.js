import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import React, { useState } from "react";

const DegreeInfo = () => (
  <div className="panel-block my-3">
    <figure className='image is-64x64 is-rounded is-pulled-left'>
      <Image
        src="/waterloologo.png"
        layout="fill"
      />
    </figure>
    <div className="has-text-centered mx-auto is-pulled-right"> 
        <p className="is-size-6 has-text-weight-bold">Bachelor of Applied Science </p>
        <p className="is-size-6 has-text-weight-bold">Honours Computer Engineering, Co-op</p>
        <p className="is-size-6">University of Waterloo</p>
        <p className="is-size-7 mt-3">Expected Graduation: June 2025</p>
        <p className="is-size-7">Average: ---</p>
    </div>            
  </div>
)

const Courses = () => (
  <div className="panel-block my-3">
    Courses 
  </div>
)

const Awards = () => (
  <div className="panel-block my-3">
    Awards
  </div>
)

const Extracurr = () => (
  <div className="panel-block my-3">
    Extracurriculars
  </div>
)

const General = () => (
  <div className="panel-block my-3">
    General
  </div>
)

const Languages = () => (
  <div className="panel-block my-3">
    Languages
  </div>
)

const Libraries = () => (
  <div className="panel-block my-3">
    Libraries
  </div>
)

const Tools = () => (
  <div className="panel-block my-3">
    Tools
  </div>
)

export default function About() {
    const educationTabs = ['Degree', 'Courses', 'Awards', 'Extracurriculars'];
    const [activeEduTab, setEduTab] = React.useState('Degree');
    const skillsTabs = ['General', 'Languages', 'Libraries & Frameworks', 'Tools'];
    const [activeSkillsTab, setSkillsTab] = React.useState('General');

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
          <div className="columns" style={{minHeight: '300px'}}>
            <nav className="panel is-warning column is-half mx-2">
              <p className="panel-heading">
                Education
              </p>
              <p className="panel-tabs">
                {educationTabs.map((tab) => (
                  <a 
                    className={`${activeEduTab!=tab ? "" : "is-active has-text-weight-semibold"} px-4`}  
                    key={tab}
                    onClick={() => setEduTab(tab)}
                  >
                    {tab}
                  </a>
                ))}
              </p>

              { activeEduTab=='Degree' ? <DegreeInfo /> : null }
              { activeEduTab=='Courses' ? <Courses /> : null }
              { activeEduTab=='Awards' ? <Awards /> : null }
              { activeEduTab=='Extracurriculars' ? <Extracurr /> : null }
            </nav>
            <nav className="panel is-warning column is-half mx-2">
              <p className="panel-heading">
                Skills
              </p>
              <p className="panel-tabs">
                {skillsTabs.map((tab) => (
                  <a 
                    className={`${activeSkillsTab!=tab ? "" : "is-active has-text-weight-semibold"} px-4`}  
                    key={tab}
                    onClick={() => setSkillsTab(tab)}
                  >
                    {tab}
                  </a>
                ))}
              </p>

              { activeSkillsTab=='General' ? <General /> : null }
              { activeSkillsTab=='Languages' ? <Languages /> : null }
              { activeSkillsTab=='Libraries & Frameworks' ? <Libraries /> : null }
              { activeEduTab=='Tools' ? <Tools /> : null }

            </nav>
          </div>
        </main>
      </div>
    )
  }