import { useState, useEffect } from 'react';

function IncidentForm({setTitle, setDescription, handleSave}) {
  return (
    <>

      <div className="w-1/4 h-3/4 bg-white flex flex-col m-16 rounded-lg p-4">   
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
          className="text-black bg-slate-100 w-full p-2"/>
        <hr/>
        <label className='text-black'>
          Description 
          <textarea name="postContent" 
            placeholder="Enter time of incident, details about the perperator, and what happened."
            onChange={setDescription}
            className="text-black bg-slate-100 w-full h-64 p-2"/>
        </label>
        <button title='Submit' className='text-black bg-blue-200'type="submit">
          Submit
        </button>
      </form>

      </div>
    </>
  )
}

export default IncidentForm;