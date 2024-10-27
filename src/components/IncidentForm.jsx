import { useState, useEffect } from 'react';

function IncidentForm({setTitle, setDescription, handleSave}) {
  return (
    <>

      <div className="fixed w-72 bg-[#3A3431] flex flex-col rounded-lg p-4 right-16 top-24">   
      <form onSubmit={handleSave}>
        <h1 className='text-xl font-bold heading'>
          Report Incident
        </h1>
        <hr className="my-4 border-[#D4B53A]"/>
        <div className="mb-4 text-left">
          <label className=''>
          Title
          </label>
          <input type='text'
            placeholder="Briefly describe the incident..."
            onChange={setTitle}
            className="bg-slate-100 bg-opacity-20 w-full p-2 rounded-md my-2"/>
        </div>

        <div className="text-left">
          <label className=''>
            Description 
            <textarea name="postContent" 
              placeholder="Time of incident, details about the perpetrator, and what happened..."
              onChange={setDescription}
              className= "bg-slate-100 bg-opacity-20 w-full h-48 p-2 rounded-md my-2"/>
          </label>
        </div>
        
        <button title='Submit' className='bg-[#467BAA] hover:bg-white hover:text-[#467BAA] transition-colors'type="submit">
          Submit
        </button>
      </form>

      </div>
    </>
  )
}

export default IncidentForm;