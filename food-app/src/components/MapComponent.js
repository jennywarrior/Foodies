import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import icon from "../images/icon.png";

const MapComponent = ({initialMarkers}) => {
  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const [markers, setMarkers] = useState([]);

  const containerStyle = {
    backgroundColor: "aquamarine",
    width: "100%",
    height: "100%",
    borderRadius: "30px 0px 0px 30px"
  };

  const center = {
    lat: 32.98620584651902,
    lng: -96.75135247249743,
  };

  const mapClicked = (event) => {
    console.log(event.latLng.lat(), event.latLng.lng());
  };


  const markerDragEnd = (event, index) => {
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
  };

  useEffect(() => {
    setMarkers(initialMarkers);
  })

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9uWYWYi2c8SJFMdombdNv6cX5GCa2mI0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onClick={mapClicked}
      >
        {markers.map((marker, index) => (
          <Marker
            icon={icon}
            key={index}
            position={marker.geometry.location}
            label={{
              color: "black",
              text: marker.name
            }}
            draggable={false}
            onDragEnd={(event) => markerDragEnd(event, index)}
          >
            {activeInfoWindow === index && (
              <InfoWindow position={marker.position}>
                <b>
                  {marker.position.lat}, {marker.position.lng}
                </b>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
