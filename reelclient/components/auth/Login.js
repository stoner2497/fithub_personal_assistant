import React, { Component } from 'react'
import {View,TextInput,Text} from 'react-native'
import {Card, Button} from 'react-native-elements' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {Actions} from  'react-native-router-flux'
import {emailChanged,passwordChanged,LoginUser} from '../../Actions/AuthAction'
 class Login extends Component {
    componentWillMount() {
        if(this.props.authenticated) {
            Actions.main()
        }
    }
    onEmailChange(text) {
      this.props.emailChanged(text)  
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)  
      }

    onSubmit() {
        const {email,password} = this.props
        const userData = {
            email,
            password
        }
        this.props.LoginUser(userData)
    }
    render() {
        return (
            <View>
                <Card >
                <Text style={{textAlign:"center",fontSize:15,marginBottom:8}}>Login</Text>
                <TextInput 
                placeholder="Email"
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}
                style={{height: 40, borderColor: 'black', borderBottomWidth: 1,marginTop:5}}
                />
                 <TextInput 
                placeholder="Password"
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
                secureTextEntry={true}
                style={{height: 40, borderColor: 'black', borderBottomWidth: 1,marginTop:5}}
                />
                <Button title="Login" onPress={this.onSubmit.bind(this)}  type="outline" buttonStyle={{borderColor:'orange',width:wp('40%'),marginTop:hp('3%'),marginHorizontal:wp('22%')}} />
                </Card>
            </View>
        )
    }
}
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading,authenticated} = auth;
    return {email,password,error, loading,authenticated};
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,LoginUser})(Login)