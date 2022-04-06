import React from 'react'
import { menuProps } from '../types'
import MenuGroup from './MenuGroup'
import styled from 'styled-components'

const StyledMenu = styled.div`
  background-color: #fdfdfd;
  border-radius: 4px;
  /* padding: 0.4rem; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
`

function Menu(props: menuProps) {
  return (
    <StyledMenu>
      {props.menuGroups.map((group, i) => {
        return (
          // if this is the last group, don't add a divider
          <MenuGroup key={group[0].text + i} divider={group.length !== i}>
            {group}
          </MenuGroup>
        )
      })}
    </StyledMenu>
  )
}

export default Menu
