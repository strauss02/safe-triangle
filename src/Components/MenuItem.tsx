import React, { SyntheticEvent, useMemo, useState } from 'react'
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

const ItemWrapper = styled.div<{
  hasSubmenu?: boolean
  submenuLength: any
  leftDistance: number
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  flex-basis: auto;
  height: 2rem;

  margin: 0;
  color: black;
  position: relative;
  &:hover {
    background-color: #4591d3;
    color: white;

    ${({ hasSubmenu, submenuLength, leftDistance }) =>
      hasSubmenu &&
      `
    background: blue;
    &::after {
      background-color: #0000ff75;
      content: '';
      position: absolute;
      display: block;
      top: 2rem;
      right: 0rem;
      height: calc(2rem * ${submenuLength - 1});
      width: calc(100% - ${leftDistance * 0.6}px);
      z-index: 100;
      clip-path: polygon(0px 0px, 100% 0px, 100% 100%);
    }
      `}
  }
`

const ItemContainer = styled.div`
  background-color: #00800050;
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
`

function MenuItem(props: menuItem) {
  const [submenuVisible, setSubmenuVisible] = useState(false)
  const [leftDistance, setLeftDistance] = useState(0)

  const getSubmenuLength = (submenuGroups: menuGroup[] | undefined): number => {
    if (submenuGroups) {
      return submenuGroups.reduce((prev, current) => prev + current.length, 0)
    }
    return 0
  }

  const getLeftDistance = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    setLeftDistance(Math.round(e.clientX - left))
    {
      console.log(leftDistance)
    }
  }

  return (
    <ItemWrapper
      hasSubmenu={Boolean(props.submenuGroups)}
      submenuLength={Number(getSubmenuLength(props.submenuGroups))}
      leftDistance={leftDistance}
      onMouseEnter={() => {
        setSubmenuVisible(true)
      }}
      onMouseLeave={() => {
        setSubmenuVisible(false)
      }}
    >
      <ItemContainer
        // TODO: this event (mouseMove) should be considered only when MenuItem has a submenu.
        onMouseMove={(e) => {
          getLeftDistance(e)
        }}
      >
        <MenuText>{props.text}</MenuText>
        {props.submenuGroups && <ArrowWrapper>{'›'}</ArrowWrapper>}
      </ItemContainer>
      {props.submenuGroups && submenuVisible && (
        <Menu submenu menuGroups={props.submenuGroups} />
      )}
    </ItemWrapper>
  )
}

export default MenuItem
