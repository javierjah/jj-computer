import React, { Fragment, useEffect } from 'react';

import { ReactComponent as Laptop } from '../../assets/note-working.svg';
import { ReactComponent as Printer } from '../../assets/printer2.svg';
import PrescenseInfo from '../../components/presence-info';
import SerciceInfo from '../../components/service-info';
import HowItWorks from '../../components/how-it-works';
import MainBanner from '../../components/main-banner';
import Header from '../../components/header';
import styles from './home.module.css';
import ActionButton from '../../components/action-button';

const Home: React.FC = () => {
  const laptopInfoText =
    'Reparaciones, reemplazos de repuestos y venta notebooks nuevos y usados. Configuración de impresoras y dispositivos de hardware y otros periféricos';
  const printerText =
    'Venta de impresoras de tinta y láser, sistema continuo, multifuncionales y portátiles. Asistencia a los usuarios cuando se presentan problemas de software y hardware.';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={styles.home}>
        <MainBanner />
        <PrescenseInfo />
        <div className={styles.servicesContainer}>
          <h1 className={styles.servicesTitle}>Servicios</h1>
          <SerciceInfo
            className={styles.middleServiceInfo}
            title="Impresoras"
            text={printerText}
            image={Printer}
            imgClassName={styles.printIcon}
          />
          <SerciceInfo imagePosition="left" className={styles.middleServiceInfo} />
          <SerciceInfo
            className={styles.middleServiceInfo}
            title="Notebooks"
            text={laptopInfoText}
            image={Laptop}
            imgClassName={styles.printIcon}
          />
          <ActionButton />
        </div>
        <HowItWorks />
      </div>
    </Fragment>
  );
};

export default Home;
