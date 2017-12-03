import React, { Component } from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const propTypes = {
  subpages: PropTypes.object.isRequired,
  siteLabel: PropTypes.string.isRequired,
  siteLogoUrl: PropTypes.string.isRequired
}
class PageMainNav extends Component {
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
    const { subpages, siteLabel, siteLogoUrl } = this.props
    const menuItems = this.renderMenuItems(subpages)

    return (
      <Menu fixed="top" color={'red'} inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src={siteLogoUrl}
              alt={siteLabel}
              style={{ marginRight: '1.5em' }}
            />
            &nbsp; &nbsp;
            {siteLabel}
          </Menu.Item>
          <Menu.Menu position="right">{menuItems}</Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

PageMainNav.propTypes = propTypes
export default PageMainNav
