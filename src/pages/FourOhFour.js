import React from 'react'
import { Grid, Header, Image, Message } from 'semantic-ui-react'

const FourOhFour = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="teal" textAlign="center">
          <Image src="img/atomic-256.png" />
          <br />
          404
          <br />
          Page Not Found
        </Header>
        <Message>
          The page you are looking for does not exist or another error occured.{' '}
          <a href="/">Click here</a> to go to home page.
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default FourOhFour
