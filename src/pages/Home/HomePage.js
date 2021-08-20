import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Header from '../../common/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Services from './components/Services';

function HomePage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            'linear-gradient(90deg,rgba(0,176,116,.1) 0,rgba(88,88,0,.05))',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Header />
        <Main />
      </div>
      <Divider />
      <Services />
      <Footer />
    </>
  );
}

export default HomePage;
