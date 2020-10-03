import React from "react";
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import leafGreen from '../assets/leaf-green.png';
import leafRed from '../assets/leaf-red.png';
import leafOrange from '../assets/leaf-orange.png';
import leafShadow from '../assets/leaf-shadow.png';
import {getMarkers}  from '../services/Markers.jsx';
import '../css/popup.css';

function MyMap() {
    
    const schools;
    const matnasim;
    const markers = getMarkers(); 
    const position =[31.903410, 34.806831];
    return (
        <Map className= "map" center={position} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {markers.map((marker, index) => {
          const icon = L.icon({
            iconUrl: leafGreen,
            shadowUrl: leafShadow,
            iconSize:     [30, 60], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76]
          });
          return (
            <Marker key={index} position={[parseFloat(marker.X), parseFloat(marker.Y)]} icon ={ icon } >
            {marker}
            <Popup className="popup">
              <span className="popup">כתובת: {marker.Address}</span><br/>
              <span> בית ספר: {marker.school}</span><br/>
              <span>טלפון: {marker.phone}</span><br/>
            </Popup>
          </Marker>
          );
        })}

        </Map>
    )

}

export default MyMap;