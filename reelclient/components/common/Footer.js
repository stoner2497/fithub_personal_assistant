import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';

export default class Footer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            avatarSource:null
        }
    }
     onProfilePress () {
        Actions.profile()
     }
     onHomePress () {
         Actions.newsfeed()
     }
     onExplorePress() {
         Actions.explore()
     }
     camera() {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      }).catch(err => {
          return ToastAndroid.show(err.response.data,ToastAndroid.LONG)
      })
     }
    render() {
        const Home = <Icon name="home" size={23} color="orange"  />;
        const Add = <Icon name="plus" size={26} color="orange"  />;
        const bino = <Icon name="binoculars" size={23} color="orange" />
        const user = <Icon name="user-circle" size={23} color="orange" />
        const beat = <Icon name="heartbeat" size={23} color="orange" />
        
        return (
            <View style={Styles.tabBar}>
                <TouchableOpacity style="Styles.tabItem" onPress={this.onHomePress.bind(this)}>
                    {Home}
                </TouchableOpacity>
                <TouchableOpacity style="Styles.tabItem" onPress={this.onExplorePress.bind(this)}>
                    {bino}
                </TouchableOpacity>
                <TouchableOpacity style={Styles.tabItem} onPress={this.camera.bind(this)}>
                    {Add}
                </TouchableOpacity>
                <TouchableOpacity style="Styles.tabItem">
                    {beat}
                </TouchableOpacity>
                <TouchableOpacity style="Styles.tabItem" onPress={this.onProfilePress.bind(this)}>
                    {user}
                </TouchableOpacity>
                
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    tabBar:{
        backgroundColor:'white',
        height:60,
        borderTopWidth:0.5,
        borderColor:'#E5E5E5',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:10
    },

})