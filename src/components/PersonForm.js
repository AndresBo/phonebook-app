// component that renders form for adding a new name and number
const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber }) => {
    return (
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={({ target }) => setNewName(target.value)}/>
          </div>
          <div>
            phone: <input value={newNumber} onChange={({ target }) => setNewNumber(target.value)}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default PersonForm
