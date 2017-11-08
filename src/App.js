import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import SubPageLayout from './pages/SubPageLayout'

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/subpage-a" component={SubPageLayout} />
      <Route path="/subpage-b" component={SubPageLayout} />
    </Switch>
  </div>
)

export default App
