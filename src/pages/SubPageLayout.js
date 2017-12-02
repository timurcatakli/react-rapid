import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import SubPageNavigation from './SubPageNavigation'
import SubPageFooter from './SubPageFooter'
import SubPageA from './subpage-a/SubPageA'
import SubPageB from './subpage-b/SubPageB'
import AboutUs from './about-us/AboutUs'
import config from '../config'
import SubPageHeader from '../components/SubPageHeader'

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}

const SubPageLayout = props => {
  const aboutUs = config.pages[0]
  const { pages, siteLabel } = config
  const activePageMatch = Object.keys(pages).filter(page => {
    return pages[page].path === props.match.path
  })
  const activePage = pages[activePageMatch[0]]

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <SubPageNavigation subpages={pages} siteLabel={siteLabel} />
      <SubPageHeader activePage={activePage} />
      <Switch>
        <Route path="/subpage-a" exact>
          <SubPageA />
        </Route>
        <Route path="/subpage-b" exact>
          <SubPageB />
        </Route>
        <Route path="/aboutus">
          <AboutUs pageData={aboutUs} />
        </Route>
      </Switch>
      <SubPageFooter />
    </div>
  )
}

SubPageLayout.propTypes = propTypes
export default SubPageLayout
