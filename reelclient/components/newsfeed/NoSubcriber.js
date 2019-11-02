import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { Card, Button } from "react-native-elements";
import { connect } from "react-redux";
import background from "../../img/backgroundwhite.png";
import Footer from "../common/Footer";
import isEmpty from "../../utils/isEmpty";
import { SubScribe } from "../../Actions/SubscribeAction";
class NoSubcriber extends Component {


  onSubscribe (id)  {
    this.props.SubScribe(id)
  }
  render() {
    // const { userName, avatar, email, bio } = this.props.profile;
    let pro;
    let profile;
    const { profiles } = this.props;
    const { id } = this.props.auth.user;
    console.log(profiles);
    if (isEmpty(this.props.profiles)) {
      pro = <Text>Nothing to show</Text>;
    } else {
      profiles.flatMap(profile => {
        console.log(profile);
        let btn;
        const { Subscribed } = profile;
        if (!isEmpty(Subscribed)) {
          Subscribed.map(sub => {
            if (sub.user == id) {
              btn = (
                <Button title="unsubscribe" containerStyle={{ marginTop: 2 }} />
              );
            } else {
              btn = (
                <Button title="subscribe" onPress={this.onSubscribe.bind(this,profile.user)} containerStyle={{ marginTop: 2 }} />
              );
            }
          });
        }else {
          btn = (
            <Button title="subscribe" onPress={this.onSubscribe.bind(this,profile.user)} containerStyle={{ marginTop: 2 }} />
            )
        }
        return (pro = (
          <Card
            containerStyle={{
              height: 200,
              width: 150,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={{ uri: profile.avatar }}
              style={{
                alignSelf: "center",
                width: 60,
                height: 60,
                borderRadius: 60
              }}
            />
            <Text style={{ alignSelf: "center" }}>{profile.userName}</Text>
            <Text style={{ alignSelf: "center" }}>{profile.email}</Text>
            {btn}
          </Card>
        ));
      });
      console.log(profile);
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
          <ScrollView horizontal>{pro}</ScrollView>
        </View>
        <Footer />
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth });
export default connect(
  mapStateToProps,
  { SubScribe }
)(NoSubcriber);
