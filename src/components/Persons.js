const Persons = ({persons}) => {
    console.log(persons)
    return (
        <ul>
            {persons.map(person => <li>{person.name}</li>)}
        </ul>
    )
}

export default Persons
