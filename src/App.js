import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import SubPageLayout from './pages/SubPageLayout'
import FourOhFour from './pages/FourOhFour'
import config from './config'
import './app.css'

const App = () => {
  const renderRoutes = Object.keys(config.pages2).map(page => {
    return (
      <Route
        key={config.pages2[page].label}
        path={config.pages2[page].path}
        component={SubPageLayout}
      />
    )
  })
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Home} />
        {renderRoutes}
        <Route component={FourOhFour} />
      </Switch>
    </div>
  )
}

export default App
