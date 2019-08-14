import React, {Fragment} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Router from './Router'
import {Provider} from 'react-redux'
import store from './store'
const App = () => {
  return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
};


export default App;
