import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
import {Card,Button} from 'react-native-elements'
import {connect} from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';

class createProfile extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            bio:'',
            avatar:'',
            name:this.props.auth.user.name
        }
        this.onChange.bind(this)
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
    onChange(e) {
       this.setState({
        [e.target.name] : e.target.value
       })
    }

    render() {
        const {email,name,title} = this.props.auth.user
        // const {bio,avatar} = this.props.profile
        const {bio ,avatar} = this.state
        let img 
        console.log(avatar)
        if(avatar === '') {
            img = `http:${this.props.auth.user.avatar}`
        }else {
            img = avatar.path
        }
        return (
            <View>
                <Card containerStyle={{justifyContent:'center',alignItems:'center'}}>
                    {console.log(img)}
                    <Image source={{uri:img}} style={{width:100,height:100,borderRadius:60}}/>
                <TouchableOpacity onPress={this.camera.bind(this)}>
                    <Text>select image</Text>
                </TouchableOpacity>
                <TextInput
                    value={this.state.name}
                    // onChangeText={}
                />
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