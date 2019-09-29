import React from 'react'
import {View,ActivityIndicator,StyleSheet} from 'react-native'
 function Spinner({size,color}) {
    return (
        <View style={Styles.Spinner} >
            <ActivityIndicator size={size || 'large'} color={color || 'white'} />
        </View>
    )
}

const Styles = StyleSheet.create({
    Spinner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Spinner