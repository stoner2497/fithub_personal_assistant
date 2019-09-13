import React, { Component } from 'react'
import { View,Text , StyleSheet,Image ,Button ,ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {getUserAccount} from '../../Actions/ProfileAction'
import {Card} from 'react-native-elements'
import Footer from '../common/Footer'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

 class UserProfile extends Component {
     constructor(props){
         super(props)
         this.onLoad.bind(this)
     }
     async componentDidMount() {
         await this.onLoad()
     }
     onLoad() {
         this.props.getUserAccount(this.props.id)
     }
    render() {
        const {userProfile} = this.props.profiles
        const {avatar,userName,title,bio} = userProfile
        return (
            <React.Fragment>
                <View style={Styles.Container}>
                 <Card>
                    <Image source={{uri:avatar}} style={Styles.profileImage} />
					<View  style={Styles.card}>
					<Text style={Styles.username}>{userName}</Text>
					{title ? <Text style={StyleSheet.title}>{title}</Text> : null}
					<Text style={Styles.bio}>{bio}</Text>
					</View>
				<Button title="SubScribe" />
                 </Card>
				 <Card>
				 <Text>Images -></Text>
                    <View >
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
                        </ScrollView>
                    </View>
				 </Card>
				 <Card>
				 <Text>Images -></Text>
                    <View >
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
                        </ScrollView>
                    </View>
				 </Card>
                </View>
               <Footer />
            </React.Fragment>
        )
    }
}
const Styles = StyleSheet.create({
    Container:{
        flex:1
	},
	card:{
		justifyContent:'center',
		alignItems:'center',
		marginBottom:3
	},
	profileImage:{
	  justifyContent:'center',
	  alignSelf:'center',
	  width:widthPercentageToDP('15%'),
	  height:heightPercentageToDP('9.2%'),
	  borderRadius:60,
	  borderWidth:1
	},
	username:{
		fontSize:17,
		color:'#04848D',
		marginLeft:5,
		// marginTop:5
		textAlign:'center',
	},
	bio:{
		textAlign:'center',
		fontSize:13,
		color:'#04848D',
		// marginLeft:5,
	}
})
const mapStatetoProps = (state) => ({
    profiles:state.Account
})
export default connect(mapStatetoProps,{getUserAccount})(UserProfile)