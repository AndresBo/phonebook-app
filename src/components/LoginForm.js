// renders login form
const LoginForm = ({ handleLogin, username, setUsername, password, setPassword}) => (
  <form onSubmit={handleLogin}>
    <div>
      Username
        <input
        type="text"
        value={username}
        name="Username"
        onChange={({ target }) => setUsername(target.value)}
        placeholder="Enter username"
      />
    </div>
    <div>
      Password
        <input
        type="password"
        value={password}
        name="Password"
        onChange={({ target }) => setPassword(target.value)}
        placeholder="Password"
      />
    </div>
    <button type="submit">login</button>
  </form>      
)

export default LoginForm
