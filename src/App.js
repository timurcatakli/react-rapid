import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import L from './L'
import M from './M'
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={L} />
        <Route path="/search" component={M} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
