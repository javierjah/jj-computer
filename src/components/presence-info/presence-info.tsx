import React from 'react';
import cn from 'classnames';

import logo from '../../assets/jj-logo.png';
import ActionButton from '../action-button';
import styles from './presence-info.module.css';

const PresenceInfo: React.FC = () => {
  return (
    <div className={styles.presenceRow}>
      <img src={logo} alt="jj logo white" className={styles.logo} />
      <div className={styles.infoBox}>
        <h2 className={cn(styles.titleText, styles.firstTitle)}>
          Más de 500 clientes en todo Melipilla que confian en nosotros.
        </h2>
        <h2 className={cn(styles.titleText, styles.secondTitle)}>
          Servicio técnico certificado hace mas de 15 años en Melipilla.
        </h2>
        <ActionButton />
      </div>
      <p className={styles.footerText}>Especialista en Computadores, Notebooks e Impresoras</p>
    </div>
  );
};

export default PresenceInfo;
