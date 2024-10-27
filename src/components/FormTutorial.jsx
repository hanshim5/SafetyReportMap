import { useState, useEffect } from 'react';

function FormTutorial({}) {
  return (
    <>

      <div className="w-1/4 h-3/4 bg-white flex flex-col m-16 rounded-lg p-4">
      
      <p className="text-gray-500"><span className="font-semibold">To report a new incident: </span>
            Click "Add Marker" in the left sidebar, then click on a location on the map to add a new marker. Text boxes will appear 
            <span className="font-semibold"> here </span>so you can input details.</p>

      </div>
    </>
  )
}

export default FormTutorial;