import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Band from 'src/react/site/pages/Band'
import Bands from 'src/react/site/pages/Bands'
import Home from 'src/react/site/pages/Home'
import Admin from 'src/react/admin/Admin'
import NotFound from 'src/react/site/pages/NotFound'

export default class Root extends Component {

  render () {
    return (
      <Container>
        <Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/artist/:slug" component={ Band } />
					<Route path="/artists" component={ Bands } />
					<Route component={NotFound} />
				</Switch>
		  </Container>
    )
  }
}

const Container = styled.div`
`
