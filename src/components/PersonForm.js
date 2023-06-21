const PersonForm = ({addPerson, newName, handleNameChange}) => {
    //console.log(persons)
    return (
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default PersonForm
