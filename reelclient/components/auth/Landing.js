import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button,} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import logo from '../../img/logo.png'
const Landing = () => {
    return (
        <View style={Styles.Conatiner}>
            <Image
            source={ logo }
            style={Styles.logo}
            />
            <View style={Styles.headertext}>
            <Text style={Styles.BrandText}>
                Fithub
            </Text>
            </View>
            <Text style={Styles.Slogan}>
                Your Personal Trainer and FitnessHub
            </Text>
            <View style={Styles.auth}>
                <Button title="Login" onPress={Actions.login}  titleStyle={{color:'orange'}} type="solid" buttonStyle={{backgroundColor:'yellow',width:wp('40%'),marginBottom:hp('3%')}} />
                
                <Button title="Register" onPress={Actions.register}  titleStyle={{color:'orange'}} type="solid" buttonStyle={{backgroundColor:'yellow',width:wp('40%')}} />
            </View>
            
        </View>
    );
}

const Styles =  StyleSheet.create({
    Conatiner:{
        flex:1,
        backgroundColor:'#F05E23',  
    },
    headertext:{
        justifyContent:'center',
        flexDirection:'row'
    },
    BrandText:{
        marginTop:wp('5%'),
        fontSize:25,
        color:'white'
    },
    logo:{
        width: 100, 
        height: 100,
        marginTop:hp('5%'), 
        marginLeft:wp('38%')
    },  
    auth:{
        marginLeft:wp('30.5%'),
        marginTop:hp('10%'),
        justifyContent:'center',
        flexDirection:'column'
    },
    Slogan:{
        textAlign:"center",
        color:'white'
    }

})

export default Landing;
