import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'components'

import {  Home,LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import registerServiceWorker from 'registerServiceWorker'
import Artista from 'views/Pages/Artista'
import Buscar from 'views/Pages/Buscas'

ReactDOM.render(
  <Router>
    <Switch>
      <Layout>
        <Route path="/login/callback" exact component={LoginCallback} />
        <PrivateRoute path="/artista/:id" exact component={Artista} />
        <PrivateRoute path="/buscas" exact component={Buscar} />
        <PrivateRoute path="/" exact component={Home} />
      </Layout>
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
