import React from 'react'
import PropTypes from 'prop-types'
import config from '../../config'
import {
  Segment,
  Container,
  Grid,
  Icon,
  Form,
  Message
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}

const Contact = () => {
  const { socialMediaLinks, email, phone } = config
  const totalSocialMediaLinks = socialMediaLinks.length
  const renderSocialMediaLinks = links => {
    return links
      .filter(link => {
        return link.active
      })
      .map(url => {
        return (
          <Grid.Column key={url.id}>
            <a href={url.url} key={url.id} target="_blank">
              <Icon name={url.icon} size="big" />
            </a>
          </Grid.Column>
        )
      })
  }

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
                    <Form.Input icon="user" label="Name" placeholder="name" />
                    <Form.Input icon="mail" label="Email" placeholder="email" />
                  </Form.Group>
                  <Form.TextArea
                    label="Message"
                    placeholder="Your message goes here..."
                  />
                  <Form.Button>Submit</Form.Button>
                </Form>
              </Grid.Column>
              <Grid.Column width={6}>
                <Message
                  color="grey"
                  icon="phone"
                  header="Give Us a Call"
                  content={phone}
                />
                <Message
                  color="grey"
                  icon="mail"
                  header="Send an Email"
                  content={email}
                />
                <Message>
                  <Grid columns={totalSocialMediaLinks}>
                    {renderSocialMediaLinks(socialMediaLinks)}
                  </Grid>
                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <divider />
          <h3 id="category-title">Magna Aliqua Enimad</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43843467633!2d-74.11808622462772!3d40.70582531304306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1493743550190"
            height="500"
            style={{ border: 0, width: '100%' }}
          />
        </Container>
      </Segment>
    </div>
  )
}

Contact.propTypes = propTypes
export default Contact
