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
          <div class="level mx-auto has-text-centered is-mobile">
            <figure class="image m-2 is-48x48">
              <a target="_blank" href='https://www.linkedin.com/in/ella-smith980/'>
                <Image  src="/linkedinlogo.png"
                        layout="fill"
                        objectFit='cover' />
              </a>
            </figure>
            <figure class="image mx-auto m-2 is-48x48">
              <a target="_blank" href='https://github.com/elsmith980'>
                <Image  src="/GitHub-Mark-64px.png"
                          layout="fill"
                          objectFit='cover' />            
              </a>
            </figure>
          </div>

          <form style={{alignSelf: 'center'}} onSubmit={handleSubmit}>
            <label class="label" htmlFor='form-data'>Fill out this form to send me a message :)</label>
            <div class="field">
              <div class="control" id="form-data">
                <input
                  class="input"
                  id="name"
                  placeholder="Name"
                  type="text"
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
            <div class="field">
              <div class="control" id="form-data">
                <input
                  class="input"
                  id="email"
                  placeholder="Email"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="field">
              <div class="control" id="form-data">
                <textarea
                  class="textarea has-fixed-size"
                  id="message"
                  placeholder="Message"
                  type="text"
                  rows="6"
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
            </div>
            <button class="button is-success is-rounded is-fullwidth" type="submit">Send</button>
          </form>
        </main>        
  
      </div>
    )
  }

  
