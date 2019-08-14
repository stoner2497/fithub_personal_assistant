import React, { Component } from 'react'
import {View,TextInput,Text,Picker} from 'react-native'
import {Card, Button} from 'react-native-elements' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {emailChanged,passwordChanged,nameChanged,titleChanged,RegisterUser} from '../../Actions/AuthAction'
 class Register extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)  
          
      }
      onPasswordChange(text) {
          this.props.passwordChanged(text)  
            
        }
        onNameChange(text) {
            this.props.nameChanged(text)
        }
        onTitleChange(text) {
            this.props.titleChanged(text)
        }
  
      onSubmit() {
          const {name,title,email,password} = this.props
          const userData = {
              name,
              title,
              email,
              password
          }
          this.props.RegisterUser(userData)
          
      }
    render() {
        return (
            <View>
            <Card >
            <Text style={{textAlign:"center",fontSize:15,marginBottom:8}}>Login</Text>
            <TextInput 
            placeholder="Name"
            value={this.props.name}
            onChangeText={this.onNameChange.bind(this)}
            style={{height: 40, borderColor: 'black', borderBottomWidth: 1,marginTop:5}}
            />
            <TextInput 
            placeholder="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
            style={{height: 40, borderColor: 'black', borderBottomWidth: 1,marginTop:5}}
            />
             <TextInput 
            placeholder="Password"
            onChangeText ={this.onPasswordChange.bind(this)}
            secureTextEntry={true}
            style={{height: 40, borderColor: 'black', borderBottomWidth: 1,marginTop:5}}
            />
            <Picker
            selectedValue={this.props.title}
            style={{height: 50, width: 100}}
            onValueChange={this.onTitleChange.bind(this)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Button title="Register" onPress={this.onSubmit.bind(this)}  type="outline" buttonStyle={{borderColor:'orange',width:wp('40%'),marginTop:hp('3%'),marginHorizontal:wp('22%')}} />
            </Card>
        </View>
        )
    }
}
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading,name,title} = auth;
    return {email,password,error, loading,name,title};
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,nameChanged,titleChanged,RegisterUser})(Register)