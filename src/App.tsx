import React, { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'

function App() {
  const myMenuGroup = [
    { text: 'Increase' },
    {
      text: 'Fruit options Location',
      submenuGroups: [
        [
          { text: 'Jungle' },
          { text: 'Field' },
          {
            text: 'Savannah',
            submenuGroups: [
              [{ text: 'Asia' }, { text: 'Australia' }],
              [{ text: 'Africa' }, { text: 'South America' }],
            ],
          },
          { text: 'City' },
          { text: 'Grasslands' },
          { text: 'Tundra' },
        ],
      ],
    },
    { text: 'Delete fruit' },
  ]

  const mySecondMenuGroup = [
    {
      text: 'Change background',
      submenuGroups: [[{ text: 'red' }, { text: 'blue' }, { text: 'green' }]],
    },
    { text: 'Check' },
    { text: 'Inspect' },
  ]

  const myThirdMenuGroup = [
    {
      text: 'New fruit',
      submenuGroups: [[{ text: 'banana' }, { text: 'orange' }]],
    },
    { text: 'Copy fruit' },
  ]

  const [contextMenuHidden, setContextMenuHidden] = useState(true)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

  function handleRightClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setContextMenuHidden(false)
    setContextMenuPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div onContextMenu={handleRightClick} className="App">
      <header className="App-header">
        <Menu
          position={contextMenuPosition}
          menuGroups={[myMenuGroup, mySecondMenuGroup, myThirdMenuGroup]}
          hidden={contextMenuHidden}
        />
      </header>
    </div>
  )
}

export default App
