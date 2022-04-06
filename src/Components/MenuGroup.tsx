import React from 'react'
import { menuGroupProps } from '../types'
import MenuItem from './MenuItem'

function MenuGroup(props: menuGroupProps) {
  return (
    <>
      {props.menuItems.map((item) => (
        <MenuItem text={item.text} subMenuItems={item.subMenuItems} />
      ))}
    </>
  )
}

export default MenuGroup
