import { RefObject } from 'react'

export type menuItem = {
  text: string
  subMenuItems?: menuItem[]
  parentRef?: RefObject<HTMLInputElement>
}

export type menuProps = {
  menuGroups: menuGroup[]
  submenu?: boolean
}

export type menuGroupProps = {
  children: menuItem[]
  divider: boolean
}

export type MenuItemProps = {
  menuItem: menuItem
  hasSubMenu?: boolean
}

export type menuGroup = menuItem[]
