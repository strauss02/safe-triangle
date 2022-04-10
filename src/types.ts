import { RefObject } from 'react'

export type menuItem = {
  text: string
  submenuGroups?: menuGroup[]
  parentRef?: RefObject<HTMLInputElement>
}

export type menuProps =
  | {
      menuGroups: menuGroup[]
      hidden?: boolean
      submenu?: true
      position?: { x: number; y: number }
    }
  | {
      menuGroups: menuGroup[]
      hidden?: boolean
      submenu?: false
      position?: never
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
