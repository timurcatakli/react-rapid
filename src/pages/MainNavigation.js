import React, { Component } from 'react'
import {
  Segment,
  Grid,
  Container,
  Menu,
  Button,
  Dropdown
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import config from '../config'

export default class SubPageNavigation extends Component {
  render() {
    const {siteLabel} = config
    return (
      <Segment inverted vertical>
        <Container textAlign="center">
          <Grid divided inverted stackable stretched>
            <Grid.Row>
              <Grid.Column>
                <Menu size="huge" stackable inverted pointing secondary>
                  <Menu.Item header>{siteLabel}</Menu.Item>
                  <Menu.Item link name="home" as={NavLink} exact to="/" />
                  <Menu.Item
                    link
                    name="subpage-a"
                    as={NavLink}
                    to="/subpage-a"
                  />
                  <Menu.Item
                    link
                    name="subpage-b"
                    as={NavLink}
                    to="/subpage-b"
                  />
                  <Menu.Menu position="right">
                    <Dropdown item text="Language">
                      <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Russian</Dropdown.Item>
                        <Dropdown.Item>Spanish</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                      <Button primary>Sign Up</Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button>Log-in</Button>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
