import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet,Button, TouchableOpacity, FlatList} from 'react-native'
import {Card} from 'react-native-elements'
import Icons from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'
import {searchResults} from '../../Actions/ExploreAction'
import {heightPercentageToDP,widthPercentageToDP} from 'react-native-responsive-screen'


class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search:''
        }
    }
    onSubmit() {
        const {search} = this.state
        this.props.searchResults(search)
    }

   
    render() {
        const {searchResult} = this.props.explore
        const  {profiles} = this.props.account 
        let result = Object.values(searchResult).map(data => { return (
            <View style={{width:widthPercentageToDP('95%'),borderTopWidth:2,borderTopColor:'grey'}}>
                <Text>{data.userName}</Text>
            </View>
        ) })
        let icon =   <Icons name="search" size={20} color='#04848D' />
        return (
            <View >
               <Card  >
                <View style={Styles.section}>
                <TextInput
                    placeholder="Search Fithub"
                    style={Styles.SearchBox}
                    value={this.state.search}
                    onChangeText={(search) => {
                        this.setState({search})
                    }}
                />
                <TouchableOpacity onPress={this.onSubmit.bind(this)} >
                    <Text style={Styles.search} >{icon}</Text>
                </TouchableOpacity>
               </View>
               </Card>
    <Card>       
         <FlatList 
                    data={profiles}
                    renderItem={(item) => {
                        <View>
                            <Text>
                            {item.userName}
                        </Text>
                        </View>
                    }}
                    keyExtractor={item => item.user}
                    />
               </Card>
               <Card>
                
               </Card>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    SearchBox:{
        flex:1
    },
    section:{
        height:heightPercentageToDP('7%'),
        // width:widthPercentageToDP('80%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius:60,
        margin: 10,
        paddingRight:2 
    },
    search:{
        marginRight:3
    }
})
const mapStateToProps = state => ({
    explore:state.explore,
    account:state.Account
})
export default connect(mapStateToProps,{searchResults})(SearchBox)