import { useState } from 'react'
import { nanoid } from 'nanoid'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { id: nanoid(), name: 'Arto Hellas' },
    { id: nanoid(), name: 'Pablo Picasso' }
  ]) 
  const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: nanoid(),
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  
  const handleNameChange = (event) => {
    //console.log(event.target.value)
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
      <Persons 
        key={persons.id} 
        persons={persons} 
      />
    </div>
  )
}

export default App
