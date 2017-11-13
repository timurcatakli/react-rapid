import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import SubPageFooter from './SubPageFooter'
import SubPageA from './subpage-a/SubPageA'
import SubPageB from './subpage-b/SubPageB'

const SubPageLayout = () => (
  <div>
    <MainNavigation />
    <br />
    <br />
    <Switch>
      <Route path="/subpage-a" exact component={SubPageA} />
      <Route path="/subpage-b" component={SubPageB} />
    </Switch>
    <SubPageFooter />
  </div>)

export default SubPageLayout
