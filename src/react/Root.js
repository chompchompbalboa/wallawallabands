import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Admin from 'src/react/admin/Admin'
import Site from 'src/react/site/Site'

export default class Root extends Component {

  render () {
    return (
      <Switch>
				<Route path="/admin" component={ Admin } />
				<Route component={ Site } />
			</Switch>
    )
  }
}
