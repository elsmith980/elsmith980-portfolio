import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import { useState } from 'react';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);

    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
  };

    return (
      <div className="page-container">
        <Head>
          <title>Ella - Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <Header title="Let's keep in touch!" />
          <h3>
            <a target="_blank" href='https://www.linkedin.com/in/ella-smith980/' style={{padding:'20px'}}>
              <Image  src="/LI-In-Bug.png"
                      width = "72.3"
                      height = "64"
                      objectFit='cover' />
            </a>
            <a target="_blank" href='https://github.com/elsmith980'>
              <Image  src="/GitHub-Mark-64px.png"
                        width = "64"
                        height = "64"
                        objectFit='cover' />            
            </a>
          </h3>

          <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
          </form>
          
        </main>        
  
      </div>
    )
  }

  
