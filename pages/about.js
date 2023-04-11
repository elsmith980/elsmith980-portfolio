import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import React, { useState } from "react";

const DegreeInfo = () => (
  <div className="panel-block my-4">
    <figure className='image is-64x64 is-rounded ml-auto mx-2'>
      <Image
        width="64px"
        height="64px"
        src="/waterloologo.png"
        objectFit = "cover"
      />
    </figure>
    <div className="has-text-left mr-auto pl-4"> 
        <p className="is-size-6 has-text-weight-bold">Bachelor of Applied Science </p>
        <p className="is-size-6 has-text-weight-bold">Honours Computer Engineering, Co-op</p>
        <p className="is-size-6">University of Waterloo</p>
        <p className="is-size-7 mt-3">Expected Graduation: June 2025</p>
        <p className="is-size-7">Average: ---</p>
    </div>            
  </div>
)

const Courses = () => (
  <div className="panel-block mb-3">
    <table class="table has-text-left is-fullwidth is-narrow is-size-7" style={{backgroundColor: 'transparent', width: '100%', tableLayout:'fixed', height: 'fit-content'}}>
      <thead>
        <tr>
        <th> 
          Code
        </th>
        <th style={{width: '25%'}}>
          Title
        </th>
        <th style={{width: '60%'}}>
          Content
        </th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            ECE 108, 208
          </td>
          <td>
            Discrete Math and Logic I, II
          </td>
          <td>
            <ul>
              <li>
              Predicate, temporal, and relational logic
              </li>
              <li>
              Set, proof, model and graph theory
              </li>
              <li>
                Syntax and semantics, combinatorics
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            ECE 224
          </td>
          <td>
          Embedded Microprocessor Systems
          </td>
          <td>
            <ul>
              <li>
                Microprocessor system architecture
              </li>
              <li>
                Bus systems, memory systems, peripherals
              </li>
              <li>
                Parallel, serial, and analog interfaces
              </li>
              <li>
                Data transfer, synchronization, error detection/correction
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            ECE 250
          </td>
          <td>
            Algorithms and Data Structures
          </td>
          <td>
            <ul>
              <li>
                Data structures, abstract data types
              </li>
              <li>
                Recursive algorithms, algorithm analysis, sorting and searching         
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            ECE 252
          </td>
          <td>
            Systems Programming and Concurrency
          </td>
          <td>
            <ul>
              <li>
                Processes and threads, system calls
              </li>
              <li>
                Concurrency (semaphore, mutex, monitors, and barrier synchronization)
              </li>
              <li>
                User-level memory management
              </li>
              <li>
                Deadlock detection and recovery, file systems
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    </div>  
)

const Awards = () => (
  <div className="panel-block my-4">
    Awards
  </div>
)

const Extracurr = () => (
  <div className="panel-block my-4">
    Extracurriculars
  </div>
)

const General = () => (
  <div className="panel-block my-4">
    General
  </div>
)

const Languages = () => (
  <div className="panel-block my-4">
    Languages
  </div>
)

const Libraries = () => (
  <div className="panel-block my-4">
    Libraries
  </div>
)

const Tools = () => (
  <div className="panel-block my-4">
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
          <div className="is-size-6 block">
            <p>
              💯 Co-op student with a knack for problem solving, learning, and teamwork
            </p>
            <p>
              🌿 Passionate about sustainability and building inclusive tech that improves lives
            </p>
          </div>
          <div className="columns is-centered is-tablet" >
            <div className="column is-half-tablet">
            <nav className="panel is-warning scroll-card ">
              <p className="panel-heading">
                Education
              </p>
              <p className="panel-tabs">
                {educationTabs.map((tab) => (
                  <a 
                    className={`${activeEduTab!=tab ? "" : "is-active has-text-weight-semibold px-2"} is-size-7-mobile px-2`}  
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
            </div>
            <div className='column is-half-tablet'>
            <nav className="panel is-warning ">
              <p className="panel-heading">
                Skills
              </p>
              <p className="panel-tabs">
                {skillsTabs.map((tab) => (
                  <a 
                    className={`${activeSkillsTab!=tab ? "" : "is-active has-text-weight-semibold px-2"} is-size-7-mobile px-2`}  
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
          </div>
        </main>
      </div>
    )
  }