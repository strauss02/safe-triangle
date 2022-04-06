import React from 'react'
import { menuItem } from '../types'
import styled from 'styled-components'

const MenuText = styled.p`
  font-family: 'San Francisco';
  font-size: 0.95rem;
  color: black;
  letter-spacing: 0.2px;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: auto;
  height: 2rem;
  padding: 0 1rem;
  margin: 0;
  &:hover {
    background-color: aliceblue;
  }
`

function MenuItem(props: menuItem) {
  return (
    <ItemWrapper>
      <MenuText>{props.text}</MenuText>
    </ItemWrapper>
  )
}

export default MenuItem
