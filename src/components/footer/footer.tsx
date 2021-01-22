import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cn from 'classnames';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';

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
            <ArrowForwardIosIcon className={styles.arrowIcon} />
          </div>
          <div className={styles.text}>Impresoras</div>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon className={styles.arrowIcon} />
          </div>
          <div className={styles.text}>Computadores</div>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon className={styles.arrowIcon} />
          </div>
          <div className={styles.text}>Nooteboks</div>
        </div>
      </div>
      <div className={styles.data}>
        <h3 className={styles.title}>Contacta con nosotros</h3>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <LocationOnIcon className={styles.contactIcon} />
          </div>
          <p className={styles.addresse}>Av. Pablo Neruda #035. Villa España, Melipilla.</p>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <SmartphoneIcon className={styles.contactIcon} />
          </div>
          <a href="tel:+56978477250" className={styles.text}>
            Teléfono : +569 7847 7250
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <EmailIcon className={styles.contactIcon} />
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
