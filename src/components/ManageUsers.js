const ManageUsers = ({ filterUser, users, deleteUser }) => {
  // create new array of filtered users
  const filteredUsers = users.filter(user => user.name.includes(filterUser))
  
  if (filteredUsers.length === 0) {
    return <p>No user by that name</p>
  } else {
    return (
      <div>
        Users
      <ul>
          {filteredUsers.map(user => 
            <li key={user.id}>
              {user.name} 
                <button onClick={() => deleteUser(user.id)} 
                  class="btn btn-outline-danger btn-sm">delete
                </button>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default ManageUsers
