import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  List,
  Image,
  Segment
} from 'semantic-ui-react'

const propTypes = {
  siteLabel: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number.isRequired,
  siteLogoUrl: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

const PageMainFooter = props => {
  const { siteLabel, siteLogoUrl, copyrightYear, message } = props
  return (
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={1}>
              <Image
                size="large"
                src={siteLogoUrl}
                alt={siteLabel}
                style={{ marginRight: '1.5em' }}
              />
            </Grid.Column>
            <Grid.Column width={3} textAlign="left">{message}</Grid.Column>
            <Grid.Column width={11} textAlign="right">
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
              <br />
              {siteLabel} - {copyrightYear}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

PageMainFooter.propTypes = propTypes
export default PageMainFooter
