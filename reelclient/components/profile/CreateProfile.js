import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Image,TextInput,StyleSheet,Picker} from 'react-native'
import {Card,Button} from 'react-native-elements'
import {connect} from 'react-redux'
import ImagePicker from 'react-native-image-picker';
import {newAccount} from '../../Actions/ProfileAction'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

class createProfile extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            bio:'',
            avatar:'',
            userName:this.props.auth.user.name,
            email:this.props.auth.user.email,
            title:this.props.auth.user.title
        }
        
    }
    camera() {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
           
          /**
           * The first arg is the options object for customization (it can also be null or omitted for default options),
           * The second arg is the callback which sends object: response (more info in the API Reference)
           */
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: 'data:image/jpeg;base64,' + response.data };
           
              this.setState({
                avatar: response
              });
            }
          });
    }

    onSubmit() {
        const {userName,avatar,email,title,bio} = this.state
        const userData = {
            userName,
            email,
            title,
            bio
        }
        this.props.newAccount(avatar,{userData})
    }
  

    render() {
        const {email,name,title} = this.props.auth.user
        const {error} = this.props.profile
        const {bio ,avatar} = this.state
        let img 
        console.log(avatar)
        if(avatar === '') {
            img = `http:${this.props.auth.user.avatar}`
        }else {
            img = avatar.uri
        }
        return (
            <View>
                <Card containerStyle={{backgroundColor:'#047481',justifyContent:'center',alignItems:'center'}}>
                    {console.log(img)}
                    <Image source={{uri:img}} style={{width:100,height:100,borderRadius:60}}/>
                <TouchableOpacity onPress={this.camera.bind(this)}>
                    <Text style={{color:'white'}}>Edit Avatar</Text>
                </TouchableOpacity>
                <TextInput
                    style={Styles.inputBox}
                    value={this.state.userName}
                    name="name"
                    onChangeText={name => {this.setState({userName:name})}}
                />
                <TextInput
                    style={Styles.inputBox}
                    value={this.state.email}
                    name="email"
                    onChangeText={email => {this.setState({email})}}
                    placeholder="email"
                />
                <Picker
                    selectedValue={this.state.title}
                    style={Styles.inputBox}
                    onValueChange={val => this.setState({title:val})}>
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
                <TextInput
                    multiline={true}
                    style={Styles.multiInputBox}
                    value={this.state.bio}
                    name="bio"
                    onChangeText={bio => {this.setState({bio:bio})}}
                    placeholder="Define yourself"
                />
                <Button onPress={this.onSubmit.bind(this)} title="Create Account"  titleStyle={{color:'white'}} type="solid" buttonStyle={{backgroundColor:'#04848D',width:widthPercentageToDP('40%'),marginTop:heightPercentageToDP('3%')}}  />
                </Card>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    inputBox:{
        backgroundColor:'white',
        paddingTop:5,
        marginTop:10,
        justifyContent:'center',
        width:widthPercentageToDP('50%'),
        height:heightPercentageToDP('5%')
    },
    multiInputBox:{
        backgroundColor:'white',
        marginTop:10,
        justifyContent:'center',
        width:widthPercentageToDP('50%'),
        height:heightPercentageToDP('10%')
    }
})
const mapStateToProps = (state) => ({
    auth:state.auth,
    profile:state.Account
})
export default connect(mapStateToProps,{newAccount}) (createProfile)