import { useState, useEffect } from 'react';

function FormTutorial({}) {
  return (
    <>

      <div className="fixed w-72 bg-[#3A3431] flex flex-col rounded-lg p-8 right-16 top-64">
      
      <p className="text-opacity-50"><span className="font-semibold">To report a new incident: </span>
            Click "Add Marker" in the left sidebar, then click on a location on the map to add a new marker. Text boxes will appear 
            <span className="font-semibold"> here </span>so you can input details.</p>

      </div>
    </>
  )
}

export default FormTutorial;