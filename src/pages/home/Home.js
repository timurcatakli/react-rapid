import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment
} from 'semantic-ui-react'

const propTypes = {
  footer: PropTypes.object,
  siteLabel: PropTypes.string
}

class Home extends Component {
  render() {
    const { siteLabel, footer } = this.props
    const { copyrightYear } = footer
    return (
      <div>
        <Segment inverted textAlign="center" id="page-header-home" vertical>
          <Container>
            <Grid stackable textAlign="center" verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image
                    src="img/responsive-mockup.png"
                    alt="React Rapid"
                    width="90%"
                    height="90%"
                  />
                </Grid.Column>
                <Grid.Column width={8} textAlign="left">
                  <Grid.Column verticalAlign="middle">
                    <Image
                      src="/img/atomic-128.png"
                      size="tiny"
                      floated="left"
                      verticalAlign="middle"
                    />
                  </Grid.Column>
                  <Grid.Column verticalAlign="middle">
                    <h1 id="home-h1">React Rapid</h1>
                  </Grid.Column>
                  <Header
                    as="h2"
                    id="home-h2"
                    content="Fast, Responsive & Free React Starter Template"
                    inverted
                  />
                  <a
                    href="https://github.com/facebookincubator/create-react-app"
                    target="_blank"
                  >
                    <Button primary size="huge" color="facebook">
                      <Icon name="github" />
                      Github
                    </Button>
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

        <Segment vertical>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header id="home-h2">React Rapid</Header>
                <p>
                  React Rapid is a prebuilt responsive
                  single page html template based on React and other popular
                  libraries.
                </p>
                <p>
                  You can simply download, install and customize it for your own
                  needs and get going in minutes.
                </p>
                <Header id="home-h2">Developed Using</Header>
                <List as="ul">
                  <List.Item as="li">
                    <a
                      href="https://github.com/facebookincubator/create-react-app"
                      target="_blank"
                    >
                      Create-React-App
                    </a>
                  </List.Item>
                  <List.Item as="li">
                    <a
                      href="https://github.com/ReactTraining/react-router"
                      target="_blank"
                    >
                      React Router
                    </a>
                  </List.Item>
                  <List.Item as="li">
                    <a href="https://react.semantic-ui.com" target="_blank">
                      Semantic UI
                    </a>
                  </List.Item>
                  <List.Item as="li">
                    <a href="https://html5boilerplate.com/" target="_blank">
                      HTML5 Boilerplate
                    </a>
                  </List.Item>
                  <List.Item as="li">
                    <a href="https://firebase.com/" target="_blank">
                      Ready for Firebase hosting
                    </a>
                  </List.Item>
                </List>
                <Header id="home-h2">Installation & Setup</Header>
                <p>
                  Please visit the <a href="https://github.com/timurcatakli/react-rapid" target="_blank">Github page</a> for detailed instructions
                </p>
                <Header id="home-h2">Support</Header>
                <p>
                  For questions, comments please use <a href="https://github.com/timurcatakli/react-rapid/issues" target="_blank">Github Issues page</a>.
                </p>

                <Header id="home-h2">Contributions</Header>
                <p>
                  If you are interested in expanding the project, here are the
                  fundamentals
                </p>
                <List as="ul">
                  <List.Item as="li">
                    Fork the project & clone locally.
                  </List.Item>
                  <List.Item as="li">
                    Create an upstream remote and sync your local copy before
                    you branch.
                  </List.Item>
                  <List.Item as="li">
                    Branch for each separate piece of work.
                  </List.Item>
                  <List.Item as="li">
                    Do the work, write good commit messages, and read the
                    CONTRIBUTING file if there is one.
                  </List.Item>
                  <List.Item as="li">Push to your origin repository.</List.Item>
                  <List.Item as="li">Create a new PR in GitHub.</List.Item>
                  <List.Item as="li">
                    Respond to any code review feedback.
                  </List.Item>
                </List>
                <p>
                  For a detailed guide please read
                  <a href="" target="_blank">
                    The beginner's guide to contributing to a GitHub project
                  </a>
                  by Rob Allen.
                </p>

                <Header id="home-h2">References</Header>
                <div>
                  React Rapid logo is made by &nbsp;
                  <a
                    href="https://www.flaticon.com/authors/roundicons"
                    title="Roundicons"
                  >
                    Roundicons
                  </a>
                   &nbsp; from  &nbsp;
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>
                   &nbsp; is licensed by  &nbsp;
                  <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                  >
                    CC 3.0 BY
                  </a>
                </div>
                <p>
                  Site photos by{' '}
                  <a href="https://www.pexels.com/" target="_blank">
                    Pexels.com
                  </a>
                </p>
                <Header id="home-h2">Who am I?</Header>
                <p>
                  <a href="https://www.linkedin.com/in/timurcatakli/" target="_blank">Click here</a> to find out more about me...
                </p>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="top">
                <Image
                  bordered
                  size="large"
                  src="/img/responsive-iphone.png"
                />
                <Image
                  bordered
                  size="large"
                  src="/img/responsive-tablet.png"
                />
                <Image
                  bordered
                  size="large"
                  src="/img/responsive-desktop.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <a
                  href="https://github.com/facebookincubator/create-react-app"
                  target="_blank"
                >
                  <Button primary size="huge" color="facebook">
                    <Icon name="github" />
                    Download Now
                  </Button>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign="center">
            <Grid inverted stackable>
              <Grid.Row>
                <Grid.Column width={16}>
                  {siteLabel} - {copyrightYear}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
Home.propTypes = propTypes
export default Home
