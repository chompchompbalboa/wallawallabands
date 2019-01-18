//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, node, string } from 'prop-types'
import styled from 'styled-components'

import { background, primary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BandTile = ({ first,  children, className, header }) => (
  <Container
    className={className} 
    first={first}>
    <Header>
      {header}
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
)
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
BandTile.propTypes = {
  first: bool,
  children: node,
  className: string, /* Required by styled-components for styled(BandTile) to work */
  header: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  pointer: default;
  order: ${props => props.first ? '1' : '2'};
  width: 100%;
  margin: calc(${padding} / 2) 0;
  background-color: white;
  border-bottom: 3px solid black;
  &:hover {
    border-bottom: 3px solid ${primary};
  }
  transition: border 0.25s;
`

const Header = styled.div`
  width: 100%;
  padding: 1vh ${padding};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 2px solid ${background};
`

const Content = styled.div`
  width: 100%;
  padding: ${padding};
`

export default BandTile