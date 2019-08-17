import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';

export default class Footer extends Component {

     onProfilePress () {
        Actions.profile()
     }
     onHomePress () {
         Actions.newsfeed()
     }
    render() {
        const Home = <Icon name="home" size={23} color="#04848D"  />;
        const Add = <Icon name="plus" size={26} color="#04848D"  />;
        const bino = <Icon name="binoculars" size={23} color="#04848D" />
        const user = <Icon name="user-circle" size={23} color="#04848D" />
        const beat = <Icon name="heartbeat" size={23} color="#04848D" />
        
        return (
            <View style={Styles.tabBar}>
                <TouchableOpacity style="Styles.tabItem" onPress={this.onHomePress.bind(this)}>
                    {Home}
                </TouchableOpacity>
                <TouchableOpacity style="Styles.tabItem">
                    {bino}
                </TouchableOpacity>
                <TouchableOpacity style={Styles.tabItem}>
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