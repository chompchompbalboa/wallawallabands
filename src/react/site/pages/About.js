//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import { compose, graphql } from 'react-apollo'
import styled from 'styled-components'

import getFeaturedBands from 'src/graphql/queries/getFeaturedBands.gql'

import { tabletLandscape } from 'src/styles/breakpoints'
import { primary } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import Content from 'src/react/site/containers/Content'
import ErrorHandler from 'src/react/site/lib/errors/GraphQLError'
import FeaturedBands from 'src/react/site/lib/FeaturedBands'
import Layout from 'src/react/site/layouts/Default'
import BandsTile from 'src/react/site/lib/BandsTile'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
@compose(
  graphql(getFeaturedBands, {name: "featuredBands"})
)
export default class About extends Component {

  static propTypes = {
    featuredBands: object
  }

	componentDidMount = () => {
		window.scrollTo(0,0)
	}

  render() {
		const {
      featuredBands
    } = this.props

    if(featuredBands.loading) {
      return null
    }
    else if(typeof featuredBands !== "undefined") {
      return (
        <Layout>
          <Content>
            <Header>ABOUT</Header>
            <AboutText>
              First and foremost, this is not my own original idea. I stole it. I stole it so hard. In the spring of 2017, Gaby Salazar broadcast an episode of her radio show “Around the World with Gaby Gaby Hey” on KWCW chronicling the “Underground Era” of the local Walla Walla music scene.  During an on air conversation between Gaby, Jack Whittington (The Underground owner and operator), Daniel Guzman, Justin Guzman and Sager Small (local musicians and members of The Grand Wagoneers) the idea of creating some sort of archive for locally produced music was mentioned.  There was a brief acknowledgement of the greatness of this genius concept around the table before the show pushed forward with more discussion of local bands, the Underground itself and lots of recorded local music. All in all, the show was a fantastic nostalgia road trip for anyone lucky enough to have attended shows at the Underground during the early-mid 2000’s. <br/><br/>
              After listening to the show, and coming down from a nostalgia high, I was stuck thinking about how it was crazy that no centralized archive of local music existed. Gaby had to do some serious leg work to source the recordings and band information for her radio show, tracking down files from numerous contributors. So I thought, “how could someone get all of these bands and music files in one place?” Well, the answer, it turns out, is “not easily.”  Yes, we live in Wiki times, and starting a Wikipedia or Facebook page would be the quickest and easiest way to at least have a written record of the music that has rattled around in the basements, garages, overcrowded small venues, empty streets, community stages, bars, clubs, restaurants and wineries that happen to have a 99362 zip code...but what’s the fun in a wiki page? To do this thing right we would need a simple, clean and responsive website with the look and feel of an artist showcase. More importantly, the music.  [deep inhale] Listening to the minute number of recordings available by navigating a plethora of links to defunct artist pages on band social media websites like Facebook, Myspace and Pure Volume while hopefully stumbling upon other bands you had forgotten about is a wholly unsatisfying and incomplete experience [pause to catch breath]. That’s where this idea took shape: A website to host not only a written record, but also a listenable record of bands from Walla Walla, WA and its immediate surrounding areas. Look good, sound good. All in one place. Simple as that.
            </AboutText>
            <FeaturedBands
              featuredBands={featuredBands.getFeaturedBands}/>
          </Content>
        </Layout>
      )
    }
    return (
      <ErrorHandler 
        code="UNABLE_TO_LOAD_FEATURED_BANDS"/>
		)
  } 
}

//------------------------------------------------------------------------------
// Styled Components
//------------------------------------------------------------------------------
const Header = styled(BandsTile)`
  width: 100%;
  margin-bottom: 2px;
  font-size: 1.5em;
  letter-spacing: 0.05em;
  color: ${primary};
  @media ${tabletLandscape} {
    margin-bottom: ${padding};
  }

`

const AboutText = styled(BandsTile)`
font-size: 16px;
line-height: 1.5em;
width: 100%;
  @media ${tabletLandscape} {
    width: calc(70% - ${padding});
    font-weight: 300;
    font-size: 15px;
  }
`
