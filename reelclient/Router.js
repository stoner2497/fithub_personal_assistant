import React, { Component } from 'react'
import {Router, Scene,Stack, Actions,Switch} from 'react-native-router-flux'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Landing from './components/auth/Landing'
import NewsFeed from './components/newsfeed/newsfeed'
import { connect } from 'react-redux';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
            <Stack key="root">
              <Scene key="auth" hideNavBar>
              <Scene key="landing" component={Landing} hideNavBar/>
              <Scene key="login" component={Login} title="FitHub"/>
              <Scene key="register" component={Register} title="FitHub"/>
              </Scene>
              <Scene key='main' hideNavBar >
                <Scene key='newsfeed' component={NewsFeed} title='FitHub' /> 
              </Scene>
            </Stack>
          </Router>
        )
    }
}
export default RouterComponent