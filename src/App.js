import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import PageLayout from './components/PageLayout'
import FourOhFour from './pages/FourOhFour'
import config from './config'
import './app.css'

const App = () => {
  const renderRoutes = Object.keys(config.pages).map(page => {
    return (
      <Route
        key={config.pages[page].label}
        path={config.pages[page].path}
        component={PageLayout}
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
