import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Band from 'src/react/site/pages/Band'
import Bands from 'src/react/site/pages/Bands'
import Home from 'src/react/site/pages/Home'
import Admin from 'src/react/admin/Admin'
import NotFound from 'src/react/site/pages/NotFound'
import UnderConstruction from 'src/react/site/pages/UnderConstruction'

export default class Root extends Component {

  constructor(props) {
    super(props)
    this.underConstruction = this.underConstruction.bind(this)
  }

  underConstruction() {
    return true
  }

  render () {
    const underConstruction = this.underConstruction()
    if(!underConstruction) {
      return (
        <Container>
          <Helmet>
            <title>Walla Walla Bands</title>
          </Helmet>
          <Switch>
  					<Route exact path="/" component={ Home } />
  					<Route path="/artist/:slug" component={ Band } />
  					<Route path="/artists" component={ Bands } />
  					<Route component={NotFound} />
  				</Switch>
  		  </Container>
      )
    }
    return (
      <Container>
        <Helmet>
          <title>Walla Walla Bands</title>
        </Helmet>
        <UnderConstruction />
      </Container>
    )
  }
}

const Container = styled.div`
`
