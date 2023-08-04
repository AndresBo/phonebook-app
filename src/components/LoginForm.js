// renders login form
const LoginForm = ({ handleLogin, username, setUsername, password, setPassword}) => (
  <form onSubmit={handleLogin} className="form-group">
    <div>
      Username
        <input
        className="form-control"
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
        className="form-control"
        type="password"
        value={password}
        name="Password"
        onChange={({ target }) => setPassword(target.value)}
        placeholder="Password"
      />
    </div>
    <button type="submit" className="btn btn-outline-secondary">login</button>
  </form>      
)

export default LoginForm
