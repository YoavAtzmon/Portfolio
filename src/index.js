import { BrowserRouter as  Router } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
// import serviceWorker from "serviceworker"

ReactDOM.render(
    <Router>
    <App />
    </Router>,
  document.getElementById('root')
)
// serviceWorker.register()