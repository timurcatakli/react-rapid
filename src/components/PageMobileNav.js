import React from 'react'
import PropTypes from 'prop-types'
import {
  Sidebar,
  Menu
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const propTypes = {
  visible: PropTypes.bool.isRequired,
  subpages: PropTypes.object.isRequired
}

class PageMobileNav extends React.Component {
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
    const { visible, subpages } = this.props
    const menuItems = this.renderMenuItems(subpages)

    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        width="thin"
        visible={visible}
        icon="labeled"
        vertical
        inverted
      >
        {menuItems}
      </Sidebar>
    )
  }
}

PageMobileNav.propTypes = propTypes
export default PageMobileNav
