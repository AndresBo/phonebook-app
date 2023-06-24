import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')


  // useEffect gets data at the first render of the app - note empty array as second useEffect argument:
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [persons] )
  

  // add new person object to persons state:
  const addPerson = (event) => {
    event.preventDefault()
    // check and reject for duplicate names
    const findDuplicate = persons.find(person => person.name === newName)
    if (findDuplicate) {
      return alert(`${newName} is already added to phonebook`)
    }
    // define the new person object
    const personObject = {
      id: nanoid(),
      name: newName,
      number: newNumber
    }
    // add the new person to the persons state using concat to avoid mutating state
    personService
      .create(personObject)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setNewName('')
        setNewNumber('')
      })
  }


  const deletePerson = (id) => {
    console.log('delete person with id: ',id)
    //find the person in the persons array
    
    axios.delete(`http://localhost:3001/persons/${id}`)
    
  }


  // event handler for newName state
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }


  // event handler for newNumber state
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  

  // event handler for filterName state
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
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
