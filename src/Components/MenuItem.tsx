import React, { useState } from 'react'
import { menuItem } from '../types'
import styled, { css } from 'styled-components'
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

const ItemWrapper = styled.div<{ hasSubmenu?: boolean }>(
  (hasSubmenu) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 2rem;
    padding: 0 1rem;
    margin: 0;
    color: black;
    position: relative;
    &:hover {
      background-color: #4591d3;
      color: white;

      &::after {
        background-color: #0000ff75;
        content: '';
        position: absolute;
        display: block;
        top: 2rem;
        left: 0rem;
        height: 4rem; /*  2rem * submenuItems */
        width: 100%;
        z-index: 100;
        clip-path: polygon(0px 0px, 100% 0px, 100% 100%);
      }
    }

    ${hasSubmenu &&
    css`
      background-color: blue;
    `}
  `
)

function MenuItem(props: menuItem) {
  const [submenuVisible, setSubmenuVisible] = useState(false)

  return (
    <ItemWrapper
      hasSubmenu={false}
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
