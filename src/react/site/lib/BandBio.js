//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, string } from 'prop-types'
import styled from 'styled-components'

import BandTile from 'src/react/site/lib/BandTile'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BandBio = ({ first, bio }) => (
  <Container
    header="Bio"
    first={first}>
    {bio}
  </Container>
)
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
BandBio.propTypes = {
  first: bool,
  bio: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled(BandTile)`
  white-space: pre-line;
`

export default BandBio