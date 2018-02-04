import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import BandsList from 'src/react/site/lib/BandsList'
import FeaturedBands from 'src/react/site/lib/FeaturedBands'

export default class BandsContent extends Component {

  render() {
		const {
      bands,
      featuredBands
		} = this.props

    return (
			<React.Fragment>
        <BandsList bands={bands}/>
        <FeaturedBands featuredBands={featuredBands}/>
			</React.Fragment>
    )
  }
}

BandsContent.propTypes = {
}

BandsContent.defaultProps = {
}