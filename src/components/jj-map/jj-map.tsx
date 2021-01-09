import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../marker';
import styles from './jj-map.module.css';

const lat = -33.684976;
const lng = -71.206135;

const Footer: React.FC = () => {
  const GOOGLE_MAP_API_KEY: string = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';

  const mapConfig = {
    center: {
      lat,
      lng,
    },
    zoom: 18,
  };

  return (
    <div className={styles.jjMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};
export default Footer;
