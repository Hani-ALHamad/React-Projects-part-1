import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Context from './context'
import Nav from './nav'
import List from './list'
import FOF from './pages/404'
import Details from './pages/details'

const App = () => {
  return (
    <Context>
      <Router>
        <main>
          <Nav />
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/details/:url">
              <Details />
            </Route>
            <Route path="*">
              <FOF />
            </Route>
          </Switch>
        </main>
      </Router>
    </Context>
  )
}

export default App