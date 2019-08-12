
import React, {Fragment} from 'react';
import {
  View
} from 'react-native';

import store from './store'
import {Provider} from 'react-redux'
import Router from './Routes'


class App extends React.Component {
  render(){
   
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
};

export default App;
