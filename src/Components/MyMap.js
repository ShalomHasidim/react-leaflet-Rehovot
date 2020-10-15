import React, { useState } from "react";
import L, { popup } from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import markers1 from "../services/Markers.js";
import markers2 from "../services/MarkersCenter.js";
import SchoolVector from "../assets/school-black-18dp.svg";
import CenterVector from "../assets/account_balance-black-18dp.svg";

function MyMap() {
  const [ShowSchools, setShowSchools] = useState(true);
  const [ShowCenters, setShowCenters] = useState(true);
  const position = [31.90341, 34.806831];
  return (
    <React.Fragment>
      <div className='filter'>
        <input
          type='checkbox'
          onClick={() => setShowSchools(!ShowSchools)}
          style={{
            ":before": {
              content: "hello",
            },
          }}
        />
        <input type='checkbox' onClick={() => setShowCenters(!ShowCenters)} />
      </div>
      <Map className='map' center={position} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {ShowSchools
          ? markers1.map((item, index) => {
              return (
                <Marker
                  key={index}
                  position={[parseFloat(item.X), parseFloat(item.Y)]}
                  icon={icon}
                  onmouseover={(e) => {
                    e.target.openPopup();
                  }}
                >
                  <Popup className='popup'>
                    <h1>{item.School}</h1>
                    <p>כתובת: {item.Address}</p>
                    <p>טלפון: {item.Phone}</p>
                  </Popup>
                </Marker>
              );
            })
          : null}

        {ShowCenters
          ? markers2.map((item, index) => {
              return (
                <Marker
                  key={index}
                  position={[parseFloat(item.X), parseFloat(item.Y)]}
                  icon={Ic}
                  onmouseover={(e) => {
                    e.target.openPopup();
                  }}
                >
                  <Popup className='popup'>
                    <h1 style={{ borderColor: "green" }}>
                      {item.CommunityCenterName}
                    </h1>
                    <p>כתובת: {item.Address}</p>
                    <p>טלפון: {item.Phone}</p>
                  </Popup>
                </Marker>
              );
            })
          : null}
      </Map>
    </React.Fragment>
  );
}

const icon = L.icon({
  iconUrl: SchoolVector,
  //shadowUrl: leafShadow,
  iconSize: [30, 60], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76],
});

const Ic = L.icon({
  iconUrl: CenterVector,
  //shadowUrl: leafShadow,
  iconSize: [30, 60], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76],
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
