import React, { Component } from 'react'
import {Router, Scene,Stack, Actions,Switch,Drawer} from 'react-native-router-flux'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Landing from './components/auth/Landing'
import NewsFeed from './components/newsfeed/newsfeed'
import SideMenu from './components/common/SideMenu'
import Profile from './components/profile/Profile'
import CreateProfile from './components/profile/CreateProfile'
import EditProfile from './components/profile/EditProfile'
import ForgotPassword from './components/auth/ForgotPassword'
import SplashScreen from './components/SplashScreen'
import Explore from './components/explore/Explore'
import UserProfile from './components/explore/UserProfile'
import SearchBox from './components/search/SearchBox'
import { connect } from 'react-redux';
import PrivateScene from './PrivateScene'
import  Icon  from 'react-native-vector-icons/FontAwesome5';

class RouterComponent extends Component {
    render() {
       const hamburger = <Icon name="hamburger" size={30} />
       let searchIcon = <Icon name="searchengin" size={25} color="#FA5606" />
        return (
            <Router>
            <Scene key="root">
                <Scene key="splash" component ={SplashScreen} initial  hideNavBar />
                <Scene key="landing"  component={Landing} hideNavBar/>
                <Scene key="login"  component={Login} title="FitHub"/>
                <Scene key="register" component={Register} title="FitHub"/>
                <Scene 
                    key="forgotpassword"
                    component={ForgotPassword}
                    title="FITHUB"
                />
                {/* <Scene key='newsfeed' type="reset"  title="profile" 
                drawer
                contentComponent={Camera}
                drawerWidth={100}
                drawerPosition="right"
                drawerIcon={hamburger}
                hideNavBar>  */}
                        <PrivateScene key='newsfeed' type='reset' component={NewsFeed} title='Fithub' />
                    {/* <Scene key='newsfeed' type="reset" component={NewsFeed} title='FitHub' /> */}
                {/* </Scene>  */}
                <Scene key='profile' type="reset"  title="profile" 
                drawer
                contentComponent={SideMenu}
                drawerWidth={250}
                drawerPosition="right"
                drawerIcon={hamburger}
                hideNavBar>
                    <Scene key="drawer1"
                        component={Profile}
                        title="profile"
                        navigationBarStyle={{ backgroundColor: '#C3FEFC',elevation:0,shadowOffset:0 }}
                    />  
                </Scene>
                <Scene 
                    key="createProfile"
                    component={CreateProfile}
                    title="complete your profile"
                />
                
                <Scene
                    key="editProfile"
                    component={EditProfile}
                    title="Edit Profile"
                    />
                <Scene 
                    key="SearchBox"
                    component={SearchBox}
                    title="Search" />
                <Scene 
                    key="explore"
                    component={Explore}
                    title="Explore Fithub"
                    type="reset"
                    onRight={() => Actions.SearchBox()}
                    rightTitle={searchIcon}
                    />
                <Scene 
                    key="userProfile"
                    component={UserProfile}
                    title='Explore'
                    />
            </Scene>
          </Router>
        )
    }
}
export default RouterComponent