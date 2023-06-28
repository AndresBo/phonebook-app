import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState('a message...')


  // useEffect gets data at the first render of the app - Note the empty array as second useEffect argument:
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])
  

  // add new person object to persons state:
  const addPerson = (event) => {
    event.preventDefault()
    // check for duplicate name:
    const findDuplicate = persons.find(person => person.name === newName)
    // if a duplicate is found ask if wish to update or not
    if (findDuplicate) {
      // ask to update number or not
      const confirm = window.confirm(`do you wish to update ${findDuplicate.name} phone number?`)
      // if user ask to replace 
      if (confirm) { 
        // copy old person object with updated number using JS spread syntax
        const updatedPersonObject = { ...findDuplicate, number: newNumber }
        // send PUT http request:
        personService
          .updateNumber(updatedPersonObject.id, updatedPersonObject)
            .then(updatedPerson => {
              setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
              setNewName('')
              setNewNumber('')
            })
        return alert(`${updatedPersonObject.name} number was updated`)
      } else {
        setNewName('')
        setNewNumber('')
        return alert(`${newName} is already added to phonebook and was not updated`)
      }
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
    // use personService module that comunicates with backend
    personService
      .deleteOnePerson(id)
      setPersons(persons.filter(person => person.id !== id))
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
      <Notification 
        message={message} 
      />
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
