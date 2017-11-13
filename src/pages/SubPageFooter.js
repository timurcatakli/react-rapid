import React, { Component } from 'react'
import {
  Segment,
  Container,
  List,
  Divider
} from 'semantic-ui-react'
import config from '../config'

export default class SubPageNavigation extends Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        style={{ margin: '2em 0em 0em', padding: '2em 0em' }}
      >
        <Container textAlign="center">
          <List horizontal inverted divided link>
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
          <Divider inverted section />
          © 2009–2017 - {config.homepage}
        </Container>
      </Segment>
    )
  }
}
