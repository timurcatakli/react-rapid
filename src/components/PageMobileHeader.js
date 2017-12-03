import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Menu
} from 'semantic-ui-react'

const propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  siteLabel: PropTypes.string.isRequired,
  siteLogoUrl: PropTypes.string.isRequired
}

const PageMobileHeader = props => {
  const { siteLabel, siteLogoUrl,  toggleVisibility } = props
  return (
    <Menu size="large" secondary fixed="top" className="top-menu">
      <Menu.Item header color="orange">
        <img src={siteLogoUrl} alt={siteLabel} />
        &nbsp; &nbsp;
        {siteLabel}
      </Menu.Item>
      <Menu.Item position="right">
        <Button onClick={toggleVisibility}>Toggle Menu</Button>
      </Menu.Item>
    </Menu>
  )
}

PageMobileHeader.propTypes = propTypes
export default PageMobileHeader
