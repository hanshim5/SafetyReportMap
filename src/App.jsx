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


// Initial markers to display on the map
const initialMarkers = [
  {
    id: 1,
    name: "Hit and run near Horn Center!",
    position: { lat: 33.78398549715631, lng: -118.11409057458485 },
    date: "2024-10-26",
    time: "10:30 AM",
  },
];


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const [markers, setMarkers] = useState(initialMarkers); // used to manage markers + add new ones
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null); // tracking active marker for showing infoWindow
  const [addMarkerMode, setAddMarkerMode] = useState(false); // control add marker mode
  const [newMarker, setNewMarker] = useState(null); // Stores new marker position before saving
  // states for Marker information
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

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
          image: image,
        },
      ]);
      setNewMarker((newMarker) => null); // Reset new marker state after saving
      setTitle("");
      setDescription("");
    }
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
    };

    const addImage = (e) => {
      setImage(e.target.files[0]);
    }

    const handleIncidentClick = (incident) => {
      setSelectedMarker(incident);
    };

  return (
    <Fragment>
      <div className="container max-w-screen max-h-screen">
        <div className="flex items-center justify-center">
        <SideBar handleAddMarker={toggleAddMarkerMode} 
        addMarkerMode={addMarkerMode} 
        incidentList={markers}
        onIncidentClick={handleIncidentClick}/>
        <div style={{ width: "100%", height: "100vh" }}>
            {isLoaded ? (
            <GoogleMap
            center={pos}
            zoom={10}
            onLoad={onLoad}
            onDragEnd={handleCenter}
            onClick={handleMapClick}
            mapContainerStyle={{ width: "100%", height: "100vh" }}
            >
              {markers.map(({ id, name, description, position, date, time, image }) => (
                <MarkerF
                key={id}
                position={position}
                onClick={() => handleIncidentClick({ id, name, description, date, time, position, image })}/>))}
                  { selectedMarker && (
                    <InfoWindowF 
                    position={selectedMarker.position}
                    onCloseClick={() => setActiveMarker(null)}
                    >
                      <div className="text-black text-left">
                        <h3 className="font-bold">{selectedMarker.name}</h3>
                        <p>{selectedMarker.description}</p>
                        <p>Posted Date: {selectedMarker.date}</p>
                        <p>Posted Time: {selectedMarker.time}</p>
                        {/* Display latitude and longitude */}
                        <p>Latitude: {selectedMarker.position.lat.toFixed(6)}</p>
                        <p>Longitude: {selectedMarker.position.lng.toFixed(6)}</p>
                        { selectedMarker.image && (
                          <img width={"100px"} src={URL.createObjectURL(selectedMarker.image)}/>
                        )}
                      </div>
                    </InfoWindowF>
                  )}
              
            </GoogleMap>
          ) : null}
        </div>
        <div className="max-h-full fixed transition-transform">
        { newMarker ? (
          <IncidentForm 
          newMarker={newMarker == null}
          setNewMarker={() => (setNewMarker(null))}
          setTitle={addTitle}
          setDescription={addDesc}
          setImage={addImage}
          handleSave={handleSaveMarker}/>) :
          (
            <FormTutorial />
              )
            }
        </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;