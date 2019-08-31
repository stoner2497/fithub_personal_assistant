import React, { Component } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Card,Button} from 'react-native-elements'
import {connect} from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';

class createProfile extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            bio:'',
            avatar:''
        }
    }
    camera() {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          this.setState({
              avatar:image
          })
        })
    }

    render() {
        const {email,name,title} = this.props.auth.user
        // const {bio,avatar} = this.props.profile
        const {bio,avatar} = this.state
        return (
            <View>
                <Card>
                    <Image source={avatar.path}/>
                <TouchableOpacity onPress={this.camera.bind(this)}>
                    <Text>select image</Text>
                </TouchableOpacity>
                <Text>hello</Text>
                </Card>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    auth:state.auth,
    profile:state.profile
})
export default connect(mapStateToProps,{}) (createProfile)