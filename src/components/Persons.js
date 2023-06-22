const Persons = ({persons, filterName}) => {
    
    const filteredPersons = persons.filter(person => person.name.includes(filterName))
    
    if (filteredPersons.length === 0) {
      return <p>No matches</p>
    } else {
      return (
        <ul>
          {filteredPersons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
        </ul>
      )
    }
}

export default Persons
