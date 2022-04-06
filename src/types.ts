export type menuItem = {
  text: string
  subMenuItems?: menuItem[]
}

export type menuProps = { menuGroups: menuGroup[] }

export type menuGroupProps = { menuItems: menuItem[] }

export type MenuItemProps = {
  menuItem: menuItem
}

export type menuGroup = menuItem[]
