import React, { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'

function App() {
  const myMenuGroup = [
    {
      text: 'Fruit options',
      subMenuItems: [{ text: 'banana' }, { text: 'orange' }],
    },
    { text: 'Delete fruit' },
  ]

  const mySecondMenuGroup = [
    {
      text: 'New fruit',
      subMenuItems: [{ text: 'banana' }, { text: 'orange' }],
    },
    { text: 'Copy fruit' },
  ]

  const [menus, setMenues] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Menu menuGroups={[myMenuGroup, mySecondMenuGroup]} />
      </header>
    </div>
  )
}

export default App
