import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button,} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux'
import logo from '../../img/logo.png'
import background from '../../img/Landing.png'

class Landing extends React.Component {
    
    componentDidMount() {
        if(this.props.authenticated) {
            Actions.newsfeed()
        }
    }
    render() {
        return (
        <View style={Styles.Conatiner}>
              <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
            <View style={Styles.auth}>
                <Button title="Login" onPress={Actions.login}  titleStyle={{color:'black'}} type="solid" buttonStyle={{backgroundColor:'white',width:wp('40%'),height:hp('07%'),borderRadius:50,marginBottom:hp('3%')}} />
                
                <Button title="Register" onPress={Actions.register}  titleStyle={{color:'black'}} type="solid" buttonStyle={{backgroundColor:'white',width:wp('40%'),height:hp('07%'),borderRadius:50}} />
            </View>
            </ImageBackground>            
        </View>
    )
    }
}

const Styles =  StyleSheet.create({
    Conatiner:{
        flex:1, 
    },
    headertext:{
        justifyContent:'center',
        flexDirection:'row'
    },
    BrandText:{
        marginTop:wp('5%'),
        fontSize:25,
        color:'#04848D'
    },
    logo:{
        width: 100, 
        height: 100,
        marginTop:hp('5%'), 
        marginLeft:wp('38%')
    },  
    auth:{
        marginLeft:wp('30.5%'),
        marginTop:hp('45%'),
        justifyContent:'center',
        flexDirection:'column'
    },
    Slogan:{
        textAlign:"center",
        color:'#04848D'
    }

})

const mapStateToProps = ({auth}) => {
    const {authenticated,user} = auth;
    return {authenticated,user};
}

export default connect(mapStateToProps,{})(Landing);
