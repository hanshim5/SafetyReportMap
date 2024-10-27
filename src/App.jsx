import { Fragment, useState, useRef } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

const API_KEY=import.meta.env.VITE_GOOGLE_MAP_API_KEY;
import "./App.css";
import SideBar from "./components/SideBar";
import IncidentForm from "./components/IncidentForm";
import FormTutorial from "./components/FormTutorial";
import SafetyShark from "./assets/SafetyShark.png"


const initialMarkers = [
  {
    id: 1,
    name: "CSULB campus",
    position: { lat: 33.78398549715631, lng: -118.11409057458485},
    date: "2024-10-26",
    time: "10:30 AM",
  },
  {
    id: 2,
    name: "CSULB ",
    position: { lat: 33.78606527392616, lng: -118.1091033195572 },
    date: "2024-10-26",
    time: "10:45 AM",
  },

  {
    id: 3,
    name: "ditto",
    position: { lat: 33.78338772161907, lng: -118.1140407489438 },
    date: "2024-10-26",
    time: "11:00 AM",
  }
];

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const [markers, setMarkers] = useState(initialMarkers); // used to manage markers + add new ones
  const [activeMarker, setActiveMarker] = useState(null); // tracking active marker for showing infoWindow
  const [addMarkerMode, setAddMarkerMode] = useState(false); // control add marker mode
  const [newMarker, setNewMarker] = useState(null); // Stores new marker position before saving
  // states for Marker information
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // handling map on init load
  const mapsRef = useRef(null);
  const [pos, setPos] = useState({ lat: 33.7869, lng: -118.1130 })
  function onLoad(map) { 
    mapsRef.current = map;
  }

  function handleCenter() {
    if (!mapsRef.current) return;
    const newPosition = mapsRef.current.getCenter().toJSON();
    setPos(newPosition);
  }


  // Handles map clicks to set a new marker's position
  const handleMapClick = (event) => {
    if (!addMarkerMode) return; // Only add marker when in 'add marker' mode
    setNewMarker({
      position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
    });
    setAddMarkerMode(false); // Exit 'add marker' mode after selecting position
  };


  // Saves the new marker with title and description inputs
  const handleSaveMarker = (e) => {
    if (newMarker && title && description) {
      e.preventDefault();

    // Handles date and time when parker was added
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

      setMarkers((prevMarkers) => [
        ...prevMarkers,
        {
          id: prevMarkers.length + 1,
          name: title,
          description: description,
          position: newMarker.position,
          date: currDate,
          time: currTime,
        },
      ]);
      setNewMarker((newMarker) => null); // Reset new marker state after saving
      setTitle("");
      setDescription("");
    }
  };

    // Activates InfoWindow for a specific marker
    const handleActiveMarker = (markerId) => {
      if (markerId === activeMarker) return; // Prevents reopening an already active InfoWindow
      setActiveMarker(markerId);
    };
  
    // Toggles the mode to allow adding a new marker
    const toggleAddMarkerMode = () => {
      setAddMarkerMode((prevMode) => !prevMode);
    };

    const addTitle = (e) => {
      setTitle(e.target.value);
    };

    const addDesc = (e) => {
      setDescription(e.target.value);
    }

  return (
    <Fragment>
      <div className="container max-w-full">
        <div className="flex items-center justify-center">
        <SideBar handleAddMarker={toggleAddMarkerMode} 
        addMarkerMode={addMarkerMode} 
        incidentList={markers}/>
        <div style={{ width: "100%" }}>
        {/* <h1 className="text-center text-4xl pb-8">Map of Safety Report Markers</h1> */}
        <img src={SafetyShark} className="inline-block pb-4 h-24"/>
          {isLoaded ? (
            <GoogleMap
            center={pos}
            zoom={10}
            onLoad={onLoad}
            onDragEnd={handleCenter}
            onClick={handleMapClick}
            mapContainerStyle={{ width: "100%", height: "80vh" }}
            >
              {markers.map(({ id, name, description, position, date, time }) => (
                <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
                
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div className="text-black text-left">
                        <h3 className="font-bold">{name}</h3>
                        <p>{description}</p>
                        <p>Posted Date: {date}</p>
                        <p>Posted Time: {time}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
        { newMarker ? (
          <IncidentForm 
          newMarker={newMarker == null}
          setNewMarker={() => (setNewMarker(null))}
          setTitle={addTitle}
          setDescription={addDesc}
          handleSave={handleSaveMarker}/>) :
          (
            <FormTutorial />
              )
            }
        </div>
      </div>
    </Fragment>
  );
}

export default App;