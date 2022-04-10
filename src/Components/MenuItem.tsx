import React, { useMemo, useState } from 'react'
import { menuGroup, menuItem } from '../types'
import styled from 'styled-components'
import Menu from './Menu'

const MenuText = styled.p`
  font-size: 0.95rem;
  color: inherit;
  white-space: nowrap;

  letter-spacing: 0.2px;
`
const ArrowWrapper = styled(MenuText)`
  margin-left: 1rem;
`

/* 
  With each mouse movement, a new CSS class gets generated. This is very bad for performance and causes visible lags, negatively effecting the overall user experience.
  TODO : Switch to a sliding system based on a fixed number of steps, with each slider step having a different width (leftDistance).
  Limit possible triangle states to about 10 options.

 */
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
    &::after {
      background-color: #8474cc4b;
      content: '';
      position: absolute;
      display: block;
      top: 2rem;
      right: 0rem;
      height: calc(2rem * ${submenuLength - 1});
      width: calc(100% - ${leftDistance * 0.9}px);
      z-index: 100;
      clip-path: polygon(0px 0px, 100% 0px, 100% 100%);
    }
      `}
  }
`

const ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
`

function MenuItem(props: menuItem) {
  const hasSubmenu = Boolean(props.submenuGroups)
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
    const { left } = e.currentTarget.getBoundingClientRect()
    setLeftDistance(Math.round(e.clientX - left))
  }

  const memoizedSubmenuGroups = useMemo(() => {
    return props.submenuGroups as menuGroup[]
  }, [props.submenuGroups])

  return (
    <ItemWrapper
      hasSubmenu={hasSubmenu}
      submenuLength={Number(getSubmenuLength(props.submenuGroups))}
      leftDistance={leftDistance}
      onMouseEnter={() => {
        if (hasSubmenu) setSubmenuVisible(true)
      }}
      onMouseLeave={() => {
        if (hasSubmenu) setSubmenuVisible(false)
      }}
    >
      <ItemContainer
        onMouseMove={(e) => {
          if (hasSubmenu) getLeftDistance(e)
        }}
      >
        <MenuText>{props.text}</MenuText>
        {props.submenuGroups && <ArrowWrapper>{'›'}</ArrowWrapper>}
      </ItemContainer>
      {props.submenuGroups && submenuVisible && (
        <Menu submenu menuGroups={memoizedSubmenuGroups} />
      )}
    </ItemWrapper>
  )
}

export default MenuItem
