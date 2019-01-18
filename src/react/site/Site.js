//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import _ from 'lodash'
import { func, object } from 'prop-types'
import Helmet from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { setInitialState as setInitialStateAudio } from 'src/store/audioActions'
import { setInitialState as setInitialStateQueue } from 'src/store/queueActions'

import { background } from 'src/styles/colors'

import About from 'src/react/site/pages/About'
import Band from 'src/react/site/pages/Band'
import Bands from 'src/react/site/pages/Bands'
import NotFound from 'src/react/site/pages/NotFound'
import MusicPlayer from 'src/react/site/containers/MusicPlayer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@connect(
  state => ({
    audio: state.audio,
    queue: state.queue
}))
export default class Site extends Component {

  state = {
    hasLoaded: false
  }

  componentDidMount = () => {
    const { 
      dispatch 
    } = this.props
    dispatch(setInitialStateAudio())
    dispatch(setInitialStateQueue())
  }

  componentDidUpdate = () => {
    const {
      audio,
      queue
    } = this.props
    const {
      hasLoaded
    } = this.state

    if(!hasLoaded) {
      if(_.size(audio) > 0 && _.size(queue) > 0) {
        this.setState({
          hasLoaded: true
        })
      }
    }
  }

  render() {
    const {
      hasLoaded
    } = this.state

    if (!hasLoaded) {
      return null
    }
    return (
      <Container>
        <Helmet>
          <title>Walla Walla Bands</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={ Bands } />
          <Route path="/about" component={ About } />
          <Route path="/band/:slug" component={ Band } />
          <Route component={NotFound} />
        </Switch>
      </Container>
  )}
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Site.propTypes = {
  audio: object,
  dispatch: func,
  queue: object
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  background-color: ${background};
  min-height: 100vh;
`
