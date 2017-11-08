import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Card, Header } from 'semantic-ui-react'
import ShowCard from './ShowCard'
import data from './data'

const propTypes = {}

const SubPageA = () => (
  <Container>
    <Header as='h1'>First Header</Header>
    <Card.Group>
      {data.shows.map(show => (
        <ShowCard key={show.title} show={show} />
      ))}
    </Card.Group>
  </Container>

)

SubPageA.propTypes = propTypes
export default SubPageA
