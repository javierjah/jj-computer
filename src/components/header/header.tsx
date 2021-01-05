import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Drawer from '../drawer';
import ActionButton from '../action-button';
import ScreenProgress from '../screen-progress';
import logo from '../../assets/jj-logo.png';
import logoWhiteColor from '../../assets/jj-logo-white.png';
import styles from './header.module.css';

type Props = {
  className?: string;
  logoWhite?: boolean;
  showProgress?: boolean;
};

const Header: React.FC<Props> = ({ className = '', logoWhite = false, showProgress = true }) => {
  const [startScrolling, setStartScrolling] = useState(false);
  const [logoImg, setLogoImg] = useState(logoWhiteColor);

  useLayoutEffect(() => {
    if (logoWhite) {
      return () => {
        window.onscroll = null;
      };
    }

    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setStartScrolling(false);
        setLogoImg(logoWhiteColor);
      } else {
        setStartScrolling(true);
        setLogoImg(logo);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [logoWhite]);

  return (
    <header
      className={cn(styles.appHeader, className, {
        [styles.sticky]: startScrolling,
      })}
    >
      <Link to="/home">
        <img src={logoImg} alt="jj logo" className={styles.logoImg} />
      </Link>
      {showProgress && <ScreenProgress className={styles.screenProgress} />}
      <ActionButton />
      <Drawer />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  logoWhite: PropTypes.bool,
  showProgress: PropTypes.bool,
};

export default Header;
