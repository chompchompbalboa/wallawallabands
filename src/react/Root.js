import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect()
export default class Root extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

  render () {
    return (
      <div>
        Walla Walla Bands
		  </div>
    )
  }
}
