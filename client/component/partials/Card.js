import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
export default function Card(props) {
    return (
       
            <View style={Styles.Card}>
                {props.children}
            </View>

    )
}

const Styles = StyleSheet.create({
    Card:{
        borderWidth:2,
        borderColor:'#1ABCCE',
        borderRadius:2,
        shadowColor:'#1ABCCE',
        shadowOffset: {width:2,height:2},
        shadowOpacity: 1.5,
        shadowRadius:2,
        elevation:2,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    }
})