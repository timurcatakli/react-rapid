import React from 'react'
import { Header, Grid, Container, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
  activePage: PropTypes.object.isRequired
}

const SubPageHeader = ({ activePage }) => (
  <div className="subpage-header-container">
    <Segment basic>
      <Container>
        <Grid verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
              <Header as={'h2'}>{activePage.label.toUpperCase()}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

SubPageHeader.defaultProps = {
  label: 'Page Label Goes Here'
}
SubPageHeader.propTypes = propTypes
export default SubPageHeader
