import React, { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'

function App() {
  const [menus, setMenues] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Menu
          menuItemsGroups={[
            {
              text: 'fruits',
              subMenuItems: [{ text: 'banana' }, { text: 'orange' }],
            },
            { text: 'hitler' },
          ]}
        />
      </header>
    </div>
  )
}

export default App
