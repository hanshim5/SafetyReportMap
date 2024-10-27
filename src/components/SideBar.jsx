import { useState, useEffect } from 'react';
import { AddMarker } from './AddMarker';

function SideBar( {handleAddMarker, addMarkerMode, incidentList} ) {
  
  return (
    <>
      <div className="w-1/4 h-3/4 bg-white flex flex-col m-16 rounded-lg p-4">

        <AddMarker onAddMarker = {handleAddMarker} addMarkerMode={addMarkerMode}/>
        <div className="text-left bg-slate-200 my-4 p-2 rounded-lg">
          <h2 className="text-black text-xl font-bold text-center">Recent Alerts</h2>
          { incidentList ? (<div>yes</div>) :
            (<p className="text-gray-500">Recent incidents will show up here.</p>)
          }
          
        </div>
        <div className="text-black bg-slate-200 p-2 rounded-lg">
          {/* List of available resources, i.e. police number, how to get an escort, etc. */}
          <h2 className="text-xl font-bold">Resources</h2>
          {/* police escort service */}
          <h2 className="">Request a Safety Escort: <a href="tel:5629854101">562.985.4101</a></h2>
          {/* anonymous tip line */}
          <a href="https://www.csulb.edu/university-police/form/submit-an-anonymous-crime-tip" target="_blank">Report Crime Tip (Anonymous)</a>
        </div>
      </div>
    </>
  )
}

export default SideBar;