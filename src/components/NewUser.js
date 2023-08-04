import { useState } from "react"

const NewUser = ({ createUser }) => {
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newName, setNewName] = useState('')
  const [newAdmin, setNewAdmin] = useState(false)

  const addUser = (event) => {
    event.preventDefault()
    createUser({
      username: newUsername,
      name: newName,
      password: newPassword,
      admin: newAdmin
    })
    setNewUsername('')
    setNewPassword('')
    setNewName('')
  }

  return (
    <form onSubmit={addUser}>
      Create User
      <div>
        username
        <input
          type="text"
          value={newUsername}
          onChange={event => setNewUsername(event.target.value)}
        />
      </div>
      <div>
        name
        <input
          type="text"
          value={newName}
          onChange={event => setNewName(event.target.value)}
        />
      </div>
      <div>
        admin
        <input 
          type="checkbox"
          value={newAdmin}
          onChange={event => setNewAdmin(!newAdmin)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
        />
      </div>
      <button type="submit" class="btn btn-secondary btn-sm">save</button>
    </form>
  )
}

export default NewUser
