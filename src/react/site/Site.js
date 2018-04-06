import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'

import { setInitialState as setInitialStateAudio } from 'src/store/audioActions'
import { setInitialState as setInitialStateQueue } from 'src/store/queueActions'

import { background } from 'src/styles/colors'

import About from 'src/react/site/pages/About'
import Band from 'src/react/site/pages/Band'
import Bands from 'src/react/site/pages/Bands'
import Donate from 'src/react/site/pages/Donate'
import Home from 'src/react/site/pages/Home'
import Admin from 'src/react/admin/Admin'
import NotFound from 'src/react/site/pages/NotFound'
import UnderConstruction from 'src/react/site/pages/UnderConstruction'

@connect(
  state => ({
    audio: state.audio,
    queue: state.queue
}))
export default class Site extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(setInitialStateAudio())
    dispatch(setInitialStateQueue())
  }

  render () {
    const {
      audio,
      queue
    } = this.props
    const underConstruction = false
    if(!underConstruction) {
      if (_.size(audio) === 0 || _.size(queue) === 0) {
        return (
          <Container>
            <Helmet>
              <title>Walla Walla Bands</title>
            </Helmet>
    		  </Container>
      )}
      return (
        <Container>
          <Helmet>
            <title>Walla Walla Bands</title>
          </Helmet>
          <Switch>
  					<Route exact path="/" component={ UnderConstruction } />
            <Route path="/preview" component={ Bands } />
            <Route path="/about" component={ About } />
            <Route path="/donate" component={ Donate } />
  					<Route path="/band/:slug" component={ Band } />
  					<Route component={NotFound} />
  				</Switch>
  		  </Container>
    )}
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

// Here is where the background color for the app lives.
// Add this line to the Container styled component:
//background-color: ${background};
const Container = styled.div`
  background-color: ${background};
  min-height: 100vh;
`
