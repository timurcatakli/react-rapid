import React from 'react'
import { Route, Redirect, Switch, Link } from 'react-router-dom'

const HomePage = () => (
  <div>
    This is the Home Page
    <br/>
    <br/>
    <br/>
    <Link to="/users">Users Page</Link>
  </div>
)

const BrowseUsersPage = () => <div>BrowseUsersPage</div>
const UserProfilePage = () => <div>UserProfilePage</div>

const UserNav = () => (
  <div>
    <Link to="/">Home</Link>
    &nbsp; &nbsp; &nbsp;
    <Link to="/users/123">User Details</Link>
  </div>
)

const UserSubLayout = () => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path="/users" exact component={BrowseUsersPage} />
        <Route path="/users/:userId" component={UserProfilePage} />
      </Switch>
    </div>
  </div>
)

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UserSubLayout} />
      {/* <Route path="/products" component={ProductSubLayout} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
)

export default App
