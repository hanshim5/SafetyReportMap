import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import SideBar from "./components/SideBar";
import "./App.css";
const API_KEY=import.meta.env.VITE_GOOGLE_MAP_API_KEY;

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
    googleMapsApiKey: API_KEY,
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
      <div className="container flex w-full max-h-screen items-center">
        <SideBar />
        <div className="container w-full">
        <h1 className="text-center w-full p-4">Map of Safety Report Markers</h1>
        <div style={{ width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 33.7869, lng: -118.1130 }}
              zoom={10}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "85vh" }}
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
      </div>
    </Fragment>
  );
}

export default App;