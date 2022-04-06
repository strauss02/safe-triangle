export type menuItem = {
  text: string
  subMenuItems?: menuItem[]
}

export type menuProps = { menuGroups: menuGroup[]; setMenuVisibility: Function }

export type menuGroupProps = { children: menuItem[]; divider: boolean }

export type MenuItemProps = {
  menuItem: menuItem
}

export type menuGroup = menuItem[]
