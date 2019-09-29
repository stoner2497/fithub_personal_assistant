import React, { Component } from 'react'
import {View,Text,FlatList,StyleSheet,TextInput,Image,TouchableOpacity, ImageBackground} from 'react-native'
import {connect} from 'react-redux' 
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from '../common/Footer'
import {getAccounts,getUserAccount} from '../../Actions/ProfileAction'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Actions } from 'react-native-router-flux';
import background from '../../img/backgroundwhite.png'
 class Explore extends Component {
     constructor(props){
         super(props)
         this.onLoad.bind(this)
     }
     async componentDidMount() {
         await this.onLoad()
     }
     onLoad() {
         this.props.getAccounts()
     }
     onPress(_id) {
       Actions.userProfile({id:_id})
     }
     onSearch() {
         Actions.SearchBox()
     }
    
    render() {
        const {profiles} = this.props.profiles
        const Arrow = <Icon name="chevron-right" size={23} color="#04848D" />
        return (
           <React.Fragment>
               <ImageBackground source={background}  style={{width: '100%', height: '100%'}}>
               <View style={Styles.Conatiner}>
                    <View style={Styles.Banner}>
                    <TouchableOpacity onPress={this.onSearch.bind(this)} >
                    <View style={Styles.SearchBox}>
                        <Text style={{marginLeft:13,marginTop:10}}>Explore FITHUB</Text>
                    </View>
                    </TouchableOpacity>
                   <FlatList
                        data={profiles}
                        renderItem={({ item }) => (
                            <View style={Styles.flatview}>
                                <Image source={{uri:item.avatar}} style={{width:60,height:60,borderRadius:60}} />
                                <Text style={Styles.name}>{item.userName}</Text>
                                <TouchableOpacity onPress={this.onPress.bind(this,item._id)} style={Styles.sidearrow}>
                                    {Arrow}
                                </TouchableOpacity>
                            </View>
                            
                        )}
                        keyExtractor={item => item.user}
                    />
                    </View>
                </View>
                <Footer />
               </ImageBackground>
           </React.Fragment>
        )
    }
}
const Styles = StyleSheet.create({
    Conatiner:{
        flex:1,
        padding:5
    },
    Banner:{
        // height:heightPercentageToDP("10%"),
        padding:5,
        width:widthPercentageToDP("97%"),
        backgroundColor:'#FFFAFA',
        justifyContent:'center',
        alignItems:'center'
    },
    SearchBox:{
        height:heightPercentageToDP('7%'),
        width:widthPercentageToDP('80%'),
        borderRadius:60,
        borderWidth:1,
        borderColor:'grey',
        
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      flatview: {
        marginTop:5,
        justifyContent: 'flex-start',
        flexDirection:'row',
        alignItems:'flex-start',
        paddingTop: 5,
        borderRadius: 2,
        borderTopWidth:0.5,
        borderColor:'grey',
        width:widthPercentageToDP('97%')
      },
      name: {
        fontFamily: 'Verdana',
        fontSize: 20,
        marginTop:17,
        marginLeft:10
      },
      sidearrow:{
          left:195,
          marginTop:19
      }
})
const mapStateToProps = state => ({
    profiles:state.Account
})
export default  connect(mapStateToProps,{getAccounts,getUserAccount})(Explore) 