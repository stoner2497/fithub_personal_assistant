import React, { Component } from 'react'
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'
import Footer from '../common/Footer';
import {connect} from 'react-redux'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {Card, Avatar} from 'react-native-elements'
import Icons from 'react-native-vector-icons/FontAwesome5'
import {Actions} from 'react-native-router-flux'
import { Button } from 'react-native-elements';
import {getAccount} from '../../Actions/ProfileAction'
import isEmpty from '../../utils/isEmpty'
// import {Image} from 'react-native-elements'

 class Profile extends Component {
      constructor() {
          super()
        //   this.onLoad.bind(this)
      }
      async componentDidMount() {
          await this.props.getAccount()
      }

      profile () {
          const {profile} = this.props.profile
          console.log(`this is ${Object.values(profile)}`)
          if(isEmpty(profile))
          {
              return (
                  Actions.createProfile()
              )
          }else {
              return (
                Actions.editProfile()  
              )
          }
      }
    render() {
        const {name,avatar,email,title} = this.props.auth.user
        const {profile} = this.props.profile
        console.log(profile)
        console.log(isEmpty(profile))
        let uri
        if(isEmpty(profile)){
             uri = "http:"+avatar
        }else {
            uri = profile.avatar
        }
        console.log(uri)
        let icon 
        let subscriber
        if(isEmpty(profile)) {
            icon = (
                
                <Icons name="plus" size={15} color='#04848D' />
                )
            }else {
                icon = (
                
                 <Icons name="edit" size={15} color='#04848D' />
                
            )
        }
        if(isEmpty(profile)) {
            subscriber = (
                <View style={{top:10,justifyContent:"center",marginLeft:45,padding:20,width:widthPercentageToDP('50%'),height:heightPercentageToDP('5%'),borderBottomWidth:0.3,borderBottomColor:'#04848D'}}>
                    <Text style={{fontSize:20}}>Subscriber {" "} 0</Text>
                </View>
            )
        }else {
            const {Subscribed} = profile
            const SubScriber = Subscribed.length
            console.log(Subscribed)
            subscriber = (
                <View style={{top:10,justifyContent:"center",marginLeft:45,padding:20,width:widthPercentageToDP('50%'),height:heightPercentageToDP('5%'),borderBottomWidth:0.3,borderBottomColor:'#04848D'}}>
                    <Text style={{fontSize:20}}>Subscriber {" "} {SubScriber}</Text>
                </View>
            )
        }
        return (
            <React.Fragment>
                <View style={Styles.body}>
                  <View style={Styles.Banner}>
                    <View style={Styles.firstPanel}>
                    <Image source={{uri:uri}} style={Styles.Avatar} />
                    {subscriber}  
                    </View>  
                      
                    <View styles={Styles.secondPanel}>
                        <TouchableOpacity onPress={this.profile.bind(this)} >
                        <Text style={Styles.UserName}>{name}{' '}{icon}</Text>
                        </TouchableOpacity>
                       <View style={Styles.editAdd}>
                        
                        </View>
                        
                    </View>
                   </View>
                    <Text>Images -></Text>
                    <View style={Styles.ImageComponent}>
                        <ScrollView horizontal>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                        </ScrollView>
                    </View>
                    <Text>
                        Articles
                    </Text>
                    <View style={Styles.ImageComponent}>
                        <ScrollView horizontal>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                        </ScrollView>
                    </View>
                    <Text>Videos</Text>
                    <View style={Styles.ImageComponent}>
                        <ScrollView horizontal>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                            <Card>
                            <Text>Hello</Text>
                            </Card>
                        </ScrollView>
                    </View>
              </View>  
                    
                <Footer />
            </React.Fragment>
        )
    }
}

const Styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'white'
    },
    Banner:{
        height:heightPercentageToDP("30%"),
        borderBottomWidth:0.5,
        justifyContent:"flex-start",
        paddingLeft:5,
        paddingTop:10,
        borderColor:'white',
        shadowColor:'white',
        shadowOffset: {height:2},
        shadowOpacity: 2.2,
        shadowRadius:2,
        elevation:2,
    },
    BannerTab:{
        height:heightPercentageToDP('5%'),
        borderTopWidth:0.2,
        flexDirection:"row",
        justifyContent:'space-around',
        marginTop:20,
        paddingTop:5
    },  
    firstPanel:{
        flexDirection:"row",
        marginLeft:15,
    },
    secondPanel:{
        flexDirection:'row',
        marginLeft:25
    },
    Avatar:{
        width:70,
        height:70,
        borderColor:'black',
        borderRadius:60,
       
    },
    UserName:{
        fontSize:20,
        color:'#04848D',
        marginLeft:23.5
    },
    subScribeButton:{
        justifyContent:"center"
    }

})
const mapStateToProps = state => ({
    auth:state.auth,
    profile:state.Account
})
export default connect(mapStateToProps,{getAccount})(Profile)