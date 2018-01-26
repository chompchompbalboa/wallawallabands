import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export default class AlphabetLink extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(empty, letter) {
    if(!empty) {document.getElementById(letter).scrollIntoView()}
  }

  render() {
		const {
      empty,
      letter
		} = this.props

    return (
			<Container empty={empty} onClick={() => this.handleClick(empty, letter)}>
        {letter}
			</Container>
    )
  }
}

const Container = styled.div`
  cursor: ${props => props.empty ? 'default' : 'pointer'};
  color: gray;
  margin-right: 1vw;
  font-size: 1em;
  text-transform: uppercase;
  opacity: ${props => props.empty ? '0.5' : '1'}
`

AlphabetLink.propTypes = {
}

AlphabetLink.defaultProps = {
}
