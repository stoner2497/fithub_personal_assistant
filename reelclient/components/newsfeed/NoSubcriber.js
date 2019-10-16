import React, { Component } from "react";
import { View, Text, ImageBackground, Image, ScrollView,FlatList } from "react-native";
import background from "../../img/backgroundwhite.png";
import Footer from "../common/Footer";
import { Card, Button } from "react-native-elements";
import isEmpty from "../../utils/isEmpty";
export default class NoSubcriber extends Component {
  render() {
    // const { userName, avatar, email, bio } = this.props.profile;
    let pro;
    const {profiles} = this.props
    if (isEmpty(this.props.profiles)) {
      pro = <Text>Nothing to show</Text>;
    } else {
      console.log(profiles)
      pro = (
        <FlatList
          data={profiles}
          renderItem={({item}) => (

            <Card
            containerStyle={{
              height: 200,
              width: 150,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={{ uri: item.avatar }}
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                borderRadius: 60
              }}
            />
            <Text style={{ alignSelf: "center" }}>{item.userName}</Text>
            <Text style={{ alignSelf: "center" }}>{item}</Text>
            <Button title="subscribe" containerStyle={{ marginTop: 2 }} />
          </Card>
          )}
          keyExtractor={item => item.user}
        />
        
      );
    }
    return (
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ alignSelf: "center" }}>
            You are not Subscribing To AnyOne Start Subscribing
          </Text>
          <ScrollView horizontal>
            {pro}
          </ScrollView>
        </View>
        <Footer />
      </ImageBackground>
    );
  }
}
