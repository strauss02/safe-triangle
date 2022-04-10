import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Prevent default browser context menu from showing up
document.addEventListener('contextmenu', (event) => {
  event.preventDefault()
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
