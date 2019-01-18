//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'

import { tileBackground } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BandsTile = ({ children, className }) => (
  <Container
    className={className}>
    {children}
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
BandsTile.propTypes = {
  children: node,
  className: string /* Required by styled-components for styled(BandsTile) to work */
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 1.5vh ${padding};
	background-color: ${tileBackground};
	font-family: Raleway;
`

export default BandsTile