import React from 'react'
import {TouchableHighlight,View,Text,StyleSheet} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

 function Button(props) {
    return (
        <TouchableHighlight onPress={props.onPress} >
            <View style={Styles.Button} >
            <Text>
                {props.children}
            </Text>
            </View>
        </TouchableHighlight>
    )
}
export default Button
const Styles = StyleSheet.create({
    Button:{
        borderRadius:3,
        borderWidth:3,
        borderColor:'#63E0F9',
        justifyContent:'center',
        alignItems:'center',
        width:widthPercentageToDP('70%'),
        height:heightPercentageToDP('7%')
    }
})
