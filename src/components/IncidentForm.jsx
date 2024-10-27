import { useState, useEffect } from 'react';

function IncidentForm({newMarker, setTitle, setDescription, handleSave}) {
  return (
    <>

      <div className="w-1/4 h-3/4 bg-white flex flex-col m-16 rounded-lg p-4">
      {newMarker ? 
      
      <p className="text-gray-500"><span className="font-semibold">To report a new incident: </span>
            Click "Add Marker" in the left sidebar, then click on a location on the map to add a new marker. Text boxes will appear 
            <span className="font-semibold"> here </span>so you can input details.</p>
       :       
      <form onSubmit={handleSave}>
        <h1 className='text-black text-xl font-bold heading'>
          Incident Form
        </h1>
        <hr/>
        <label className='text-black'>
          Location
        </label>
        <input type='text'
          placeholder="Enter incident title"
          onChange={setTitle}
          className="text-black bg-white"/>
        <hr/>
        <label className='text-black'>
          Description 
          <textarea name="postContent" 
            placeholder="Enter description"
            onChange={setDescription}
            className="text-black bg-white"/>
        </label>
        <button title='Submit' className='text-black bg-blue-200'type="submit">
          Submit
        </button>
      </form> }

      </div>
    </>
  )
}

export default IncidentForm;