import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

import "./App.css";

const markers = [
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
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Vite + React | Google Map Markers</h1>
        <div style={{ height: "50vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 33.7869, lng: -118.1130 }}
              zoom={10}
              onClick={() => setActiveMarker(null)}
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
      </div>
    </Fragment>
  );
}

export default App;