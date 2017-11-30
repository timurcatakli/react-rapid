import React, { Component } from 'react'
import {
  Dropdown,
  Container,
  Menu,
  Button,
  Grid,
  Segment,
  Header
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import config from '../config'

const propTypes = {
  subpages: PropTypes.object.isRequired,
  siteLabel: PropTypes.string.isRequired
}
class SubPageNavigation extends Component {
  renderMenuItems = subpages => {
    const menuItems = Object.keys(subpages).map(page => {
      return (
        <Menu.Item
          link
          key={subpages[page].label}
          name={subpages[page].path}
          as={NavLink}
          exact
          to={subpages[page].path}
        />
      )
    })
    return menuItems
  }

  renderCallToAction = callToAction => {
    if (!callToAction.active) return null
    return (
      <Menu.Item position="right">
        <Button primary>{callToAction.message}</Button>
      </Menu.Item>
    )
  }

  render() {
    const { subpages, siteLabel } = this.props
    const { menuCallToAction } = config
    const menuItems = this.renderMenuItems(subpages)
    const callToAction = this.renderCallToAction(menuCallToAction)
    return (
      <div>
        <Grid>
          <Grid.Row only="tablet">
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
                  {siteLabel}
                </Menu.Item>
                <Menu.Item link name="home" as={NavLink} exact to="/" />
                {menuItems}
                {callToAction}
              </Menu>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="computer">
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
                  {siteLabel}
                </Menu.Item>
                <Menu.Item link name="home" as={NavLink} exact to="/" />
                {menuItems}
                {callToAction}
              </Menu>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="mobile">
            <Grid.Column>
              <Menu
                size="small"
                secondary
              >
                <Menu.Item header color="orange">
                  <img src="https://react.semantic-ui.com/logo.png" /> &nbsp;{' '}
                  {siteLabel}
                </Menu.Item>
                <Menu.Item link name="home" as={NavLink} exact to="/" />
                <Menu.Item link name="home1" as={NavLink} exact to="/" />
                <Menu.Item link name="home2" as={NavLink} exact to="/" />
                <Menu.Item link name="home3" as={NavLink} exact to="/" />
                <Menu.Item link name="home4" as={NavLink} exact to="/" />
                <Menu.Item link name="home5" as={NavLink} exact to="/" />
                {menuItems}
              </Menu>
            </Grid.Column>
          </Grid.Row>

          {/* <Grid.Row only="mobile">
            <Grid.Column>
              <Menu secondary fixed="top" style={{ backgroundColor: 'gold' }}>
                <Menu.Item header color="orange">
                  {siteLabel}
                </Menu.Item>
                <Menu.Item>
                  <Dropdown item text="Categories">
                    <Dropdown.Menu>
                      <Dropdown.Item>Electronics</Dropdown.Item>
                      <Dropdown.Item>Automotive</Dropdown.Item>
                      <Dropdown.Item>Home</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row> */}

          <Grid.Row>
            <Grid.Column>
              <div className="subpage-header-container" style={{backgroundColor: 'gold'}}>
                <Segment basic>
                  <Container>
                    <Grid verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={16} textAlign="center">
                          <Header as={'h2'}>alskdjaslkdjasd</Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

SubPageNavigation.propTypes = propTypes
export default SubPageNavigation
