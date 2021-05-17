import React, { Fragment, useEffect } from 'react';

import PrescenseInfo from '../../components/presence-info';
import HowItWorks from '../../components/how-it-works';
import MainBanner from '../../components/main-banner';
import Header from '../../components/header';
import styles from './home.module.css';
import Services from '../../components/services';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={styles.home}>
        <MainBanner />
        <PrescenseInfo />
        <Services />
        <HowItWorks />
      </div>
    </Fragment>
  );
};

export default Home;
