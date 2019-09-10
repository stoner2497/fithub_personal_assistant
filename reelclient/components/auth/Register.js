import React, { Component } from 'react'
import {View,TextInput,Text,Picker,ToastAndroid} from 'react-native'
import {Card, Button} from 'react-native-elements' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {emailChanged,passwordChanged,nameChanged,titleChanged,RegisterUser} from '../../Actions/AuthAction'
// import WheelPicker from '../../Wheelpicker'

// const wheelPickerData = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

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
          if(!name) {
            return   ToastAndroid.show('please enter name',ToastAndroid.LONG)
          } else if(!email) {
            return   ToastAndroid.show('please enter email',ToastAndroid.LONG)
          } else if(!password) {
            return   ToastAndroid.show('please enter password',ToastAndroid.LONG)
          } else if(!title) {
            return   ToastAndroid.show('please enter title',ToastAndroid.LONG)
          }else if(name.length > 10) {
            return   ToastAndroid.show('name should be of 10 letters long',ToastAndroid.LONG)
          } 
                const userData = {
                    name,
                    title,
                    email,
                    password
                }
                this.props.RegisterUser(userData)
          
      }
    render() {
      let err

      if(this.props.error) {
        err = ToastAndroid.show(error,ToastAndroid.LONG)
      }
        return (
            <View style={{backgroundColor:'#C3FEFC',height:hp('100%')}}>
            <Card  containerStyle={{backgroundColor:'#047481'}}>
            <Text style={{textAlign:"center",fontSize:15,marginBottom:8,color:'white'}}>Register To Fithub Commounity</Text>
            <TextInput 
            placeholder="Name"
            value={this.props.name}
            onChangeText={this.onNameChange.bind(this)}
            style={{height: 40, borderColor: 'black',backgroundColor:'white', borderBottomWidth: 1,marginTop:5}}
            />
            <TextInput 
            placeholder="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
            style={{height: 40, borderColor: 'black', borderBottomWidth: 1,backgroundColor:'white',marginTop:5}}
            />
             <TextInput 
            placeholder="Password"
            onChangeText ={this.onPasswordChange.bind(this)}
            secureTextEntry={true}
            style={{height: 40, borderColor: 'black', borderBottomWidth: 1,backgroundColor:'white',marginTop:5}}
            />
           {/* <WheelPicker 
            selectedItem={this.props.title}
            data={wheelPickerData} 
            onItemSelected={this.onTitleChange.bind(this)}/> */}
            <Picker
            selectedValue={this.props.title}
            style={{height: 35,backgroundColor:'white' ,width: wp('85%'),marginTop:7}}
            onValueChange={this.onTitleChange.bind(this)}>
            <Picker.Item label="select title" value="select title" />
            <Picker.Item label="Beginier" value="Beginier" />
            <Picker.Item label="Trainer" value="Trainer" />
            <Picker.Item label="Nutrionist" value="Nutrionist" />
            <Picker.Item label="Man Physics" value="Man Physics" />
            <Picker.Item label="state level champ" value="state level champ" />
            <Picker.Item label="district level champ" value="district level champ" />
            <Picker.Item label="National level champ" value="National level champ" />
            <Picker.Item label="Dietician" value="Dietician" />
            <Picker.Item label="Fitness Consultant" value="Fitness Consultant" />
            
            </Picker>
            <Button title="Register" onPress={this.onSubmit.bind(this)}  type="outline" buttonStyle={{borderColor:'blue',width:wp('40%'),marginTop:hp('3%'),marginHorizontal:wp('22')}} />
            </Card>
            {err}
        </View>
        )
    }
}
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading,name,title} = auth;
    return {email,password,error, loading,name,title};
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,nameChanged,titleChanged,RegisterUser})(Register)