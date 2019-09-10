import React, { Component } from 'react'
import {View,Text,FlatList,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux' 
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from '../common/Footer'
import {getAccounts} from '../../Actions/ProfileAction'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
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
    
    render() {
        const {profiles} = this.props.profiles
        const Arrow = <Icon name="chevron-right" size={23} color="#04848D" />
        return (
           <React.Fragment>
               <View style={Styles.Conatiner}>
                    <View style={Styles.Banner}>
                    <TextInput
                    style={Styles.SearchBox}
                    placeholder="Explore Fithub"
                    placeholderTextColor="#047481"
                    />
                   <FlatList
                        data={profiles}
                        renderItem={({ item }) => (
                            <View style={Styles.flatview}>
                                <Image source={{uri:item.avatar}} style={{width:60,height:60,borderRadius:60}} />
                                <Text style={Styles.name}>{item.userName}</Text>
                                <TouchableOpacity style={Styles.sidearrow}>
                                    {Arrow}
                                </TouchableOpacity>
                            </View>
                            
                        )}
                        keyExtractor={item => item.user}
                    />
                    </View>
                </View>
                <Footer />
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
export default  connect(mapStateToProps,{getAccounts})(Explore) 