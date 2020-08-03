import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


import { css } from 'emotion'


import datas from "../Humboldttogo.json";



function Map() {

  const [business, setSelectedBusiness] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedBusiness(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.86133016732651, lng: -124.24576636992904 }}
      onClick={(e) => console.log(e.latLng.toJSON())}
    // defaultOptions={{ styles: styles.map }}
    >
      {datas.map(business => (
        <Marker
          key={datas.Index}
          position={business.Coord}
          onClick={() => {
            setSelectedBusiness(business);
          }}
        //   icon={{
        //     url: `/skateboarding.svg`,
        //     scaledSize: new window.google.maps.Size(25, 25)
        //   }}
        />
      ))}

      {business && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedBusiness(null);
          }}
          position={business.Coord
          }
        >
          <div>
            <div> <img src={`../${business.Image}`} /> </div>
            <h4>{business.Name}</h4>
            <p>{business.Type}</p>
            <div> <a href={`https://www.google.com/maps/search/?api=1&query=${business.Maps}`}>{business.Address}</a> </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const styles = {
  map: css`
    position: absolute;
    height: 100vh;
    width: 100%;
    margin-top: 0px;
 @media (min-width: 767px) {
        position: fixed;
        // z-index: -2;
        top: 0%;
        right: 0%;
        // border: 3px solid green;
        width: 40%;
        height: 100vh;
    }
    `,

}


const MapWrapped = withScriptjs(withGoogleMap(Map));
const key = process.env.REACT_APP_KEY

export default function App() {
  
  return (
      <div className={styles.map}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
  );
}