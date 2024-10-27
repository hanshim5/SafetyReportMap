import { useState, useEffect } from 'react';

function IncidentForm() {
  return (
    <>

      <div className="w-1/4 h-3/4 bg-white flex flex-col m-16 rounded-lg p-4">
      <form>
        <h1 className='text-black text-xl font-bold heading'>
          Incident Form
        </h1>
        <hr/>
        <label className='text-black'>
          Location
        </label>
        <input type='text' name='input1' className="text-black bg-white"/>
        <hr/>
        <label className='text-black'>
          Description <textarea name="postContent" className="text-black bg-white"/>
        </label>
        <button title='Submit' className='text-black bg-white border-solid border-2'type="submit">
          Submit
        </button>
      </form> 
      </div>
    </>
  )
}

export default IncidentForm;