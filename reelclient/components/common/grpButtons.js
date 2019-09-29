import React, { Component } from 'react'
import {ButtonGroup} from 'react-native-elements'
import {Text,View} from 'react-native';

import Post from '../newsfeed/Post'

export default class grpButtons extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      
      render () {
        const buttons = ['Posts','Blogs']
        const { selectedIndex } = this.state
        let content
        if (selectedIndex === 0) {
            content = <Post />
        } else {
            content = <Text>Hello</Text> 
        }
        return (
          <React.Fragment>
              <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 29,borderRadius:50}}
            warning
          />
          <View>
              {content}
          </View>
          </React.Fragment>
        )
      }
}
