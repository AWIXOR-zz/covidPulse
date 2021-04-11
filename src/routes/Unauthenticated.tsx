import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'helpers/history'
import Login from 'features/auth/modules/Login'
import Register from 'features/auth/modules/Register'
import Header from 'ui/components/Header'
import Home from 'features/home/modules/Home/index'
import Search from 'features/search/modules/Search/index'
import Footer from 'ui/components/Footer'
import VenueDetails from 'features/venue/modules/venue'

const NotFound = () => <h2>404 Not Found</h2>

const Unauthenticated = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/signin" component={Login} />
      <Route path="/venue-details" component={VenueDetails} />
      <Route path="/signup" component={Register} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
)

export default Unauthenticated
