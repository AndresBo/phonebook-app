import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import { nanoid } from 'nanoid'

const App = () => {
  const [persons, setPersons] = useState([
    { id:nanoid(), name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm 
        persons={persons} 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
      />
      <h2>Numbers</h2>
      <Persons key={persons.id} persons={persons} />
    </div>
  )
}

export default App
