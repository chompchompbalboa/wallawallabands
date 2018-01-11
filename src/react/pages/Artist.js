import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect()
export default class Artist extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

  render () {
    return (
      <div>
        Artist
		  </div>
    )
  }
}
