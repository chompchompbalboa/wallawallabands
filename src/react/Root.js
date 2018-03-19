import React, { Component } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Admin from 'src/react/admin/Admin'
import Site from 'src/react/site/Site'

export default class Root extends Component {

  render () {
    const {
      store
    } = this.props
    return (
      <ReduxProvider store={store}>
        <Switch>
  				<Route path="/admin" component={ Admin } />
  				<Route component={ Site } />
  			</Switch>
      </ReduxProvider>
    )
  }
}
