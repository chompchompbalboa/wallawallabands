//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

import { tabletLandscape, desktop } from 'src/styles/breakpoints'
import { padding } from 'src/styles/layout'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Content = ({ children }) => (
  <Container>
    {children}
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Content.propTypes = {
  children: node
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: ${padding};
	width: 100%;
  transition: opacity 1s;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  @media ${tabletLandscape} {
    padding: ${padding} ${padding} calc(${padding} + 7vh) ${padding};
    width: calc(95% - ${padding});
  }
  @media ${desktop} {
    width: calc(75% - ${padding});
  }
`

export default Content