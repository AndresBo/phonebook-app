const LoggedUser = ({ user, handleLogout }) => {
  return (
    <div>
      <div>{user.name} logged in</div>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default LoggedUser
