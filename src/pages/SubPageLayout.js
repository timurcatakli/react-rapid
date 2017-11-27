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


const SubPageLayout = () => {
  const aboutUs = config.pages[0]
  // const matchedPath = props.match.path
  // const matchedPathId = matchedPath.substr(1)
  // const pageTitle = config.pages2[matchedPathId].label

  // find the current page and pass it to SubPageHeader
  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <SubPageNavigation subpages={config.pages2} siteLabel={config.siteLabel} />
      <SubPageHeader label={'pageTitle'} />
      <Switch>
        <Route path="/subpage-a" exact>
          <SubPageA />
        </Route>
        <Route path="/subpage-b" component={SubPageB} />
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
