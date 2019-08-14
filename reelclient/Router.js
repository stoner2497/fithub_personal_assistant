import React, { Component } from 'react'
import {Router, Scene,Stack, Actions,Switch} from 'react-native-router-flux'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Landing from './components/auth/Landing'
export default class RouterComponent extends Component {
    render() {
        return (
            <Router>
            <Stack key="root">
              <Scene key="landing" component={Landing} hideNavBar/>
              <Scene key="login" component={Login} title="FitHub"/>
              <Scene key="register" component={Register} title="FitHub"/>
            </Stack>
          </Router>
        )
    }
}
