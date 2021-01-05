import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import logo from '../../assets/jj-only-logo.png';
import styles from './jj-map.module.css';

type MarkerProps = { lat: number; lng: number; children?: JSX.Element };

const Footer: React.FC = () => {
  const GOOGLE_MAP_API_KEY: string = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';

  const mapConfig = {
    center: {
      lat: -33.684719,
      lng: -71.196295,
    },
    zoom: 16,
  };
  const Marker: React.FC<MarkerProps> = ({ children }) =>
    children || <LocationOnIcon className={styles.locationIcon} />;

  return (
    <div className={styles.jjMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
      >
        <Marker lat={-33.684719} lng={-71.196295}>
          <img src={logo} alt="jj logo" className={styles.markerLogo} />
        </Marker>
      </GoogleMapReact>
    </div>
  );
};
export default Footer;
