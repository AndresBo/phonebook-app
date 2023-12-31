// component that renders list of persons
const Persons = ({ user, persons, filterName, deletePerson }) => {
    // filter the array of persons by checking persons names against filterName state:
    const filteredPersons = persons.filter(person => person.name.includes(filterName))
    // conditional that checks if there are no matches or else renders filtered list of persons: 
    if (filteredPersons.length === 0) {
      return <p>No matches</p>
    } else {
      return (
        <ul>
          {filteredPersons.map(person => 
            <li key={person.id}>
              {person.name} {person.number} {user.admin ?
                <button onClick={() => deletePerson(person.id)}>
                  delete
                </button>
                : null
              }
            </li>)
          }
        </ul>
      )
    }
}

export default Persons
