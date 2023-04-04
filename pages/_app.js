import '@styles/globals.css'
import 'bulma/css/bulma.min.css';
import Menu from '@components/Menu';
import Footer from '@components/Footer';

function Application({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Application
