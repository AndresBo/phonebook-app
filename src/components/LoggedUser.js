// displays user name and logout button
const LoggedUser = ({ user, handleLogout }) => {
  return (
    <div>
      <div>{user.name} logged in</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LoggedUser
