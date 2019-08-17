import React, { Component } from 'react'
import {View,Text,BackHandler,StyleSheet} from 'react-native'
import Footer from '../common/Footer'
import {connect} from 'react-redux'
import GroupButton from '../common/grpButtons'

 class newsfeed extends Component {
     componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
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