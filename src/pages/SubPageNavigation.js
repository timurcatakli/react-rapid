import React from 'react'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SubPageNavigation = () => (
  <Menu fixed='top' inverted pointing>
    <Container>
      <Menu.Item as='a' header>
        <Image
          size='mini'
          src='https://react.semantic-ui.com/logo.png'
          style={{ marginRight: '1.5em' }}
        />
        Project Name
      </Menu.Item>
      <Menu.Item active><Link to="/">Home</Link></Menu.Item>
      <Menu.Item><Link to="/subpage-a">SubPageA</Link></Menu.Item>
      <Menu.Item><Link to="/subpage-b">SubPageB</Link></Menu.Item>

      <Dropdown item simple text='Dropdown'>
        <Dropdown.Menu>
          <Dropdown.Item>SubPageB</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
)

export default SubPageNavigation
