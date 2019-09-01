import React, { Component } from 'react'
import {View,Text,BackHandler,StyleSheet,ScrollView} from 'react-native'
import Footer from '../common/Footer'
import {connect} from 'react-redux'
import GroupButton from '../common/grpButtons'
import {Card} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { 
    AdMobBanner
  } from 'react-native-admob'


 class newsfeed extends Component {
     constructor(props) {
         super(props)
         this.onLoad.bind(this)
     }
     
     componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.onLoad()
    }
    onLoad() {
        const {authenticated} = this.props.auth
        if(!authenticated){
            Actions.push('landing')
        }
    }
    
      handleBackPress = () => {
        BackHandler.exitApp() // works best when the goBack is async
        return true;
      }
    render() {
        const {user} = this.props.auth
       
        return (
            <React.Fragment>
            <View style={Styles.body}>
                <GroupButton />
                <Text>
                    {user.name}
                </Text>
                <ScrollView>
               <Card>
               <AdMobBanner
                bannerSize="mediumRectangle"
                
                adUnitID="ca-app-pub-2630087167371752/4742268630"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError} />
               </Card>
               <Card>
               <AdMobBanner
                bannerSize="mediumRectangle"
                
                adUnitID="ca-app-pub-2630087167371752/4742268630"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError} />
               </Card>
               </ScrollView>
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

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{})(newsfeed)