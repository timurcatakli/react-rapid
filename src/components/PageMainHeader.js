import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Segment } from 'semantic-ui-react'

const propTypes = {
  activePage: PropTypes.object.isRequired
}

const PageMainHeader = props => {
  const { activePage } = props
  const { label, subTitle } = activePage
  return (
    <Segment clearing basic id="page-header-segment">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <h1 id="page-title">{label.toUpperCase()}</h1>
              <h2 id="page-description">{subTitle}</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

PageMainHeader.propTypes = propTypes
export default PageMainHeader
