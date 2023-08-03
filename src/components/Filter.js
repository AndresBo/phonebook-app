// component that renders search name field
const Filter = ({filterName, setFilterName} ) => {
    return (
        <div>
            Find name: <input value={filterName} onChange={({ target }) => setFilterName(target.value)}></input>   
        </div>
    )
}

export default Filter
