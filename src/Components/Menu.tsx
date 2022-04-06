import React from 'react'
import { menuProps } from '../types'
import MenuGroup from './MenuGroup'
import styled from 'styled-components'

const StyledMenu = styled.div`
  background-color: #fdfdfd;
  border-radius: 3px;
  /* padding: 0.4rem; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Divider = styled.hr`
  border-top: 1px #dbdbdb solid;
  border-bottom: 0px;
  padding: 0;
  margin: 0;
`

function Menu(props: menuProps) {
  return (
    <StyledMenu>
      {props.menuGroups.map((group, i) => {
        return (
          <>
            <MenuGroup menuItems={group} />
            {
              // if this is the last group, don't add a divider
              i !== group.length - 1 && <Divider />
            }
          </>
        )
      })}
    </StyledMenu>
  )
}

export default Menu
