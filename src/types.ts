export type menuItem = {
  text: string
  subMenuItems?: menuItem[]
}

export type menuProps = menuItemsGroups[]

export type menuItemsGroups = menuItemsGroup[]

export type menuItemsGroup = menuItem[]
