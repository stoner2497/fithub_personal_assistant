import React from 'react'
import {connect} from 'react-redux'
import {Scene,Actions} from 'react-native-router-flux'


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Scene
      {...rest}
      on={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          Actions.popTo('login')
        )
      }
    />
  );
  
 
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(PrivateRoute);
  