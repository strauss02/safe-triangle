import { menuGroupProps } from '../types'
import MenuItem from './MenuItem'
import styled from 'styled-components'

const Divider = styled.hr`
  border-top: 1px #dbdbdb solid;
  border-bottom: 0px;
  padding: 0;
  margin: 0;
`

function MenuGroup(props: menuGroupProps) {
  return (
    <>
      {props.children.map((item, i) => (
        <MenuItem
          text={item.text}
          submenuGroups={item.submenuGroups}
          key={item.text + i}
        />
      ))}
      {props.divider && <Divider />}
    </>
  )
}

export default MenuGroup
