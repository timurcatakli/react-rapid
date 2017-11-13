import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// style 404 page
// create config file
// create reusable custom comp like footer etc...
// look into seo

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
registerServiceWorker()
