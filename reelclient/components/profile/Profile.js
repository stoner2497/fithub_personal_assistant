import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Footer from '../common/Footer';
export default class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <View style={Styles.body}>
                <Text>
                    Profile
                </Text>
            </View>
            <Footer />
            </React.Fragment>
        )
    }
}

const Styles = StyleSheet.create({
    body:{
        flex:1
    }
})
