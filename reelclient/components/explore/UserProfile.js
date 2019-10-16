import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { getUserAccount, SubScribe } from "../../Actions/ProfileAction";
import { Card, Button } from "react-native-elements";
import Spinner from "../common/Spinner";
import Footer from "../common/Footer";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import isEmpty from "../../utils/isEmpty";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.getUserAccount(this.props.id);
    // this.onLoad();
  }
  // onLoad() {
  //   // this.props.getUserAccount(this.props.id);
  // }
  
  render() {
    const { userProfile, loading } = this.props.profiles;
    const { avatar, userName, title, bio, user, Subscribed } = userProfile;
    const { id } = this.props.auth.user;
    let content;
    let btn;
    if (isEmpty(userProfile) || loading) {
      return <Spinner size="large" color="orange"  />;
    }else {
      if(Subscribed.length == 0) {
          btn = <Button title="Subscribe" />
      }else {
        Subscribed.map(sub => {
          if(sub.user == id) {
            btn = <Button title="unsubscribe" />
          }else {
            btn = <Button  title="subscribe" />
          }
        })
      }
    } 
    return (
        <React.Fragment>
          <View style={Styles.Container}>
            <Card>
              <Image source={{ uri: avatar }} style={Styles.profileImage} />
              <View style={Styles.card}>
                <Text style={Styles.username}>{userName}</Text>
                {title ? <Text style={StyleSheet.title}>{title}</Text> : null}
                <Text style={Styles.bio}>{bio}</Text>
              </View>
              {btn}
            </Card>
            <Card>
              <Text>Images -></Text>
              <View>
                <ScrollView horizontal>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                </ScrollView>
              </View>
            </Card>
            <Card>
              <Text>Images -></Text>
              <View>
                <ScrollView horizontal>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                  <Card>
                    <Text>Hello</Text>
                  </Card>
                </ScrollView>
              </View>
            </Card>
          </View>
          <Footer />
        </React.Fragment>
    );
  }
}
const Styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3
  },
  profileImage: {
    justifyContent: "center",
    alignSelf: "center",
    width: widthPercentageToDP("15%"),
    height: heightPercentageToDP("9.2%"),
    borderRadius: 60,
    borderWidth: 1
  },
  username: {
    fontSize: 17,
    color: "#04848D",
    marginLeft: 5,
    // marginTop:5
    textAlign: "center"
  },
  bio: {
    textAlign: "center",
    fontSize: 13,
    color: "#04848D"
    // marginLeft:5,
  }
});
const mapStatetoProps = state => ({
  profiles: state.Account,
  auth: state.auth
});
export default connect(
  mapStatetoProps,
  { getUserAccount }
)(UserProfile);
