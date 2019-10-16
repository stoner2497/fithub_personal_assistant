import React, {Fragment} from 'react';
import {
  PermissionsAndroid
} from 'react-native';
import Router from './Router'
import {Provider} from 'react-redux'
import store from './store'
import {setCurrentUser,onLoading,onLoadingFalse,logoutUser} from './Actions/AuthAction'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
// import Contacts from 'react-native-contacts'

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,]
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.func = this.func.bind(this)
    this.func()
    // console.log('im constructor')
    
  }
   func = async () => {
  
    const token = await AsyncStorage.getItem("jwttoken")
    store.dispatch(onLoading)
    if (token) {
      // Set auth token header auth
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      store.dispatch(onLoadingFalse) 
      console.log('im last')
      Actions.newsfeed()      
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        Actions.push('landing') 
      }
    }
    }
  
  async componentDidMount() {
    console.log('then im')
     await requestCameraPermission()
     
   }
  render() {
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
  

};


export default App;
