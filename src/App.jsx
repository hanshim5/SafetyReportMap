import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

//const API_KEY=import.meta.env.VITE_GOOGLE_MAP_API_KEY;

import { AddMarker } from "./components/AddMarker"; // Notice the uppercase and corrected quotes
import "./App.css";
import SideBar from "./components/SideBar";
import IncidentForm from "./components/IncidentForm";


const initialMarkers = [
  {
    id: 1,
    name: "CSULB campus",
    position: { lat: 33.78398549715631, lng: -118.11409057458485},
  },
  {
    id: 2,
    name: "CSULB ",
    position: { lat: 33.78606527392616, lng: -118.1091033195572 },
  },

  {
    id: 3,
    name: "ditto",
    position: { lat: 33.78338772161907, lng: -118.1140407489438 },
  }
];

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD1Om8PUMaFrWZSE1MLsWF6Hl6rm8-yD_U"//API_KEY,
  });

  const [markers, setMarkers] = useState(initialMarkers);
  const [activeMarker, setActiveMarker] = useState(null);
  const [addMarkerMode, setAddMarkerMode] = useState(false);

  const handleActiveMarker = (markerId) => {
    if (markerId === activeMarker) {
      return;
    }
    setActiveMarker(markerId);
  };

  const handleMapClick = (event) => {
    if (!addMarkerMode) return; // Only add marker if addMarkerMode is enabled

    const newMarker = {
      id: markers.length + 1, // Unique ID for the marker
      name: 'Marker ${markers.length + 1}', // Default name; you can prompt user for custom name
      position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setAddMarkerMode(false);
    };

    const toggleAddMarkerMode = () => {
      setAddMarkerMode((prevMode) => !prevMode);
    };

  return (
    <Fragment>
      <div className="container">
        <div className="flex items-center justify-center">

        <SideBar handleAddMarker={toggleAddMarkerMode}/>
        {/* <AddMarker onAddMarker = {toggleAddMarkerMode} /> */}
        <div style={{ width: "100%" }}>
        <h1 className="text-center">Map of Safety Report Markers</h1>
          {isLoaded ? (
            <GoogleMap
            center={{ lat: 33.7869, lng: -118.1130 }}
            zoom={10}
            onClick={handleMapClick}
            mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
                
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
        <IncidentForm />
        </div>
      </div>
    </Fragment>
  );
}

export default App;