import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { getSubscriberPost } from "../../Actions/PostAction";
import { getAccount } from "../../Actions/ProfileAction";
import { Card } from "react-native-elements";
import set from "../../img/set.png";
import { AdMobBanner } from "react-native-admob";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";
import isEmpty from "../../utils/isEmpty";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

class Blogs extends Component {
  render() {
    const { profile } = this.props.profile;
    const { Subscribing, Subscribed } = profile;
    const { blogs, loading } = this.props.post;
    const { avatar } = this.props.auth.user;
    let uri = "http:" + avatar;
    let content;
    let hell;
    console.log(profile);
    if (loading) {
      return <Spinner size="large" color="orange" />;
    } else {
      // console.log(blogs)
      content = blogs.flatMap(blog => {
        return blog.flatMap(blog => {
          if(isEmpty(blog)) {
          return  console.log('blog')
          }else {
            return blog
          }
        })
      });
    }
    return (
      <React.Fragment>
        {/* <FlatList
          style={{ marginBottom: 10 }}
          data={content}
          renderItem={({ item }) => (
            <Card key={item.user}>
              <View style={Styles.CardSection}>
                <Image source={{ uri: uri }} style={Styles.cardImg} />
                <View>
                  <Text style={Styles.CardName}>{item.name}</Text>
                  <Text style={Styles.CardTag}>{item.tags}</Text>
                </View>
              </View>
              <View style={Styles.CardSection}>
                <Image source={{ uri: item.post }} style={Styles.Main} />
              </View>
              <View style={Styles.CardSection}>
                <View>
                  <TouchableOpacity>
                    <Image source={set} style={Styles.setIcon} />
                  </TouchableOpacity>
                  <Text style={{ marginLeft: 1 }}>{item.likes.length} Set</Text>
                </View>
                <View></View>
              </View>
            </Card>
          )}
          keyExtractor={item => item.user}
        /> */}
        {/* {hell} */}
        <AdMobBanner
          bannerSize="mediumRectangle"
          adUnitID="ca-app-pub-2630087167371752/4742268630"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        />
      </React.Fragment>
    );
  }
}
const Styles = StyleSheet.create({
  CardSection: {
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    borderWidth: 0
  },
  cardImg: {
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "black",
    height: heightPercentageToDP("5%"),
    width: widthPercentageToDP("8.5%")
  },
  CardName: {
    marginLeft: 9,
    marginTop: 2,
    fontSize: 15,
    fontWeight: "bold",
    color: "orange"
  },
  CardTag: {
    marginLeft: 9,
    marginTop: 2,
    fontSize: 12,
    fontWeight: "bold",
    color: "orange"
  },
  Main: {
    width: widthPercentageToDP("83%"),
    height: heightPercentageToDP("40%")
  },
  setIcon: {}
});

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  profile: state.Account
});

export default connect(
  mapStateToProps,
  { getSubscriberPost, getAccount }
)(Blogs);
