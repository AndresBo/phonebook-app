// displays user name and logout button
const LoggedUser = ({ user, handleLogout }) => {
  return (
    <section className="loggedUser">
      {user.name} logged in <button onClick={handleLogout}>Logout</button>
    </section>
  )
}

export default LoggedUser
