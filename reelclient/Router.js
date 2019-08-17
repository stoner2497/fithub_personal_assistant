import React, { Component } from 'react'
import {Router, Scene,Stack, Actions,Switch,Drawer} from 'react-native-router-flux'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Landing from './components/auth/Landing'
import NewsFeed from './components/newsfeed/newsfeed'
import SideMenu from './components/common/SideMenu'
import Profile from './components/profile/Profile'
import { connect } from 'react-redux';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

class RouterComponent extends Component {
    render() {
       const hamburger = <Icon name="hamburger" size={30} />
        return (
            <Router>
            <Stack key="root">
                <Scene key="landing"  component={Landing} hideNavBar/>
                <Scene key="login" component={Login} title="FitHub"/>
                <Scene key="register" component={Register} title="FitHub"/>
                <Scene key='newsfeed' type="reset" component={NewsFeed} title='FitHub' /> 
                <Scene key='profile' type="reset" component={Profile} title="profile"   /> 
                <Drawer
                drawerIcon={hamburger}
                open={false}
                key="drawerMenu"
                component={SideMenu}
                drawerWidth={250}
                drawerPosition="right" />
            </Stack>
          </Router>
        )
    }
}
export default RouterComponent