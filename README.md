This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Any feature or script supported by Create-React-App is also supported.

## Folder Structure

After pulling to your local, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components
    pages
    App.css
    App.js
    config.js
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

## Installation & Setup
1- Clone the repo:

`git clone https://github.com/timurcatakli/react-rapid.git`

2- Switch to directory

`cd react-rapid`

3- Run npm or yarn

`npm install`
or
`yarn`

4- After all Node modules are installed

`npm run start` or `yarn start`

5- Your website should be started automatically in your browser at `http://localhost:3000`

## Adding a New Page
1- Open the `config.js` file located under `src` directory

2- Add a new key and value under `pages` as below. Pick an icon from [Semantic-UI](https://react.semantic-ui.com/elements/icon).

```
pages: {
  newpage: {
    component: 'NewPage',
    label: 'New Page',
    icon: 'alarm',
    subTitle:
      'New Page unc gravida tellus eget odio molestie eleifend feugiat non lorem.',
    path: '/newpage'
  },
  aboutus: {
    component: 'AboutUs',
    label: 'About Us',
    icon: 'building',
    subTitle:
      'About Us unc gravida tellus eget odio molestie eleifend feugiat non lorem.',
    path: '/aboutus'
  },
  ...
  ..
  .
```
3- Under `src/pages` folder create a new folder called: `new-page`

4- Under the folder `new-page`, create a file called `NewPage.js` and add the following starter code.

```js
import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Grid
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}
const NewPage = () => (
  <div>
    <Segment basic>
      <Container>
        <h3 id="category-title">Magna Aliqua Enimad</h3>
        <Grid columns={2} stackable verticalAlign="top">
          <Grid.Column>
            <h4 id="article-title">Magna Aliqua Enimad</h4>
            <div id="article-content">
              <p>
                Nobis at explicabo similique laudantium deserunt, excepturi
                fugit eum voluptatem commodi soluta quaerat, adipisci ducimus
                optio, earum beatae! Cupiditate laboriosam tenetur libero at
                vitae possimus velit est, eum quam ratione. Molestiae, veniam.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <h4 id="article-title">Magna Aliqua Enimad</h4>
            <div id="article-content">
              <p>
                Nobis at explicabo similique laudantium deserunt, excepturi
                fugit eum voluptatem commodi soluta quaerat, adipisci ducimus
                optio, earum beatae! Cupiditate laboriosam tenetur libero at
                vitae possimus velit est, eum quam ratione. Molestiae, veniam.
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
)

NewPage.propTypes = propTypes
export default NewPage

```
5- Finally update the page routes file `PageRoutes.js` as below:

```js
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import AboutUs from '../pages/about-us/AboutUs'
import Portfolio from '../pages/portfolio/Portfolio'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import NewPage from '../pages/new-page/NewPage'

const propTypes = {
  path: PropTypes.string,
  activePage: PropTypes.object.isRequired
}

class PageRoutes extends React.Component {
  render() {
    const { activePage } = this.props

    return (
      <Switch>
        <Route path="/aboutus">
          <AboutUs pageData={activePage} />
        </Route>
        <Route path="/newpage">
          <NewPage pageData={activePage} />
        </Route>
        <Route path="/portfolio">
          <Portfolio pageData={activePage} />
        </Route>
        <Route path="/services">
          <Services pageData={activePage} />
        </Route>
        <Route path="/contact">
          <Contact pageData={activePage} />
        </Route>
      </Switch>
    )
  }
}

PageRoutes.propTypes = propTypes
export default PageRoutes
```

## SEO
Don't forget to update the `index.html` file with your info. Also you can use [Favicon Generator](https://realfavicongenerator.net) and update the favicons under root folder.

## Deployment
In order to deploy your project to Firebase Hosting, follow these instructions:

1- Make sure that Firebase CLI tools is installed locally.

2- Login to Firebase and create a projects

3- Update `.firebaserc` file with your project name.

4- Run `yarn build` or `npm run build`

5- Run `firebase deploy`

## Sending Feedback/Contribution

We are always open to [your feedback & contributions](https://github.com/timurcatakli/react-rapid/issues).
