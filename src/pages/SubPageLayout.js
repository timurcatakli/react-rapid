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
import {
  Grid,
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from 'semantic-ui-react'

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}

class SubPageLayout extends React.Component {
  render() {
    const aboutUs = config.pages[0]
    const { pages, siteLabel } = config
    const activePageMatch = Object.keys(pages).filter(page => {
      return pages[page].path === this.props.match.path
    })
    const activePage = pages[activePageMatch[0]]
    const { visible } = this.state

    return (
      <div style={{ backgroundColor: '#f9f9f9' }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Grid>
              <Grid.Row only="mobile">
                <Grid.Column>
                  <Menu
                    size="large"
                    secondary
                    fixed="top"
                    color="orange"
                    className="top-menu"
                  >
                    <Menu.Item header color="orange">
                      <img src="https://react.semantic-ui.com/logo.png" /> &nbsp;{' '}
                      Test
                    </Menu.Item>
                    <Menu.Item position="right">
                      <Button onClick={this.toggleVisibility}>Toggle Menu</Button>
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>

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
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <SubPageFooter />
      </div>
    )
  }
  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
}

SubPageLayout.propTypes = propTypes
export default SubPageLayout
