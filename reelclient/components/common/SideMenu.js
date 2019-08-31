import React , {Component} from 'react';
import {View,Text ,StyleSheet,TouchableOpacity} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {logoutUser} from '../../Actions/AuthAction'

 class SideMenu extends Component{
     onLogOut() {
         this.props.logoutUser()
     }

    render() {
        return (
            <React.Fragment>
                <View style={styles.Header}>
                <Text style={{color:'white'}}>
                    Settings
                </Text>
            </View>
            <View style={styles.container}>
               <TouchableOpacity onPress={this.onLogOut.bind(this)}>
               <Text>Logout</Text>
               </TouchableOpacity>
            </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    Header:{
        width:widthPercentageToDP("100%"),
        height:heightPercentageToDP('5%'),
        backgroundColor:'blue'
    }
});

export default connect(null,{logoutUser})(SideMenu)