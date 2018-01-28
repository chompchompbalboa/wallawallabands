import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { primary, text, tileBackground } from 'src/styles/colors'
import { padding } from 'src/styles/layout'

import logo from 'static/img/logo.png'

export default class FeaturedBand extends Component {

  constructor(props) {
    super(props)
    this.getBlurb = this.getBlurb.bind(this)
  }

  getBlurb(bio) {
    return (
      _.truncate(bio, {
      'length': 100,
      'separator': ' '
    }))
  }

  render() {
		const {
      band: {
        bio,
        coverImage,
        name,
        slug
      }
		} = this.props
    const blurb = this.getBlurb(bio)

    return (
			<Container to={"band/" + slug}>
        <ImageContainer>
          <Image src={coverImage}/>
        </ImageContainer>
        <TextContainer>
          <Header>{name}</Header>
          <Blurb>{blurb}<More>&nbsp;&nbsp;&nbsp;read more >></More></Blurb>
        </TextContainer>
        <Highlight/>
			</Container>
    )
  }
}

const transitionTime = '0.2s'

const Container = styled(Link)`
  width: 100%;
  margin-bottom: ${padding};
  background-color: ${tileBackground};
  box-shadow: 1px black;
  text-decoration: none;
  color: black;
  &:hover {
    pointer: cursor
  }
`

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
`

const TextContainer = styled.div`
  padding: 1vh 1vh 2vh 1vh;
`

const Header = styled.div`
  font-family: Oswald;
  font-size: 22px;
`

const Blurb = styled.div`
  font-size: 14px;
  font-weight: 300;
`

const More = styled.span`
  opacity: 0;
  transition: all 0.3s;
  ${Container}:hover & {
    opacity: 0.6;
  }
`

const Highlight = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${text};
  transition: background-color ${transitionTime};
  ${Container}:hover & {
    background-color: ${primary}
  }
`

FeaturedBand.propTypes = {
}

FeaturedBand.defaultProps = {
}
