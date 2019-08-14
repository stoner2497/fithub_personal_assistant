import React, { Component } from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'

 class newsfeed extends Component {
     componentDidMount() {
         console.log(this.props.auth)
     }
    render() {
        const {user} = this.props.auth
        return (
            <View>
                <Text>
                    {user.name}
                </Text>
            </View>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{})(newsfeed)