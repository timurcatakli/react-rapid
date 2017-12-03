import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  Segment,
  Header
} from 'semantic-ui-react'

const propTypes = {
  activePage: PropTypes.object.isRequired
}

const PageMainHeader = (props) => {
  const {activePage} = props
  const {label, subTitle} = activePage
  return (
    <div className="subpage-header-container">
      <Segment basic>
        <Container>
          <Grid verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as={'h2'} style={{ color: 'gold' }}>
                  {label.toUpperCase()}
                </Header>
                <div className="page-sub-title">
                  {subTitle}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}

PageMainHeader.propTypes = propTypes
export default PageMainHeader
