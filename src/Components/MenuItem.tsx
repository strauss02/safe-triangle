import React, { useState } from 'react'
import { menuGroup, menuItem } from '../types'
import styled from 'styled-components'
import Menu from './Menu'

const MenuText = styled.p`
  font-family: 'San Francisco';
  font-size: 0.95rem;
  color: inherit;
  white-space: nowrap;

  letter-spacing: 0.2px;
`
const ArrowWrapper = styled(MenuText)`
  margin-left: 1rem;
`

const ItemWrapper = styled.div<{ hasSubmenu?: boolean; submenuLength: any }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  flex-basis: auto;
  height: 2rem;
  padding: 0 1rem;
  margin: 0;
  color: black;
  position: relative;
  &:hover {
    background-color: #4591d3;
    color: white;

    ${({ hasSubmenu, submenuLength }) =>
      hasSubmenu &&
      `
    background: blue;
    &::after {
      background-color: #0000ff75;
      content: '';
      position: absolute;
      display: block;
      top: 2rem;
      left: 0rem;
      height: calc(2rem * ${submenuLength - 1});
      width: 100%;
      z-index: 100;
      clip-path: polygon(0px 0px, 100% 0px, 100% 100%);
    }
      `}
  }
`

function MenuItem(props: menuItem) {
  const [submenuVisible, setSubmenuVisible] = useState(false)

  const getSubmenuLength = (submenuGroups: menuGroup[] | undefined): number => {
    if (submenuGroups) {
      return submenuGroups.reduce((prev, current) => prev + current.length, 0)
    }
    return 0
  }

  return (
    <ItemWrapper
      hasSubmenu={Boolean(props.submenuGroups)}
      submenuLength={Number(getSubmenuLength(props.submenuGroups))}
      onMouseEnter={() => {
        setSubmenuVisible(true)
      }}
      onMouseLeave={() => {
        setSubmenuVisible(false)
      }}
    >
      <MenuText>{props.text}</MenuText>
      {props.submenuGroups && <ArrowWrapper>{'›'}</ArrowWrapper>}
      {props.submenuGroups && submenuVisible && (
        <Menu submenu menuGroups={props.submenuGroups} />
      )}
    </ItemWrapper>
  )
}

export default MenuItem
