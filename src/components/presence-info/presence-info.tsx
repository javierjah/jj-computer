import React from 'react';
import cn from 'classnames';

import logo from '../../assets/jj-logo.png';
import ActionButton from '../action-button';
import styles from './presence-info.module.css';

const PresenceInfo: React.FC = () => {
  return (
    <div className={styles.presenceRow}>
      <img src={logo} alt="BJ logo white" className={styles.logo} />
      <div className={styles.infoBox}>
        <p className={cn(styles.text)}>Servicio técnico certificado hace mas de 30 años en Melipilla.</p>
        <p className={cn(styles.text)}>
          Venta de computadores e impresoras de tinta y láser, nuevos y usados con garantía.
        </p>
        <p className={cn(styles.text)}>Especialistas en suministros de computación.</p>
        <p className={cn(styles.text, styles.boldText)}>
          Toner para impresoras, memorias, discos duros normales y sólidos, baterías, teclados, kit de limpieza,
          cargadores, y muchos más.
        </p>
        <ActionButton className={styles.actionButton} />
      </div>
    </div>
  );
};

export default PresenceInfo;
