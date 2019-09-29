import React, { Component } from 'react'
import {View,Text,TextInput,ImageBackground,StyleSheet, ToastAndroid} from 'react-native'
import {connect} from 'react-redux'
import {Card, Button} from 'react-native-elements' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {emailChanged,forgotPassword} from '../../Actions/AuthAction'
import Spinner from '../common/Spinner'
import background from '../../img/background.png'
import box from '../../img/box.png'
 class ForgotPassword extends Component {
    onEmailChange (text) {
        this.props.emailChanged(text)
    }
    onRender = () => {
        if(this.props.loading) {
            return <Spinner size="small" />
        }
            return (<Button title="Submit" onPress={this.onSubmit.bind(this)}  type="solid" titleStyle={{color:'black'}} buttonStyle={{backgroundColor:'white',borderColor:'white',width:wp('40%'),marginTop:hp('3%'),marginHorizontal:wp('22%')}} />)
        
    }
    onSubmit() {
        let emailvalidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {email} = this.props
        if(!email) {
            ToastAndroid.show('please enter a email',ToastAndroid.LONG)
        }else {
            if(emailvalidate.test(email)){
                return email
            }else {
                ToastAndroid.show('please enter correct email',ToastAndroid.LONG)
            }
        }
    }
    render() {
        return (
            <View>
                <ImageBackground source={background} style={{width: '100%', height: '100%'}} >
                    <Card containerStyle={{height:hp('40%'),paddingTop:15}}>
                    <ImageBackground source={box} style={{width:'100%',height:'100%'}} >
                        <Text style={Styles.headerText}>
                            Enter Your Registerd 
                                 Email
                        </Text>
                        <TextInput
                        placeholder="enter email"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                        style={Styles.textBox}
                        />
                        {this.onRender()}
                    </ImageBackground>
                    </Card>
                </ImageBackground>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    headerText:{
        marginTop:2,
        textAlign:'center',
        color:'white',
        fontSize:15
    },
    textBox:{
        height: 40, 
        borderColor: 'white',
         borderBottomWidth: 1,
         marginTop:10,
         backgroundColor:'white'
    }
})

const mapStateToProps = ({auth}) => {
    const {email,password,errors,loading,authenticated} = auth;
    return {email,password,errors, loading,authenticated};
}
export default connect(mapStateToProps,{emailChanged,forgotPassword}) (ForgotPassword)