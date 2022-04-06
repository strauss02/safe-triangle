import React from 'react'
import { menuProps, menuItemsGroups, menuItemsGroup } from '../types'

function Menu(props: menuProps) {
  return (
    <div>
      {props.menuItemsGroup.map((item) => (
        <li> {item.text} </li>
      ))}
    </div>
  )
}

export default Menu
