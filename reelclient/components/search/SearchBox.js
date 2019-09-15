import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet,Button, TouchableOpacity} from 'react-native'
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
        let results = Object.keys(searchResult).map(res => {return res})
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
                   <View>
                       <Text>{results}</Text>
                   </View>
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
    explore:state.explore
})
export default connect(mapStateToProps,{searchResults})(SearchBox)