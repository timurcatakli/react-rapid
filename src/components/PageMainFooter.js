import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  Image,
  Segment,
  Icon
} from 'semantic-ui-react'

const propTypes = {
  siteLabel: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number.isRequired,
  siteLogoUrl: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  socialMediaLinks: PropTypes.array
}

const PageMainFooter = props => {
  const { siteLabel, siteLogoUrl, copyrightYear, message, socialMediaLinks, email, phone } = props
  const renderSocialMediaLinks = links => {
    return links.filter((link) => {
      return link.active
    }).map((url) => {
      return (
        <a href={url.url} key={url.id} target="_blank">
          <Icon name={url.icon} size='large' />
        </a>
      )
    })
  }
  return (
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign="center">
        <Grid inverted stackable>
          <Grid.Row verticalAlign="top">
            <Grid.Column computer={1} tablet={2} mobile={16} align="center">
              <Image
                id="footer-logo"
                src={siteLogoUrl}
                alt={siteLabel}
              />
            </Grid.Column>
            <Grid.Column computer={6} tablet={6} mobile={16} id="footer-message">{message}</Grid.Column>
            <Grid.Column computer={9} tablet={8} mobile={16} id="footer-contact-links">
              <Grid.Row style={{marginBottom: 10}}>
                <Grid.Column>CALL. <strong>{phone}</strong></Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginBottom: 10}}>
                <Grid.Column>EMAIL. <a href={`mailto:${email}`}>{email}</a></Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginBottom: 10}}>
                <Grid.Column>
                  {renderSocialMediaLinks(socialMediaLinks)}
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
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
