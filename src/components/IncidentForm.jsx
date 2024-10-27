// passing states and functions to the Form element, to be added to marker data.
function IncidentForm({setTitle, setDescription, setImage, handleSave}) {
  return (
    <>

      <div className="fixed w-72 bg-[#3A3431] flex flex-col rounded-lg p-4 right-16 top-24">   
      <form onSubmit={(e) => {
          e.preventDefault(); // preventing reload from triggering
          handleSave(e);
        }}>
        <h1 className='text-xl font-bold heading'>
          Report Incident
        </h1>
        <hr className="my-4 border-[#D4B53A]"/>
        {/* Prompts user for a brief name for the incident, i.e. "Suspicious man by EN2 building!" */}
        <div className="mb-4 text-left">
          <label className=''>
          Title
          </label>
          <input type='text'
            placeholder="Briefly describe the incident..."
            onChange={setTitle}
            className="bg-slate-100 bg-opacity-20 w-full p-2 rounded-md my-2"/>
        </div>

        {/* Prompts user to describe further about the incident experienced or perceived. */}
        <div className="text-left">
          <label className=''>
            Description 
            <textarea name="postContent" 
              placeholder="Time of incident, details about the perpetrator, and what happened..."
              onChange={setDescription}
              className= "bg-slate-100 bg-opacity-20 w-full h-48 p-2 rounded-md my-2"/>
          </label>
        </div>

        {/* User can (optionally) add an image to an incident's information. */}
        <input className="mb-4" type="file" onChange={setImage}></input>
        
        <button title='Submit' className='bg-[#467BAA] hover:bg-white hover:text-[#467BAA] transition-colors'type="submit">
          Submit
        </button>
      </form>

      </div>
    </>
  )
}

export default IncidentForm;