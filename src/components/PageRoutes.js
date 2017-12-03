import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import SubPageA from '../pages/subpage-a/SubPageA'
import SubPageB from '../pages/subpage-b/SubPageB'
import AboutUs from '../pages/about-us/AboutUs'
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
        <Route path="/subpage-a" exact>
          <SubPageA />
        </Route>
        <Route path="/subpage-b" exact>
          <SubPageB />
        </Route>
        <Route path="/aboutus">
          <AboutUs pageData={activePage} />
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
