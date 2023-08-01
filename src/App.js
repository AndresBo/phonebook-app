import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import LoggedUser from './components/LoggedUser'
import Togglable from './components/Toggable'

import personService from './services/persons'
import loginService from './services/login'
import './index.css'



const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [filterName, setFilterName] = useState('')

  const [message, setMessage] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)

  // GET data at the first render of the app - Note the empty array as second useEffect argument:
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  // When app is opened, check for logged in users in local storage, if so, save user to app state
  // and set JWT for HTML requests:
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPhonebookappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      personService.setToken(user.token)
    }
  }, [])

  // LOGIN
  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedPhonebookappUser', JSON.stringify(user)
      )
      personService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setMessage('Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  // LOG OUT
  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)
  }
  

  // ADD NEW PERSON or UPDATE EXISTING
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
              setMessage(`'${updatedPerson.name}' number was updated`)
              setTimeout(() => {setMessage(null)}, 10000)
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              // setMessage(`Note '${findDuplicate.name}' can't be updated, has already been removed by another user`)
              // setTimeout(() => {setMessage(null)}, 10000)
              // setNewName('')
              // setNewNumber('')
              // setPersons(persons.filter(person => person.id !== findDuplicate.id))
              console.log(error.response.data.error);
              setNewName('')
              setNewNumber('')
              setMessage(`${error.response.data.error}`)
              setTimeout(() => {setMessage(null)}, 10000)
            })
        return

      } else {
        setNewName('')
        setNewNumber('')
        setMessage(`Note '${findDuplicate.name}' was not updated`)
        setTimeout(() => {setMessage(null)}, 10000)
        return 
      }
    }
    // define the new person object
    const personObject = {
      //id: nanoid(),
      name: newName,
      number: newNumber
    }
    // add the new person to the persons state using concat to avoid mutating state
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(`Note '${returnedPerson.name} was added to Phonebook`)
        setTimeout(() => {setMessage(null)}, 10000)
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setNewName('')
        setNewNumber('')
        setMessage(`${error.response.data.error}`)
        setTimeout(() => {setMessage(null)}, 10000)
      })
  }

  // DELETE PERSON
  const deletePerson = async (id) => {
    try {
      const response = await personService.deleteOnePerson(id)
      console.log('delete',response)
      setMessage(`Entry has been deleted`)
      setTimeout(() => {setMessage(null)}, 5000)
      setPersons(persons.filter(person => person.id !== id))
    } catch (error) {
      setMessage('Not authorized to delete')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
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
  
  if (user === null) {
    return (
      <div>
        <h2>Phonebook</h2>
      <Notification 
        message={message} 
      />
      <LoginForm
        handleLogin={handleLogin}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      </div>
    )
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <LoggedUser
        user={user}
        handleLogout={handleLogout}
      />
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
