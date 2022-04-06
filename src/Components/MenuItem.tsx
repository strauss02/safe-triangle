import React from 'react'
import { menuItem } from '../types'
import styled from 'styled-components'

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
  return (
    <ItemWrapper>
      <MenuText>{props.text}</MenuText>

      {props.subMenuItems && <ArrowWrapper>{'›'}</ArrowWrapper>}
    </ItemWrapper>
  )
}

export default MenuItem