import React, { Component } from 'react'
import {View,TextInput,Text,ToastAndroid,TouchableOpacity} from 'react-native'
import {Card, Button} from 'react-native-elements' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {Actions} from  'react-native-router-flux'
import {emailChanged,passwordChanged,LoginUser} from '../../Actions/AuthAction'
 class Login extends Component {
    componentDidMount() {
        if(this.props.authenticated) {
            Actions.newsfeed()
        }
    }
    onEmailChange(text) {
      this.props.emailChanged(text)  
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)  
      }

    forgot() {
        Actions.forgotpassword()
    }

    onSubmit() {
        let emailvalidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {email,password,error} = this.props
        const userData = {
            email,
            password
        }
        if(emailvalidate.test(email)){
            if(password.length > 6) {
                if(error) {
                    return ToastAndroid.show(error,ToastAndroid.LONG)
                }else {
                    this.props.LoginUser(userData)
                }   
            }else {
                return ToastAndroid.show('password Should be atleast 6 character long', ToastAndroid.SHORT);
                
            }
        }else {
            return ToastAndroid.show('email is incorrect', ToastAndroid.SHORT);
        }
    }
    render() {
        const {error} = this.props
        let err 
        if(error) {
            err = ToastAndroid.show(error,ToastAndroid.LONG)
        }
        return (
            <View style={{backgroundColor:'#C3FEFC',height:hp('100%')}} >
                {err}
                <Card containerStyle={{backgroundColor:'#047481',height:hp('40%'),paddingTop:15}} >
                <Text style={{textAlign:"center",fontSize:15,marginBottom:8,color:'white'}}>Login</Text>
                <TextInput 
                placeholder="Email"
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}
                style={{height: 40, borderColor: 'white', borderBottomWidth: 1,marginTop:5,backgroundColor:'white'}}
                />
                 <TextInput 
                placeholder="Password"
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
                secureTextEntry={true}
                style={{height: 40, borderColor: 'white', borderBottomWidth: 1,marginTop:15,backgroundColor:'white',}}
                />
                <TouchableOpacity onPress={this.forgot.bind(this)}>
                    <Text style={{color:'white',marginTop:3}}>
                        Forgot password
                    </Text>
                </TouchableOpacity>
                <Button title="Login" onPress={this.onSubmit.bind(this)}  type="outline" buttonStyle={{borderColor:'#087990',width:wp('40%'),marginTop:hp('3%'),marginHorizontal:wp('22%')}} />
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