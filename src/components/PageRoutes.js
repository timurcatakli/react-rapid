import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import AboutUs from '../pages/about-us/AboutUs'
import Portfolio from '../pages/portfolio/Portfolio'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import config from '../config'

const propTypes = {
  path: PropTypes.string
}

class PageRoutes extends React.Component {
  render() {
    const { pages } = config
    const { path } = this.props
    const activePage = this.findActivePage(pages, path)

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

  findActivePage = (pageList, path) => {
    const activePageMatch = Object.keys(pageList).filter(page => {
      return pageList[page].path === path
    })
    const activePage = pageList[activePageMatch[0]]
    return activePage
  }
}

PageRoutes.propTypes = propTypes
export default PageRoutes
