/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import Drawer from '../drawer';
import ActionButton from '../action-button';
import logo from '../../assets/jj-only-logo.png';
import styles from './header.module.css';

type Props = {
  className?: string;
};

type HeaderData = {
  id: number;
  path: string;
  active: boolean;
  name: string;
};

const defaultHeaderData: HeaderData[] = [
  {
    id: 0,
    path: '/home',
    active: false,
    name: 'Inicio',
  },
  {
    id: 1,
    path: '/contacto',
    active: false,
    name: 'Contacto',
  },
];

const Header: React.FC<Props> = ({ className = '' }) => {
  const location = useLocation();
  const { pathname: currentPathname } = location;
  const [headerData, setHeaderData] = useState<HeaderData[]>(defaultHeaderData);

  useEffect(() => {
    const newHeaderData = headerData.map(item => ({
      ...item,
      active: item.path === currentPathname,
    }));
    setHeaderData(newHeaderData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPathname]);

  // const [startScrolling, setStartScrolling] = useState(false);
  // const [logoImg, setLogoImg] = useState('');

  // useLayoutEffect(() => {
  //   if (logoWhite) {
  //     return () => {
  //       window.onscroll = null;
  //     };
  //   }

  //   window.onscroll = function () {
  //     if (window.pageYOffset === 0) {
  //       setStartScrolling(false);
  //       setLogoImg(logoWhiteColor);
  //     } else {
  //       setStartScrolling(true);
  //       setLogoImg(logo);
  //     }
  //   };

  //   return () => {
  //     window.onscroll = null;
  //   };
  // }, [logoWhite]);

  return (
    <header className={cn(styles.appHeader, className)}>
      <div className={styles.navButtonsContainer}>
        <div className={styles.navButtons}>
          <div
            className={cn(styles.navButton, {
              [styles.navButtonActive]: headerData[0].active,
            })}
          >
            <Link to="/home">Inicio</Link>
          </div>
          <Link to="/home" className={styles.logoImcContainer}>
            <img src={logo} alt="Bj logo" className={styles.logoImg} />
          </Link>
          <div
            className={cn(styles.navButton, {
              [styles.navButtonActive]: headerData[1].active,
            })}
          >
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
        <ActionButton classNameContrainer={styles.actionButtonSmall} />
        <Drawer className={styles.drawerButton} />
      </div>
      <ActionButton classNameContrainer={styles.actionButtonLarge} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
