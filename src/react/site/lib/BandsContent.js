//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { array, object } from 'prop-types'

import BandsList from 'src/react/site/lib/BandsList'
import FeaturedBands from 'src/react/site/lib/FeaturedBands'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BandsContent = ({ bands, featuredBands }) => (
  <React.Fragment>
    <BandsList 
      bands={bands}/>
    <FeaturedBands 
      featuredBands={featuredBands}/>
  </React.Fragment>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
BandsContent.propTypes = {
  bands: object.isRequired,
  featuredBands: array.isRequired
}

export default BandsContent