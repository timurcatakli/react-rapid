This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). So any feature or script supported by Create-React-App is also supported.

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

2- Add a new key and value under pages as below

```
pages: {
  newpage: {
    component: 'NewPage',
    label: 'New Page',
    icon: 'signal',
    subTitle:
      'New Page subtitle goes here.',
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
```
3- https://react.semantic-ui.com/elements/icon
firebase deploy

seo index.html
icons go to the site to generate your own icons...

### `yarn` or `npm start`

### `yarn start` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).
