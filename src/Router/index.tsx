import React, { useEffect } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './history'
import routes from 'routes'
import LogIn from 'User/Auth/LogIn'
import LogInWithNumio from 'User/Auth/LogInWithNumio'
import SignUp from 'User/Auth/SignUp'
import Layout from 'Layout'
import Home from 'Pages/Home'
import Proposals from 'Pages/Proposals'
import Votes from 'Pages/Votes'
import ActiveProjects from 'Pages/ActiveProjects'
import Rewards from 'Pages/Rewards'
import authHeader from 'services/auth-header'

export default () => {
  const [accessToken, setAccessToken] = React.useState(authHeader().Authorization)  

  return (
    <Router history={history}>
      <Switch>
        <Route path={routes.auth.root()} render={() =>
          <Switch>
            <Route path={routes.auth.logIn()}>
              <LogIn setAccessToken={(str: string) => setAccessToken(str)}/>
            </Route>
            <Route path={routes.auth.logInWithNumio()} component={LogInWithNumio} />
            <Route path={routes.auth.signUp()} component={SignUp} />
          </Switch>
        } />
        <Route render={() =>  accessToken ? <Layout>
            <Switch>
              <Route path={routes.root()} exact component={Home} />
              <Route path={routes.proposals()} exact component={Proposals} />
              <Route path={routes.votes()} exact component={Votes} />
              <Route path={routes.activeProjects()} exact component={ActiveProjects} />
              <Route path={routes.rewards()} exact component={Rewards} />
            </Switch>
          </Layout>: <Redirect to={routes.auth.logIn()} /> }/> 
      </Switch>
    </Router>
  )
}