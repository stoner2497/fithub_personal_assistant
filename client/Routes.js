import React from 'react'
import {Router, Scene, Actions,Switch} from 'react-native-router-flux'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
class RouterComponent extends React.Component{
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth" >
                        <Scene key="login"
                        component={Login}
                        title="login"
                        />
                        <Scene key="register"
                        component={Register}
                        title="Register" />
                    </Scene>
                  </Scene>  
            </Router>
        )
    }
}



export default RouterComponent