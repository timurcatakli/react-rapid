import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import PageLayout from './components/PageLayout'
import PageMobileNav from './components/PageMobileNav'
import FourOhFour from './pages/FourOhFour'
import MainNav from './components/MainNav'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'

import config from './config'
import './app.css'

class App extends Component {
  renderRoutes = () => {
    return Object.keys(config.pages).map(page => {
      return (
        <Route
          key={config.pages[page].label}
          path={config.pages[page].path}
          component={PageLayout}
        />
      )
    })
  }

  render() {
    const { pages, siteLabel, footer, siteLogoUrl } = config
    const { visible } = this.state
    return (
      <div className="app">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={visible}
            icon="labeled"
            onClick={this.toggleVisibility}
            vertical
            inverted
          >
            <PageMobileNav subpages={pages} />
          </Sidebar>
          <Sidebar.Pusher>
            <MainNav
              subpages={pages}
              siteLabel={siteLabel}
              siteLogoUrl={siteLogoUrl}
              toggleVisibility={this.toggleVisibility}
            />
            <Switch>
              <Route path="/" exact>
                <Home siteLabel={siteLabel} footer={footer} />
              </Route>
              {this.renderRoutes()}
              <Route component={FourOhFour} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
}

export default App
