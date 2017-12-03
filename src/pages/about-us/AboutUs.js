import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Container } from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}

const AboutUs = () => (
  <div>
    <Segment basic>
      <Container>
        <h3 id="category-title">Structure</h3>
        <div>
          <h4 id="article-title">What's the structure of JavaScript?</h4>
          <div id="article-content">
            <p>
              Nobis at explicabo similique laudantium deserunt, excepturi fugit
              eum voluptatem commodi soluta quaerat, adipisci ducimus optio,
              earum beatae! Cupiditate laboriosam tenetur libero at vitae
              possimus velit est, eum quam ratione. Molestiae, veniam.
            </p>
          </div>
          <h4 id="article-title">What's the file structure?</h4>
          <div id="article-content">
            <p>
              Nobis at explicabo similique laudantium deserunt, excepturi fugit
              eum voluptatem commodi soluta quaerat, adipisci ducimus optio,
              earum beatae! Cupiditate laboriosam tenetur libero at vitae
              possimus velit est, eum quam ratione. Molestiae, veniam.Nobis at
              explicabo similique laudantium deserunt, excepturi fugit eum
              voluptatem commodi soluta quaerat, adipisci ducimus optio, earum
              beatae! Cupiditate laboriosam tenetur libero at vitae possimus
              velit est, eum quam ratione. Molestiae, veniam.Nobis at explicabo
              similique laudantium deserunt, excepturi fugit eum voluptatem
              commodi soluta quaerat, adipisci ducimus optio, earum beatae!
              Cupiditate laboriosam tenetur libero at vitae possimus velit est,
              eum quam ratione. Molestiae, veniam.
            </p>
          </div>
        </div>
      </Container>
    </Segment>
  </div>
)

AboutUs.propTypes = propTypes
export default AboutUs
