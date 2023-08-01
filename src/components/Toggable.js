import { useState } from 'react'
// This component wrapps other components to give them visibility only when requested.
// note the {props.children} that references the wrapped component.
const Togglable = (props) => {
  const [visible, setVisible] = useState(false)
  // inline css 'display' that returns 'none' to hide <div> section 
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
}

export default Togglable
