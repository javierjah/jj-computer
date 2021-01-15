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
        <h1 className={cn(styles.titleText)}>Servicio técnico certificado hace mas de 30 años en Melipilla.</h1>
        <h3 className={cn(styles.titleText, styles.secondTitle)}>
          Venta de computadores e impresoras de tinta y láser, nuevos y usados con garantía.
        </h3>
        <h3 className={cn(styles.titleText)}>Especialistas en suministros de computación.</h3>
        <h3 className={cn(styles.titleText, styles.lastTitle)}>
          Toner para impresoras, memorias, discos duros normales y sólidos, baterías, teclados, kit de limpieza,
          cargadores, y muchos más.
        </h3>
        <ActionButton className={styles.actionButton} />
      </div>
    </div>
  );
};

export default PresenceInfo;
