import { useState, useEffect } from 'react';

function SideBar() {
  return (
    <>
      <div className="w-1/5 h-3/4 bg-white flex-col m-16 rounded-lg p-4">
        <button>
        {/* Button should open AddMarker component for user to input a new marker. */}
        Add Marker
        </button>
        <div className="text-black text-xl">
          {/* Display details for a marker, if selected. Otherwise, inform user to select a marker to view details. */}
          {/* May have to pass in details component. */}
          <h2>Incident Details</h2>
        </div>
        <div className="text-black">
          {/* List of available resources, i.e. police number, how to get an escort, etc. */}
          <h2>Resources</h2>
        </div>
      </div>
    </>
  )
}

export default SideBar;