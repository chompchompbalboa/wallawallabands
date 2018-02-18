import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'

import { setInitialState as setInitialStateAudio } from 'src/store/audioActions'
import { setInitialState as setInitialStateQueue } from 'src/store/queueActions'

import { background } from 'src/styles/colors'

import Band from 'src/react/site/pages/Band'
import Bands from 'src/react/site/pages/Bands'
import Home from 'src/react/site/pages/Home'
import Admin from 'src/react/admin/Admin'
import NotFound from 'src/react/site/pages/NotFound'
import UnderConstruction from 'src/react/site/pages/UnderConstruction'

@connect(
  state => ({
    audio: state.audio,
    queue: state.queue
}))
export default class Root extends Component {

  constructor(props) {
    super(props)
    this.underConstruction = this.underConstruction.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(setInitialStateAudio())
    dispatch(setInitialStateQueue())
  }

  underConstruction() {
    return false
  }

  render () {
    const {
      audio,
      queue
    } = this.props
    const underConstruction = this.underConstruction()
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
  					<Route exact path="/" component={ Bands } />
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

const Container = styled.div`
  min-height: 100vh;
  background-color: ${background};
`
