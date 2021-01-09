import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import styles from './marker.module.css';

type MarkerProps = { lat: number; lng: number; children?: JSX.Element };

const Marker: React.FC<MarkerProps> = ({ children }) => (
  <div className={styles.markerContainer}>{children || <LocationOnIcon className={styles.locationIcon} />}</div>
);

export default Marker;
