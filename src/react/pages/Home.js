import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect()
export default class Home extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

  render () {
    return (
      <div>
        Home is where the heart is
		  </div>
    )
  }
}
