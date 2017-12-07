import React, { Component } from 'react'
import { Menu, Container, Image, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const propTypes = {
  subpages: PropTypes.object.isRequired,
  siteLabel: PropTypes.string.isRequired,
  siteLogoUrl: PropTypes.string.isRequired,
  toggleVisibility: PropTypes.func.isRequired
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

  renderDesktopMenu = (url, label, subpages) => {
    const menuItems = this.renderMenuItems(subpages)
    return (
      <Menu fixed="top" color={'red'} inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src={url}
              alt={label}
            />
            &nbsp; &nbsp;
            {label}
          </Menu.Item>
          <Menu.Menu position="right">{menuItems}</Menu.Menu>
        </Container>
      </Menu>
    )
  }

  renderMobileMenu = (url, label, toggleVisibility) => {
    return (
      <Menu fixed="top" color={'red'} inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src={url}
              alt={label}
              style={{ marginRight: '1.5em' }}
            />
            &nbsp; &nbsp;
            {label}
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              link
              key={'mobile-menu'}
              icon="content"
              onClick={toggleVisibility}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }

  render() {
    const { subpages, siteLabel, siteLogoUrl, toggleVisibility } = this.props
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column only="tablet computer">
            {this.renderDesktopMenu(siteLogoUrl, siteLabel, subpages)}
          </Grid.Column>
          <Grid.Column only="mobile">
            {this.renderMobileMenu(siteLogoUrl, siteLabel, toggleVisibility)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

PageMainNav.propTypes = propTypes
export default PageMainNav
