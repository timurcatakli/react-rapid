import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Grid,
  Icon
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}

const Services = () => (
  <div>
    <Segment basic>
      <Container>
        <h3 id="category-title">Magna Aliqua Enimad</h3>
        <Grid columns="three" stackable divided padded>
          <Grid.Row style={{marginBottom: 40}}>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="paint brush" color="blue" size="big" /> Logo &
                Branding
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="wordpress" color="blue" size="big" /> Wordpress
                Customization
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>

            <Grid.Column>
              <h4 id="article-title">
                <Icon name="computer" color="blue" size="big" /> Website Design
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="mobile" color="blue" size="big" /> Mobile App Design
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="idea" color="blue" size="big" /> Graphic/Print
                design
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="video camera" color="blue" size="big" /> Video
                Production
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <h3 id="category-title">Magna Aliqua Enimad</h3>
        <Grid columns="three" stackable divided padded>
          <Grid.Row style={{marginBottom: 40}}>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="paint brush" color="blue" size="big" /> Logo &
                Branding
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="wordpress" color="blue" size="big" /> Wordpress
                Customization
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>

            <Grid.Column>
              <h4 id="article-title">
                <Icon name="computer" color="blue" size="big" /> Website Design
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="mobile" color="blue" size="big" /> Mobile App Design
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="idea" color="blue" size="big" /> Graphic/Print
                design
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
            <Grid.Column>
              <h4 id="article-title">
                <Icon name="video camera" color="blue" size="big" /> Video
                Production
              </h4>
              <p>
                Services Nunc gravida tellus eget odio molestie eleifend feugiat
                non lorem. Services Nunc gravida tellus eget odio molestie
                eleifend feugiat non lorem.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

Services.propTypes = propTypes
export default Services
