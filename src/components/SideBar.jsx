import { AddMarker } from './AddMarker';
import SafetyShark from "../assets/RedYellowLogo.png";
import MarkerLogo from "../assets/markerLogo.png";

function SideBar( {handleAddMarker, addMarkerMode, incidentList, onIncidentClick} ) {

  return (
    <>
      <div className="w-1/4 h-3/4 flex flex-col rounded-lg p-8">
        <img src={MarkerLogo} className="w-14 self-center inline-block pb-8"/>
        <img src={SafetyShark} className="inline-block pb-8"/>
        {/* addMarker toggles "addMarkerMode" which enables user to view and edit an input form for a new marker. */}
        <AddMarker onAddMarker = {handleAddMarker} addMarkerMode={addMarkerMode}/>
        <div className="text-left bg-white bg-opacity-10 my-4 max-h-64 overflow-auto no-scrollbar p-2 rounded-lg">
          <h2 className="text-xl font-bold text-center">Recent Alerts</h2>
          {/* List displaying alerts that are currently on the map. */}
          {/* List content is scrollable, without a scrollbar for clean visuals. */}
          { incidentList ? (
            incidentList.map((incident) =>
              (
                <div className="cursor-pointer hover:bg-opacity-20 transition-colors text-sm bg-white bg-opacity-10 rounded-md my-2 p-2"
                  key={incident.id}
                  onClick={() => onIncidentClick(incident)}>
                  <p className="font-bold">{incident.name}</p>
                  <p>{incident.description}</p>
                  <p>Posted: {incident.time} {incident.date}</p>
                </div>
              )
            )
          ) :
          // If there are no incidents, this message appears to the user.
            (<p className="text-gray-500">Recent incidents will show up here.</p>)
          }

        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded-lg">
          {/* List of available resources, i.e. police number, how to get an escort, etc. */}
          <h2 className="text-xl font-bold">Resources</h2>
          {/* police escort service */}
          <h2 className="">Request a Safety Escort: <a href="tel:5629854101">562.985.4101</a></h2>
          {/* / anonymous tip line */}
          <a href="https://www.csulb.edu/university-police/form/submit-an-anonymous-crime-tip" target="_blank">Report Crime Tip (Anonymous)</a>
        </div>
      </div>
    </>
  )
}

export default SideBar;