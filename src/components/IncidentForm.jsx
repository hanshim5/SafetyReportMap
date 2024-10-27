import { useState, useEffect } from 'react';

function IncidentForm({setTitle, setDescription, handleSave}) {
  return (
    <>

      <div className="fixed w-72 bg-[#3A3431] flex flex-col rounded-lg p-8 right-16 top-24">   
      <form onSubmit={handleSave}>
        <h1 className='text-xl font-bold heading mb-2'>
          Incident Form
        </h1>

        <label className=''>
          Location
        </label>
        <input type='text'
          placeholder="Enter incident title"
          onChange={setTitle}
          className=" bg-slate-100 w-full p-2 rounded-lg my-2"/>

        <label className=''>
          Description 
          <textarea name="postContent" 
            placeholder="Enter time of incident, details about the perperator, and what happened."
            onChange={setDescription}
            className="text-black bg-slate-100 w-full h-64 p-2 rounded-lg my-2"/>
        </label>
        <button title='Submit' className=' bg-blue-200'type="submit">
          Submit
        </button>
      </form>

      </div>
    </>
  )
}

export default IncidentForm;