import React, { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'

function App() {
  const myMenuGroup = [
    { text: 'Increase' },
    {
      text: 'Fruit options Location',
      subMenuItems: [
        { text: 'Jungle' },
        { text: 'Field' },
        {
          text: 'Savannah',
          subMenuItems: [{ text: 'Africa' }, { text: 'South America' }],
        },
      ],
    },
    { text: 'Delete fruit' },
  ]

  const mySecondMenuGroup = [
    {
      text: 'Change background',
      subMenuItems: [{ text: 'red' }, { text: 'blue' }, { text: 'green' }],
    },
    { text: 'Check' },
    { text: 'Inspect' },
  ]

  const myThirdMenuGroup = [
    {
      text: 'New fruit',
      subMenuItems: [{ text: 'banana' }, { text: 'orange' }],
    },
    { text: 'Copy fruit' },
  ]

  const [menuVisibility, setMenuVisibility] = useState(true)

  function handleChange() {
    setMenuVisibility((prevState) => !prevState)
  }

  return (
    <div className="App">
      <header className="App-header">
        {menuVisibility && (
          <Menu
            menuGroups={[myMenuGroup, mySecondMenuGroup, myThirdMenuGroup]}
            // setMenuVisibility={setMenuVisibility}
          />
        )}
        <input
          type={'checkbox'}
          checked={menuVisibility}
          onChange={handleChange}
        />
      </header>
    </div>
  )
}

export default App
