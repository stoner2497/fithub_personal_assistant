import React, { Component } from 'react'
import {View,Text} from 'react-native'
import {Card} from 'react-native-elements'
import { 
    AdMobBanner
  } from 'react-native-admob'
export default class Post extends Component {
    render() {
        return (
            <View>
                <Card>
             <AdMobBanner
                bannerSize="mediumRectangle"
                
                adUnitID="ca-app-pub-2630087167371752/4742268630"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError} />
               </Card>
            </View>
        )
    }
}
