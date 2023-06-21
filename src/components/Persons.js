const Persons = ({persons, filterName}) => {
    console.log('filterName state: ',filterName)
    const filteredPersons = persons.filter(person => person.name.includes(filterName))
    console.log('filtered persons: ', filteredPersons)
    console.log('filtered persons length: ', filteredPersons.length)
    
    return (
        <ul>
            {filteredPersons.map(person => <li key={person.id}>{person.name}</li>)}
        </ul>
    )
}

export default Persons
