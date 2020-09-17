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



function Map(props) {
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
      {props.elements.map(business => (
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
          <div className={styles.info}>
            <div className={styles.img}> <img src={`../${business.Image}`} /> </div>
            <h4 className={styles.title}>{business.Name}</h4>
            <p className={styles.description}>{business.Type}</p>
            <div className={styles.address}> <a href={`https://www.google.com/maps/search/?api=1&query=${business.Maps}`}>{business.Address}</a> </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const styles = {
  map: css`
    position: fixed;
    z-index: -1;
    height: 100vh;
    width: 50%;
    left: 50%;
    @media (max-width: 767px) {
      display: none;      
    }
  `,
  map2: css`
    position: fixed;
    z-index: -1;
    height: 100vh;
    width: 98%;
  `,
  img: css`
  width: auto;
  height: auto;
    img{
      width: 120px;
      height: 120px;
    }
  `,
  title: css`
    margin-top: 30px;
    font-size: 12px;
  `,
  description: css`

    font-size: 9px;
  `,
  address: css`
    font-size: 9px;
  `,
  info: css`
    width: 140px;
    height: 220px;
  `

  
}


const MapWrapped = withScriptjs(withGoogleMap(Map));
const key = process.env.REACT_APP_KEY

export default function App(props) {

  return (
      <div className={!props.view ? styles.map : styles.map2}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          elements={props.restaurant}
        />
     </div>
  );
}