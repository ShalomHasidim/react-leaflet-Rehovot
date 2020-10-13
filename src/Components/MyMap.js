import React from "react";
import L, { popup } from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from '../assets/leaf-green.png';
import leafRed from '../assets/leaf-red.png';
import leafOrange from '../assets/leaf-orange.png';
import leafShadow from '../assets/leaf-shadow.png';
import markers1 from '../services/Markers.js'
import markers2 from '../services/MarkersCenter.js';
import school from '../assets/school.png';
import Center from '../assets/Center.png';
import '../css/popup.css';



function MyMap() {

  const position = [31.903410, 34.806831];
  return (
    <React.Fragment>

      <Map className="map" center={position} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          markers1.map((item, index) => {
            return (<Marker key={index} position={[parseFloat(item.X), parseFloat(item.Y)]} icon={icon} >
              <Popup className="popup">
    <span className="popup">כתובת: {item.Address}</span><br/>
    <span> בית ספר: {item.School}</span><br/>
    <span>טלפון: {item.Phone}</span><br/>
  </Popup>
            </Marker>)
          })
        }

        {
          markers2.map((item, index) => {
            return( <Marker key={index} position={[parseFloat(item.X), parseFloat(item.Y)]} icon={Ic} >
              <Popup className="popup">
    <span className="popup">כתובת: {item.Address}</span><br/>
    <span> מרכז קהילתי: {item.CommunityCenterName}</span><br/>
    <span>טלפון: {item.Phone}</span><br/>
  </Popup>
            </Marker>)
          })
        }
      </Map>
    </React.Fragment>
  )

}

function PopUp(props){
  return(
    <Popup className="popup">
    <span className="popup">כתובת: {props.Address}</span><br/>
    <span> בית ספר: {props.School}</span><br/>
    <span>טלפון: {props.Phone}</span><br/>
  </Popup>
  );
}

const icon = L.icon({
  iconUrl: school,
  //shadowUrl: leafShadow,
  iconSize: [30, 60], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76]
});

const Ic = L.icon({
  iconUrl: Center,
  //shadowUrl: leafShadow,
  iconSize: [30, 60], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76]
});

export default MyMap;







































































/*function MyMap() {
    const markers = getMarkers();
    const MarkersCenter = getMarkersCenter();
    const position =[31.903410, 34.806831];
    return (
        <Map className= "map" center={position} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {markers.map((marker, index) => {
          const icon = L.icon({
            iconUrl: school,
            //shadowUrl: school,
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [20, 25], // size of the shadow
            iconAnchor:   [22, 30], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-10, -10]
          });
          return (
            <Marker key={index} position={[parseFloat(marker.X), parseFloat(marker.Y)]} icon ={ icon } >
            <Popup className="popup">
              <span className="popup">כתובת: {marker.Address}</span><br/>
              <span> בית ספר: {marker.School}</span><br/>
              <span>טלפון: {marker.Phone}</span><br/>
            </Popup>
          </Marker>
        );
        })}
        </Map>
    )

}

export default MyMap;*/
