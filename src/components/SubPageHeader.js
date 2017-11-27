import React from 'react'
import { Header, Grid, Container, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import SubPageBreadcrumb from './SubPageBreadcrumb'

const propTypes = {
  label: PropTypes.string.isRequired
}

const SubPageHeader = ({ label }) => (
  <Segment basic style={{ backgroundColor: '#F5F5F5', padding: 40 }}>
    <Container>
      <Grid stretched>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as={'h2'}>{label.toUpperCase()}</Header>
          </Grid.Column>
          <Grid.Column width={8} textAlign={'right'}>
            <SubPageBreadcrumb label="About Us" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

SubPageHeader.defaultProps = {
  label: 'Page Label Goes Here'
}
SubPageHeader.propTypes = propTypes
export default SubPageHeader
