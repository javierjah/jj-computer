import React, { Fragment } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Cancel from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import cn from 'classnames';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import logo from '../../assets/jj-logo.png';
import styles from './marker.module.css';

const NOOP = null;
const NOOP_FUNC = () => null;

type MarkerProps = {
  lat: number;
  lng: number;
  children?: JSX.Element;
  showInfoWindow?: boolean;
  onCloseInfoWindow?(): void;
  infoWindowContent?: JSX.Element;
  icon?: JSX.Element;
};

const Marker: React.FC<MarkerProps> = ({
  children,
  showInfoWindow = false,
  onCloseInfoWindow = NOOP,
  infoWindowContent = undefined,
  icon = undefined,
}) => (
  <div
    className={cn(styles.markerContainer, {
      [styles.clickable]: onCloseInfoWindow,
    })}
  >
    {showInfoWindow && (
      <div className={styles.infoWindowContainer}>
        <div className={styles.arrow} />
        {infoWindowContent && infoWindowContent}
        {!infoWindowContent && (
          <div className={styles.infoWindow}>
            <IconButton className={styles.closeIcon} onClick={onCloseInfoWindow || NOOP_FUNC} data-qa="cancel button">
              <Cancel fontSize="small" />
            </IconButton>
            <img src={logo} alt="BJ logo" className={styles.logo} />
            <p>Av. Pablo Neruda #035. Villa España, Melipilla.</p>
          </div>
        )}
      </div>
    )}
    {children || icon ? icon : <LocationOnIcon className={styles.locationIcon} />}
  </div>
);

export default Marker;
