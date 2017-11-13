import React from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'

const SubPageB = () => (
  <div>
    <Container>
      <Header as='h1' dividing>Using Grids</Header>
      <Header as='h3'>Container</Header>
      <p>
        A container is a fixed width element that wraps your site's content. It remains a constant size and
        uses <b>margin</b> to center. Containers are the simplest way to center page content inside a grid.
      </p>
    </Container>

    <Divider hidden />
  </div>
)

export default SubPageB
