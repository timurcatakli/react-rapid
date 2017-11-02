import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SubPageNavigation from './SubPageNavigation'
import SubPageA from './subpage-a/SubPageA'
import SubPageB from './subpage-b/SubPageB'

const SubPageLayout = () => (
  <div className="user-sub-layout">
    <aside>
      <SubPageNavigation />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path="/subpage-a" exact component={SubPageA} />
        <Route path="/subpage-b" component={SubPageB} />
      </Switch>
    </div>
  </div>
)

export default SubPageLayout
