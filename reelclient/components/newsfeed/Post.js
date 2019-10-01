import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { getSubscriberPost } from "../../Actions/PostAction";
import {getAccount} from '../../Actions/ProfileAction'
import {Card} from 'react-native-elements'
import { 
    AdMobBanner
  } from 'react-native-admob'
  import Spinner from "../common/Spinner";
import { connect } from 'react-redux';
 class Post extends Component {
    
    render() {
        const {profile} = this.props.profile
        const {Subscribing,Subscribed} = profile
        const { posts, loading } = this.props.post;
        let content
        let hell
        console.log(profile)
        if (loading) {
          return <Spinner size="large" color="orange" />;
        } else {
              
           content = posts.flatMap(post => {
              return post.flatMap(post => {
                return post
              })
            })
          hell = content.map(con => <Text>{con.name}</Text>)
    
        }
            return (
                <React.Fragment>
                    {hell}
                    <AdMobBanner
                    bannerSize="mediumRectangle" 
                    adUnitID="ca-app-pub-2630087167371752/4742268630"
                    testDeviceID="EMULATOR"
                    didFailToReceiveAdWithError={this.bannerError} />
                </React.Fragment>
            )
    }
}
const Styles = StyleSheet.create({
        CardSection:{
            padding:5,
            backgroundColor:'#fff',
            justifyContent:'flex-start',
            flexDirection:'row',
            position:'relative',
            borderWidth:0
        }
})

const mapStateToProps = state => ({
    auth: state.auth,
    post: state.post,
    profile:state.Account
  });


export default connect( mapStateToProps,
    { getSubscriberPost ,getAccount })(Post)