import React, { Fragment } from 'react';

import { ReactComponent as Laptop } from '../../assets/online_protection.svg';
import { ReactComponent as Printer } from '../../assets/printer.svg';
import PrescenseInfo from '../../components/presence-info';
import SerciceInfo from '../../components/service-info';
import HowItWorks from '../../components/how-it-works';
import MainBanner from '../../components/main-banner';
import Header from '../../components/header';
import styles from './home.module.css';

const Home: React.FC = () => {
  const laptopInfoText = 'Reparaciones, reemplazos de repuestos y venta notebooks nuevos y usados.';
  const printerText = 'Impresoras sistema continuo, Multifuncionales, Impresoras toner y portatiles.';

  return (
    <Fragment>
      <Header />
      <div className={styles.home}>
        <MainBanner />
        <PrescenseInfo />
        <SerciceInfo />
        <SerciceInfo
          title="Notebooks"
          text={laptopInfoText}
          imagePosition="left"
          image={Laptop}
          className={styles.middleServiceInfo}
        />
        <SerciceInfo title="Impresoras" text={printerText} image={Printer} />
        <HowItWorks />
      </div>
    </Fragment>
  );
};

export default Home;
