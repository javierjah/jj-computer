/* eslint-disable new-cap */
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import MyLocationIcon from '@material-ui/icons/MyLocation';

// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';

import Marker from '../marker';
import styles from './jj-map.module.css';

// const DIRECTION_TRAVEL_MODE = 'DRIVING';
const latitude = -33.684976;
const longitude = -71.206135;
const mapConfig = {
  center: {
    lat: latitude,
    lng: longitude,
  },
  zoom: 18,
};

const JjMap: React.FC = () => {
  const [showInfoWindow, setShowInfoWindow] = useState(true);
  // const [searchForLocation, setSearchForLocation] = useState(false);
  // const [searchLocation, setSearchLocation] = useState('');
  // const [googleMaps, setGoogleMaps] = useState<any>(undefined);
  // const [googleMap, setGoogleMap] = useState<any>(undefined);
  // const [locationMarker, setLocationMarker] = useState<{ lat: number; lng: number } | undefined>(undefined);

  const GOOGLE_MAP_API_KEY: string = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';

  // useEffect(() => {
  //   if (navigator?.geolocation && googleMaps && googleMap && searchLocation && searchForLocation) {
  //     const directionsService = new googleMaps.DirectionsService();
  //     const bounds = new googleMaps.LatLngBounds();

  //     navigator.geolocation.getCurrentPosition(
  //       position => {
  //         const { lat, lng } = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };
  //         directionsService.route(
  //           {
  //             origin: searchLocation,
  //             // origin: `${lat},${lng}`,
  //             destination: `${latitude},${longitude}`,
  //             travelMode: DIRECTION_TRAVEL_MODE,
  //           },
  //           (response: any, status: any) => {
  //             if (status === 'OK') {
  //               // Get polyline boundaries
  //               const boundaries = response.routes[0].bounds;
  //               const { Ra, Wa } = boundaries;

  //               // Create direction line with direction route
  //               const routePolyline = new googleMaps.Polyline({
  //                 path: response.routes[0].overview_path,
  //                 strokeColor: '#ff9800',
  //               });

  //               // Center map in the direction line boundaried
  //               bounds.extend(new googleMaps.LatLng(Wa.j, Ra.i));
  //               bounds.extend(new googleMaps.LatLng(Wa.i, Ra.j));
  //               bounds.extend(new googleMaps.LatLng(latitude, longitude));
  //               googleMap.fitBounds(bounds);
  //               // Draw direction line in the map
  //               routePolyline.setMap(googleMap);
  //               setLocationMarker({ lat, lng });
  //               // setSearchForLocation(false);
  //             } else {
  //               console.log(`Directions service failed due to ${status}`);
  //             }
  //           },
  //         );
  //       },
  //       err => {
  //         console.log('Error requesting geolocation');
  //       },
  //     );
  //   }
  // }, [googleMaps, googleMap, searchForLocation, searchLocation]);

  // function setMap({ map, maps }: any) {
  //   setGoogleMaps(maps);
  //   setGoogleMap(map);
  // }

  function onChildClick() {
    if (showInfoWindow) return;
    setShowInfoWindow(true);
  }

  function handleCloseInfoWindow() {
    setShowInfoWindow(false);
  }

  // function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
  //   setSearchLocation(event.target.value);
  // }
  // function handleformSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   if (searchLocation) {
  //     setSearchForLocation(true);
  //   }
  // }

  return (
    <div className={styles.jjMap}>
      {/* {!searchForLocation && (
        <form className={styles.searchInputContainer} onSubmit={handleformSubmit}>
          <DirectionsIcon className={styles.directionButton} />
          <InputBase
            id="search"
            name="search"
            value={searchLocation}
            className={styles.input}
            placeholder="Escribe tu dirección"
            inputProps={{ 'aria-label': 'escribe tu dirección' }}
            onChange={handleSearchInput}
          />
          <IconButton type="submit" className={styles.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
      )} */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
        // onGoogleApiLoaded={setMap}
        onChildClick={onChildClick}
      >
        {/* {locationMarker && (
          <Marker
            lat={locationMarker?.lat}
            lng={locationMarker?.lng}
            icon={<MyLocationIcon fontSize="large" className={styles.personIcon} />}
          />
        )} */}
        <Marker
          lat={latitude}
          lng={longitude}
          showInfoWindow={showInfoWindow}
          onCloseInfoWindow={handleCloseInfoWindow}
        />
      </GoogleMapReact>
    </div>
  );
};
export default JjMap;
