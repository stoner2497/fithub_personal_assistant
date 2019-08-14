import React, {Fragment} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Router from './Router'
import {Provider} from 'react-redux'
import store from './store'
import {setCurrentUser} from './Actions/AuthAction'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
const func = async () => {
  
const token = await AsyncStorage.getItem("jwttoken")
console.log(token)
if (token) {
  // Set auth token header auth
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  Actions.main()
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   // Logout user
  //   store.dispatch(logoutUser());
  //   // Redirect to login
  //   window.location.href = '/login';
  // }
}
}

class App extends React.Component {
componentDidMount() {
  func()
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
