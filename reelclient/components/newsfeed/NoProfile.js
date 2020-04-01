import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Background from "../../img/empty.png";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import Footer from '../common/Footer'
export default class NoProfile extends Component {
  render() {
    return (
      <ImageBackground
        source={Background}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={Styles.Container}>
          <View style={Styles.SemiContainer}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 26,
                marginTop: 260,
                color: "#FA5606"
              }}
            >
              Complete Your Account
            </Text>
          </View>
          
            <Button containerStyle={{
                alignSelf:'center',
                alignItems:'center',
                justifyContent:'center',
                marginTop: 9,
                backgroudnColor:'#FA5606'
            }}  title="Continue >>"
            onPress={() => Actions.createProfile()} />
          
        </View>
        <Footer />
      </ImageBackground>
    );
  }
}
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  SemiContainer: {
    // alignSelf: "center",
    alignItems: "center"
  }
});
