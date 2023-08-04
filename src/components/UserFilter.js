// component that renders search name bad
const UserFilter = ({ filterUser, setFilterUser } ) => {
  return (
      <form>
          Find user: <input value={filterUser} onChange={({ target }) => setFilterUser(target.value)}></input>   
      </form>
  )
}

export default UserFilter
