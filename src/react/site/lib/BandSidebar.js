//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import SimilarBands from 'src/react/site/lib/BandSimilarBands'
//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class LargeQueue extends Component {

  static propTypes = {
    band: shape({
      similarBands: arrayOf(shape({
        name: string,
        bio: string,
        slug: string
      }))
    })
  }

  static defaultProps = {
    band: {
      similarBands: [
        {
          name: "The Blast",
          bio: "Quas beatae hic inventore. Sunt culpa aliquid incidunt illum. Facilis dolorem quos sit hic ut ullam. Aut voluptatem consequatur suscipit consequatur odit dolorem. Ut non id corrupti.",
          slug: "the-blast"
        },
        {
          name: "The Blast 2",
          bio: "Quas beatae hic inventore. Sunt culpa aliquid incidunt illum. Facilis dolorem quos sit hic ut ullam. Aut voluptatem consequatur suscipit consequatur odit dolorem. Ut non id corrupti.",
          slug: "the-blast-2"
        },

      ]
    }
  }

  render() {
		const {
      band
    } = this.props

    return (
			<Container>
        <SimilarBands similarBands={band.similarBands} />
			</Container>
    )
  }
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
`
