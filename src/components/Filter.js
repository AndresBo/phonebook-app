// component that renders search name bad
const Filter = ({filterName, handleFilterNameChange} ) => {
    return (
        <div>
            Find name: <input value={filterName} onChange={handleFilterNameChange}></input>   
        </div>
    )
}

export default Filter
