import React, { Component } from 'react'
import { Segment, Grid, Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

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

  render() {
    const { subpages, siteLabel } = this.props
    const menuItems = this.renderMenuItems(subpages)
    return (
      <Segment style={{ backgroundColor: 'white' }}>
        <Grid divided stackable stretched>
          <Grid.Row>
            <Grid.Column>
              <Menu size="huge" fixed={'top'}>
                <Menu.Item header>{siteLabel}</Menu.Item>
                <Menu.Item link name="home" as={NavLink} exact to="/" />
                {menuItems}
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

SubPageNavigation.propTypes = propTypes
export default SubPageNavigation
