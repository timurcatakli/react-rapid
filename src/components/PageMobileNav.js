import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const propTypes = {
  subpages: PropTypes.object.isRequired
}
class PageMobileNav extends Component {
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
        >
          <Icon name={subpages[page].icon} src={subpages[page].path} />{' '}
          {subpages[page].label}
        </Menu.Item>
      )
    })
    return menuItems
  }

  render() {
    const { subpages } = this.props
    return (
      <div>
        <Menu.Item link key={'home'} name={'home'} as={NavLink} exact to={'/'}>
          <Icon name={'home'} src={'/'} /> Home
        </Menu.Item>
        {this.renderMenuItems(subpages)}
      </div>
    )
  }
}

PageMobileNav.propTypes = propTypes
export default PageMobileNav
