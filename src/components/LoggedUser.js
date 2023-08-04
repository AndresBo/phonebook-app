// displays user name and logout button
const LoggedUser = ({ user, handleLogout }) => {
  return (
    <div>
      <div>{user.name} logged in</div>
      <button onClick={handleLogout} className="btn btn-primary btn-sm">Logout</button>
    </div>
  )
}

export default LoggedUser
