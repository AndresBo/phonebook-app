// component that renders form for adding a new name and number
const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
    //console.log(persons)
    return (
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            phone: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default PersonForm
