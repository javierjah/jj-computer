import React from 'react';

import { ReactComponent as ItSupport } from '../../assets/it_support.svg';
import ActionButton from '../action-button';
import styles from './main-banner.module.css';

const PresenceInfo: React.FC = () => {
  return (
    <div className={styles.mainBannerRow}>
      <div className={styles.infoBox}>
        <h1 className={styles.title}>Servicio Técnico de Computación e Impresoras</h1>
        <div>
          <h2 className={styles.subTitle}>Especialista en Computadores, Notebooks e Impresoras</h2>
          <ActionButton className={styles.actionButton} />
        </div>
      </div>
      <div className={styles.imgBox}>
        <ItSupport className={styles.mainIcon} />
      </div>
    </div>
  );
};

export default PresenceInfo;
