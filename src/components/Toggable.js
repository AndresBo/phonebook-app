import { useState, forwardRef, useImperativeHandle } from 'react'

// This component wrapps other components to give them visibility only when requested.
// note the {props.children} that references the wrapped component.
// forwardRef allows access to ref assigned.
const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)
  // inline css 'display' that returns 'none' to hide <div> section 
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  // make toogleVisibility available outside Toggable component
  useImperativeHandle(refs, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility} class="btn btn-primary btn-sm">{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility} class="btn btn-warning btn-sm">cancel</button>
      </div>
    </div>
  )
})

export default Togglable
