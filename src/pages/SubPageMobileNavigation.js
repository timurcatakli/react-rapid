import React from 'react'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'
import {
  Button
} from 'semantic-ui-react'

const propTypes = {
  subpages: PropTypes.object.isRequired
}


const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    // background: '#EEEEEE'
    background: 'red'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class SubPageMobileNavigation extends React.Component {
  renderMenuItems = subpages => {
    const menuItems = Object.keys(subpages).map(page => {
      return (
        <Button inverted style={{marginBottom: '10px', width: '200px'}}>{subpages[page].label}</Button>
      )
    })
    return menuItems
  }
  render() {
    const { subpages } = this.props
    const menuItems = this.renderMenuItems(subpages)
    return (
      <Menu styles={styles}>
        {menuItems}
      </Menu>
    )
  }
}

SubPageMobileNavigation.propTypes = propTypes
export default SubPageMobileNavigation
