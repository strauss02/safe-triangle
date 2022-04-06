import React, { useState } from 'react'
import { menuItem } from '../types'
import styled from 'styled-components'
import Menu from './Menu'

const MenuText = styled.p`
  font-family: 'San Francisco';
  font-size: 0.95rem;
  color: inherit;

  letter-spacing: 0.2px;
`
const ArrowWrapper = styled(MenuText)`
  margin-left: 1rem;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 2rem;
  padding: 0 1rem;
  margin: 0;
  color: black;
  &:hover {
    background-color: #4591d3;
    color: white;
  }
`

function MenuItem(props: menuItem) {
  const [submenuVisible, setSubmenuVisible] = useState(false)

  return (
    <ItemWrapper
      onMouseEnter={() => {
        setSubmenuVisible(true)
      }}
      onMouseLeave={() => {
        setSubmenuVisible(false)
      }}
    >
      <MenuText>{props.text}</MenuText>

      {props.subMenuItems && <ArrowWrapper>{'›'}</ArrowWrapper>}
      {props.subMenuItems && submenuVisible && (
        <Menu submenu menuGroups={[props.subMenuItems]} />
      )}
    </ItemWrapper>
  )
}

export default MenuItem
