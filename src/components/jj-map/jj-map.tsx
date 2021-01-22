import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../marker';
import styles from './jj-map.module.css';

const DIRECTION_TRAVEL_MODE = 'DRIVING';
const latitude = -33.684976;
const longitude = -71.206135;
const mapConfig = {
  center: {
    lat: latitude,
    lng: longitude,
  },
  zoom: 18,
};
const Footer: React.FC = () => {
  const GOOGLE_MAP_API_KEY: string = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';

  function setMap({ map, maps }: any) {
    const directionsService = new maps.DirectionsService();
    const bounds = new maps.LatLngBounds();

    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { lat, lng } = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          directionsService.route(
            {
              origin: `${lat},${lng}`,
              destination: `${latitude},${longitude}`,
              travelMode: DIRECTION_TRAVEL_MODE,
            },
            (response: any, status: any) => {
              if (status === 'OK') {
                // Get polyline boundaries
                const boundaries = response.routes[0].bounds;
                const { Ra, Wa } = boundaries;

                // Create direction line with direction route
                const routePolyline = new maps.Polyline({
                  path: response.routes[0].overview_path,
                  strokeColor: '#ff9800',
                });

                // Center map in the direction line boundaried
                bounds.extend(new maps.LatLng(Wa.j, Ra.i));
                bounds.extend(new maps.LatLng(Wa.i, Ra.j));
                bounds.extend(new maps.LatLng(latitude, longitude));
                map.fitBounds(bounds);
                // Draw direction line in the map
                routePolyline.setMap(map);
              } else {
                console.log(`Directions service failed due to ${status}`);
              }
            },
          );
        },
        err => {
          console.log('Error requesting geolocation');
        },
      );
    } else {
      console.log('No geolocation');
    }
  }

  return (
    <div className={styles.jjMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
        onGoogleApiLoaded={setMap}
      >
        <Marker lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </div>
  );
};
export default Footer;
