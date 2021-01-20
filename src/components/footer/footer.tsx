import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cn from 'classnames';

import styles from './footer.module.css';
import logo from '../../assets/jj-logo-white.png';

const Footer: React.FC = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerLogo}>
        <img src={logo} alt="BJ logo" className={styles.logo} />
      </div>
      <div className={cn(styles.data, styles.containerServices)}>
        <h3 className={styles.title}>Servicios</h3>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <div className={styles.text}>Impresoras</div>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <div className={styles.text}>Computadores</div>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <div className={styles.text}>Nooteboks</div>
        </div>
      </div>
      <div className={styles.data}>
        <h3 className={styles.title}>Contacta con nosotros</h3>
        <p className={styles.addresse}>Av. Pablo Neruda #035. Villa España, Melipilla.</p>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="tel:+56978477250" className={styles.text}>
            Teléfono : +569 7847 7250
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="mailto: gmomel@gmail.com" className={styles.text}>
            E-mail : gmomel@gmail.com
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="https://storyset.com/work" target="_blank" rel="noreferrer">
            Illustraciones por Freepik Storyset
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
