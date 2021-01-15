import React from 'react';

import { ReactComponent as ItSupport } from '../../assets/it_support.svg';
import ActionButton from '../action-button';
import styles from './main-banner.module.css';

const PresenceInfo: React.FC = () => {
  return (
    <div className={styles.mainBannerRow}>
      <div className={styles.infoBox}>
        <div className={styles.textInfoContainer}>
          <h1 className={styles.title}>Servicio Técnico de Computación</h1>
          <h2 className={styles.subTitle}>
            Diagnóstico, Mantención y Reparación de Computadores, Notebooks e Impresoras.
          </h2>
        </div>
        <div>
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
