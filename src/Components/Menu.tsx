import React from 'react'
import { menuProps } from '../types'
import MenuGroup from './MenuGroup'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  position: relative;
`

const StyledMenu = styled.div<{ submenu?: boolean }>`
  background-color: #fdfdfd;
  border-radius: 4px;
  /* padding: 0.4rem; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  ${({ submenu }) =>
    submenu &&
    `
    position: absolute;
    // left: 1rem;
    top: -1rem

  `};
`

function Menu(props: menuProps) {
  return (
    <MenuWrapper>
      <StyledMenu submenu={props.submenu}>
        {props.menuGroups.length > 0 &&
          props.menuGroups.map((group, i) => {
            return (
              // if this is the last group, don't add a divider
              <MenuGroup
                key={group[0].text + i}
                divider={props.menuGroups.length - 1 !== i}
              >
                {group}
              </MenuGroup>
            )
          })}
      </StyledMenu>
    </MenuWrapper>
  )
}

export default React.memo(Menu)
