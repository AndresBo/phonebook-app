// component that renders search name bad
const UserFilter = ({ filterUser, setFilterUser } ) => {
  return (
      <div>
          Find user: <input value={filterUser} onChange={({ target }) => setFilterUser(target.value)}></input>   
      </div>
  )
}

export default UserFilter
