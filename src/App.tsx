import React, { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'

function App() {
  const myMenuGroup = [
    { text: 'Increase' },
    {
      text: 'Fruit location',
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
      submenuGroups: [[{ text: 'Red' }, { text: 'Blue' }, { text: 'Green' }]],
    },
    { text: 'Check' },
    { text: 'Inspect' },
  ]

  const myThirdMenuGroup = [
    {
      text: 'New fruit',
      submenuGroups: [[{ text: 'Banana' }, { text: 'Orange' }]],
    },
    { text: 'Copy fruit' },
  ]

  const [contextMenuHidden, setContextMenuHidden] = useState(true)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

  function handleRightClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setContextMenuHidden(false)
    setContextMenuPosition({ x: e.clientX, y: e.clientY })
  }

  function handleClick() {
    setContextMenuHidden(true)
  }

  return (
    <div onContextMenu={handleRightClick} onClick={handleClick} className="App">
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
