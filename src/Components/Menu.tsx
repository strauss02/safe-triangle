import React from 'react'
import { menuProps, menuGroup } from '../types'
import MenuGroup from './MenuGroup'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  position: relative;
`

const StyledMenu = styled.div<{ submenu?: boolean }>`
  background-color: #fdfdfd;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  ${({ submenu }) =>
    submenu &&
    `
    position: absolute;
    top: -1rem
    
    `};
`

function generateKey(group: menuGroup) {
  return group.reduce((prev, current) => prev + current.text, '')
}

const MenuContainer = styled.div<{
  submenu?: boolean
  position?: { x: number; y: number }
}>`
  position: ${(props) => (props.submenu ? 'relative' : 'absolute')};
  top: ${(props) => props.position?.y + 'px'};
  left: ${(props) => props.position?.x + 'px'};
`

function Menu(props: menuProps) {
  return (
    <MenuContainer submenu={props.submenu} position={props.position}>
      <MenuWrapper>
        <StyledMenu hidden={props.hidden} submenu={props.submenu}>
          {props.menuGroups.length > 0 &&
            props.menuGroups.map((group, i) => {
              return (
                // if this is the last group, don't add a divider
                <MenuGroup
                  key={generateKey(group) + i}
                  divider={props.menuGroups.length - 1 !== i}
                >
                  {group}
                </MenuGroup>
              )
            })}
        </StyledMenu>
      </MenuWrapper>
    </MenuContainer>
  )
}

export default React.memo(Menu)
