import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import '@styles/index.scss'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

ReactDOM.render(
  { renderRoutes(routes) }
  document.getElementById('root')
)
