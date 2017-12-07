import React from 'react'
import PropTypes from 'prop-types'
import config from '../../config'
import {
  Segment,
  Container,
  Grid,
  Progress,
  Card,
  Image,
  Icon,
  Tab,
  Statistic,
  Divider,
  Form,
  Message
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}

const Contact = () => {
  const { email, phone } = config
  return (
    <div>
      <Segment basic>
        <Container>
          <Grid columns="three" stackable divided padded>
            <Grid.Row>
              <Grid.Column width={10}>
                <h4 id="article-title">Magna Aliqua Enimad</h4>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Input icon="user" label="name" placeholder="Name" />
                    <Form.Input icon="mail" label="Email" placeholder="email" />
                  </Form.Group>
                  <Form.TextArea
                    label="Message"
                    placeholder="Tell us more about you..."
                  />
                  <Form.Button>Submit</Form.Button>
                </Form>
              </Grid.Column>
              <Grid.Column width={6}>
                <Message
                  color="gray"
                  icon="phone"
                  header="Give Us a Call"
                  content={phone}
                />
                <Message
                  color="gray"
                  icon="mail"
                  header="Send an Email"
                  content={email}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}

Contact.propTypes = propTypes
export default Contact
