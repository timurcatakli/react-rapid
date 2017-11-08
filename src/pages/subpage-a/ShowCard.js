import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

const propTypes = {
  show: PropTypes.object
}

const ShowCard = (props) => {
  const { show } = props
  return (
    <Card color="orange">
      <Image src={`/img/posters/${show.poster}`} />
      <Card.Content>
        <Card.Header>
          {show.title}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {show.year}
          </span>
        </Card.Meta>
        <Card.Description>{show.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

ShowCard.propTypes = propTypes
export default ShowCard
