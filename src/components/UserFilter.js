// component that renders search name bad
const UserFilter = ({ filterUser, handleFilterUserChange} ) => {
  return (
      <div>
          Find user: <input value={filterUser} onChange={handleFilterUserChange}></input>   
      </div>
  )
}

export default UserFilter
