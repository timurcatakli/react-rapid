import React from 'react'
import {
  Container,
  Grid,
  Segment,
  Header
} from 'semantic-ui-react'

const SubPageHeader = () => {
  return (
    <div className="subpage-header-container">
      <Segment basic>
        <Container>
          <Grid verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as={'h2'} style={{ color: 'gold' }}>
                  PAGE TITLE
                </Header>
                <div className="page-sub-title">
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}

export default SubPageHeader
