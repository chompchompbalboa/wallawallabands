import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Artist from 'src/react/pages/Artist'
import Artists from 'src/react/pages/Artists'
import Home from 'src/react/pages/Home'
import NotFound from 'src/react/errors/NotFound'

export default class Root extends Component {

  render () {
    return (
      <Container>
        <Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/artist/:artist" component={ Artist } />
					<Route path="/artists" component={ Artists } />
					<Route component={NotFound} />
				</Switch>
				<Link to="/artists"/>
		  </Container>
    )
  }
}

const Container = styled.div`
`
