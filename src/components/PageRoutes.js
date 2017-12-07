import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import AboutUs from '../pages/about-us/AboutUs'
import Portfolio from '../pages/portfolio/Portfolio'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'

const propTypes = {
  path: PropTypes.string,
  activePage: PropTypes.object.isRequired
}

class PageRoutes extends React.Component {
  render() {
    const { activePage } = this.props

    return (
      <Switch>
        <Route path="/aboutus">
          <AboutUs pageData={activePage} />
        </Route>
        <Route path="/portfolio">
          <Portfolio pageData={activePage} />
        </Route>
        <Route path="/services">
          <Services pageData={activePage} />
        </Route>
        <Route path="/contact">
          <Contact pageData={activePage} />
        </Route>
      </Switch>
    )
  }
}

PageRoutes.propTypes = propTypes
export default PageRoutes
