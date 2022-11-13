import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const MapComponent = () => {
  const initialMarkers = [
    {
      position: {
        lat: 28.625485,
        lng: 79.821091,
      },
      label: { color: "white", text: "P1" },
      draggable: true,
    },
    {
      position: {
        lat: 28.625293,
        lng: 79.817926,
      },
      label: { color: "white", text: "P2" },
      draggable: false,
    },
    {
      position: {
        lat: 28.625182,
        lng: 79.81464,
      },
      label: { color: "white", text: "P3" },
      draggable: true,
    },
  ];

  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const [markers, setMarkers] = useState(initialMarkers);

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

  const markerClicked = (marker, index) => {
    setActiveInfoWindow(index);
    console.log(marker, index);
  };

  const markerDragEnd = (event, index) => {
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
  };

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
            key={index}
            position={marker.position}
            label={marker.label}
            draggable={marker.draggable}
            onDragEnd={(event) => markerDragEnd(event, index)}
            onClick={(event) => markerClicked(marker, index)}
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
