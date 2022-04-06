import React, { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'

function App() {
  const myMenuGroup = [
    { text: 'Increase' },
    {
      text: 'Fruit options Location',
      submenuGroups: [
        { text: 'Jungle' },
        { text: 'Field' },
        {
          text: 'Savannah',
          submenuGroups: [{ text: 'Africa' }, { text: 'South America' }],
        },
        { text: 'City' },
        { text: 'Grasslands' },
        { text: 'Tundra' },
      ],
    },
    { text: 'Delete fruit' },
  ]

  const mySecondMenuGroup = [
    {
      text: 'Change background',
      submenuGroups: [{ text: 'red' }, { text: 'blue' }, { text: 'green' }],
    },
    { text: 'Check' },
    { text: 'Inspect' },
  ]

  const myThirdMenuGroup = [
    {
      text: 'New fruit',
      submenuGroups: [{ text: 'banana' }, { text: 'orange' }],
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
