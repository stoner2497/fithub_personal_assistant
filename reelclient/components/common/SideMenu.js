import React , {Component} from 'react';
import {View,Text ,StyleSheet} from 'react-native'
 class SideMenu extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Text>menu items go here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },

});

export default SideMenu