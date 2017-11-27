import React from 'react'
import { Container, Grid, Segment, Image, Header, Divider } from 'semantic-ui-react'

const AboutUs = () => (
  <div>
    <Container>
      <Segment vertical>
        <Grid container stackable verticalAlign="top">
          <Header as="h1">
            About Us
          </Header>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3">
                We Help Companies and Companions
              </Header>
              <p>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <Image src='https://static.mailchimp.com/web/features/reports/reports.jpg' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden section />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3">Interactive graphs</Header>
              <p>Our interactive graphs show you how many emails were delivered, how many people opened your email, what percentage clicked, and more. View your list growth over time, see where in the world your subscribers are located, then track engagement by country. Find out what attracts people with MailChimp's email click-map overlay. Are the clicks mostly near the top? Do your subscribers like pictures or text links better? Learn from their habits, so you can better serve them.</p>
            </Grid.Column>
            <Grid.Column>
              <Image src='https://static.mailchimp.com/web/features/reports/reportsSmall01@2x.jpg' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden section />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Image src='https://static.mailchimp.com/web/features/reports/reportsSmall01@2x.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Header as="h3">Interactive graphs</Header>
              <p>Our interactive graphs show you how many emails were delivered, how many people opened your email, what percentage clicked, and more. View your list growth over time, see where in the world your subscribers are located, then track engagement by country. Find out what attracts people with MailChimp's email click-map overlay. Are the clicks mostly near the top? Do your subscribers like pictures or text links better? Learn from their habits, so you can better serve them.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  </div>
)

export default AboutUs
