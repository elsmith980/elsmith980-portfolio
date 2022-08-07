import '@styles/globals.css'
import Sidebar from '@components/Sidebar.js';

function Application({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default Application
