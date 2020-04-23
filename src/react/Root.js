//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object } from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import UnderConstruction from 'src/react/site/pages/UnderConstruction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Root = ({ store }) =>  (
  <ReduxProvider
    store={store}>
    <Switch>
      <Route 
        component={UnderConstruction}/>
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