//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object } from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Admin from 'src/react/admin/Admin'
import Site from 'src/react/site/Site'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Root = ({ store }) =>  (
  <ReduxProvider
    store={store}>
    <Switch>
      <Route 
        path="/admin" 
        component={Admin}/>
      <Route 
        component={Site}/>
    </Switch>
  </ReduxProvider>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Root.propTypes = {
  store: object.isRequired
}

export default Root