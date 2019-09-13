import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet,Button, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-elements'
import Icons from 'react-native-vector-icons/FontAwesome5'
import {heightPercentageToDP,widthPercentageToDP} from 'react-native-responsive-screen'
export default class SearchBox extends Component {
    render() {
        let icon =   <Icons name="search" size={20} color='#04848D' />
        return (
            <View >
               <Card  >
                <View style={Styles.section}>
                <TextInput
                    placeholder="Search Fithub"
                    style={Styles.SearchBox}
                />
                <TouchableOpacity >
                    <Text >{icon}</Text>
                </TouchableOpacity>
               </View>
               </Card>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    SearchBox:{
        flex:1
    },
    section:{
        height:heightPercentageToDP('7%'),
        // width:widthPercentageToDP('80%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius:60,
        margin: 10,
        paddingRight:2
    }
})