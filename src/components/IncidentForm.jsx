import { useState, useEffect } from 'react';

function IncidentForm() {
  return (
    <>
      <div className="w-1/4 h-3/4 bg-white flex flex-col m-16 rounded-lg p-4">
      {/* Button in SideBar calls AddMarker and allows user to add marker to the Map. */}
      {/* TODO: Upon marker creation: user can input information about the incident. */}
      {/* Current challenge: Connecting user input to a marker. */}
      <div className="text-black text-xl text-left bg-slate-200 m-4 p-4 rounded-lg">
          {/* Display details for a marker, if selected. Otherwise, inform user to select a marker to view details. */}
          {/* May have to pass in details component. */}
          <h2>New Incident</h2>
          {/* TODO: Use conditional to see if marker is selected. */}
          <p className="text-gray-500"><span className="font-semibold">To report a new incident: </span>
            Click "Add Marker" in the left sidebar, then click on a location on the map to add a new marker. Text boxes will appear 
            <span className="font-semibold"> here </span>so you can input details.</p>
        </div>

      </div>
    </>
  )
}

export default IncidentForm;