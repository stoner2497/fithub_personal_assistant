import React from 'react';
import {ImageBackground,View,Image,StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import logo from '../img/logo.png'
import Background from '../img/initial.png'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
class SplashScreen extends React.Component{
    constructor(props) {
        super(props)
       
    }
    render () {
        setTimeout(() => {
            Actions.newsfeed();
        }, 2000);
        return (
        <View>
             <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
             <Image
            source={ logo }
            style={Styles.logo}
            />
             </ImageBackground>
        </View>
    )
    }
}
const Styles = StyleSheet.create({
    logo:{
        width: 100, 
        height: 100,
        marginTop:heightPercentageToDP('5%'), 
        marginLeft:widthPercentageToDP('38%')
    }, 
})

export default SplashScreen;
