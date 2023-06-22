import { useState } from 'react'
import { nanoid } from 'nanoid'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { id: nanoid(), name: 'Arto Hellas', number:'0421243429' },
    { id: nanoid(), name: 'Pablo Picasso', number:'0421243429' },
    { id: nanoid(), name: 'Ada Lovelace', number:'0421243429'  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    // reject duplicate names
    const findDuplicate = persons.find(person => person.name === newName)
    if (findDuplicate) {
      return alert(`${newName} is already added to phonebook`)
    }

    const personObject = {
      id: nanoid(),
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }  
   
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName} 
        handleFilterNameChange={handleFilterNameChange}
      />
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        filterName={filterName}
      />
    </div>
  )
}

export default App
