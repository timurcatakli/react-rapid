import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import SubPageLayout from './pages/SubPageLayout'
import FourOhFour from './pages/FourOhFour'

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/subpage-a" component={SubPageLayout} />
      <Route path="/subpage-b" component={SubPageLayout} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
)

export default App
