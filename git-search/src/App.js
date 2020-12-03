import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeScreen, FlowScreen } from './ui/screens'
import { Header } from './ui/components'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomeScreen />
      </Route>
      <Route path="/flow" exact>
        <Header />
        <FlowScreen />
      </Route>
    </Switch>
  )
}

export default App;
