import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeScreen, FlowScreen } from './ui/screens'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomeScreen />
      </Route>
      <Route path="/flow" exact>
        <FlowScreen />
      </Route>
    </Switch>
  )
}

export default App;
