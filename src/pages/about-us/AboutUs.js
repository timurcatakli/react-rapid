import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Grid,
  Progress,
  Card,
  Image,
  Icon,
  Tab,
  Statistic,
  Divider
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}
const panes = [
  {
    menuItem: 'OUR VISION',
    render: () => {
      return (
        <Tab.Pane attached={false}>
          <p>
            Magna aliqua enimad minys veniam quis nosar exercitation ullamco
            laboris nisi aliquip comd sed consequat duis aute rure dolor
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Magna aliqua enimad minys veniam quis nosar exercitation ullamco
            laboris nisi aliquip comd sed consequat duis aute rure dolor
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </Tab.Pane>
      )
    }
  },
  {
    menuItem: 'OUR WORK',
    render: () => {
      return (
        <Tab.Pane attached={false}>
          <p>
            Et offendit do nostrud, eram ingeniis e concursionibus hic quorum e
            mentitum ex fugiat, cillum constias nam arbitror. Tempor constias ab
            graviterque. Noster ea ad eram aliquip. Ad cillum elit aut possumus,
            mentitum in quibusdam, illum nam doctrina id illum ad a eram
            appellat.Offendit quo quamquam te et te illustriora ita velit hic
            laborum est expetendis enim dolore probant quae, commodo aute
            commodo appellat, ita noster velit irure ullamco, ex iudicem te
            consequat, fabulas qui fugiat singulis. Ubi minim duis est possumus.
            Amet est ingeniis, an ullamco aut admodum, nam quorum occaecat
            praesentibus eu e iudicem relinqueret.
          </p>
        </Tab.Pane>
      )
    }
  }
]
const AboutUs = () => (
  <div>
    <Segment basic>
      <Container>
        <h3 id="category-title">Magna Aliqua Enimad</h3>
        <Grid columns={2} stackable verticalAlign="top">
          <Grid.Column>
            <h4 id="article-title">What's the structure of JavaScript?</h4>
            <div id="article-content">
              <p>
                Nobis at explicabo similique laudantium deserunt, excepturi
                fugit eum voluptatem commodi soluta quaerat, adipisci ducimus
                optio, earum beatae! Cupiditate laboriosam tenetur libero at
                vitae possimus velit est, eum quam ratione. Molestiae, veniam.
              </p>
              <p>
                Nobis at explicabo similique laudantium deserunt, excepturi
                fugit eum voluptatem commodi soluta quaerat, adipisci ducimus
                optio, earum beatae! Cupiditate laboriosam tenetur libero at
                vitae possimus velit est, eum quam ratione. Molestiae, veniam.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            WEB DEVELOPMENT
            <Progress percent={83} progress color="red" />
            PHOTOGRAPHY
            <Progress percent={65} progress color="orange" />
            MARKETING
            <Progress percent={55} progress color="yellow" />
            SEARCH RANKING
            <Progress percent={95} progress color="green" />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>

    <Segment
      inverted
      basic
      id="content-segment-gray"
    >
      <Container>
        <h3 id="category-title">Magna Aliqua Enimad</h3>
        <Grid columns={4} stackable>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-1.jpeg" />
              <Card.Content>
                <Card.Header>Lucas Red</Card.Header>
                <Card.Meta>
                  <span>CEO, Founder</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-2.jpeg" />
              <Card.Content>
                <Card.Header>Melinda Maverick</Card.Header>
                <Card.Meta>
                  <span>Director of Engineering</span>
                </Card.Meta>
              </Card.Content>
            </Card>{' '}
          </Grid.Column>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-3.jpeg" />
              <Card.Content>
                <Card.Header>Potticary Trixi</Card.Header>
                <Card.Meta>
                  <span>VP of Sales</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-4.jpeg" />
              <Card.Content>
                <Card.Header>Mark Berg</Card.Header>
                <Card.Meta>
                  <span>Head of Finance</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>

    <Segment basic>
      <Container>
        <Divider />
        <Statistic.Group widths="4" align="center" color="olive">
          <Statistic>
            <Statistic.Value>
              <Icon name="browser" />
              224
            </Statistic.Value>
            <Statistic.Label>Projects Launched</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="building" />
              3
            </Statistic.Value>
            <Statistic.Label>Branch Offices</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="users" />
              500
            </Statistic.Value>
            <Statistic.Label>Clients Worldwide</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="heart" style={{color: 'red'}} />
              42
            </Statistic.Value>
            <Statistic.Label>Team Members</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Divider />
      </Container>
    </Segment>

    <Segment basic>
      <Container>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Image src="http://t.commonsupport.com/calena/images/resource/mission.jpg" />
          </Grid.Column>
          <Grid.Column>
            <h3 id="category-title">Magna Aliqua Enimad</h3>
            {/* <h4 id="article-title">What's the structure of JavaScript?</h4> */}
            <div id="article-content">
              <Tab menu={{ secondary: true }} panes={panes} />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
)

AboutUs.propTypes = propTypes
export default AboutUs
