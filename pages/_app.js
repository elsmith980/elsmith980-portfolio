import '@styles/globals.css'
import Menu from '@components/Menu';

function Application({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default Application
