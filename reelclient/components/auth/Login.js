import React, { Component } from 'react'
import {View,TextInput,Text,ToastAndroid,TouchableOpacity,ImageBackground} from 'react-native'
import {Card, Button} from 'react-native-elements' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {Actions} from  'react-native-router-flux'
import {emailChanged,passwordChanged,LoginUser} from '../../Actions/AuthAction'
import Spinner from '../common/Spinner'
import background from '../../img/background.png'
import box from '../../img/box.png'

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
            // if(password.length > 6) {
                if(error) {
                    return ToastAndroid.show(error,ToastAndroid.LONG)
                }else {
                    this.props.LoginUser(userData)
                }   
            // }else {
            //     return ToastAndroid.show('password Should be atleast 6 character long', ToastAndroid.SHORT);
                
            // }
        }else {
            return ToastAndroid.show('email is incorrect', ToastAndroid.SHORT);
        }
    }
    onRender = () => {
        if(this.props.loading) {
            return <Spinner size="small" />
        }
            return (<Button title="Login" onPress={this.onSubmit.bind(this)}  type="solid" titleStyle={{color:'black'}} buttonStyle={{backgroundColor:'white',borderColor:'white',width:wp('40%'),marginTop:hp('3%'),marginHorizontal:wp('22%')}} />)
        
    }
    render() {
      const {errors} = this.props
      let value
        if(errors.email) {
            value =  ToastAndroid.show(errors.email,ToastAndroid.LONG) 
        }else {
            value = null
        }
        return (
            <View  >
                <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
                <Card containerStyle={{height:hp('40%'),paddingTop:15}} >
                <ImageBackground source={box} style={{width: '100%', height: '100%'}}>
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
                {this.onRender()}
                </ImageBackground>
                </Card>
                {value}
                </ImageBackground>
            </View>
        )
    }
}
const mapStateToProps = ({auth}) => {
    const {email,password,errors,loading,authenticated} = auth;
    return {email,password,errors, loading,authenticated};
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,LoginUser})(Login)