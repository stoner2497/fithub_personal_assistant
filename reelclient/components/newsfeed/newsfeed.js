import React, { Component } from "react";
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import Footer from "../common/Footer";
import { connect } from "react-redux";
import GroupButton from "../common/grpButtons";
import { Card } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { getSubscriberPost, getSubscriberBlog } from "../../Actions/PostAction";
import { getAccount, getAccounts } from "../../Actions/ProfileAction";
import background from "../../img/backgroundwhite.png";
import NoProfile from "./NoProfile";
import NoSubcriber from "./NoSubcriber";
import isEmpty from "../../utils/isEmpty";
import {contacts} from '../../Actions/PostAction'

import Spinner from "../common/Spinner";
import { AdMobBanner } from "react-native-admob";

class newsfeed extends Component {
  constructor(props) {
    super(props);
    this.onLoad.bind(this);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
    this.onLoad();
  }
  onLoad() {
    const { authenticated } = this.props.auth;
    if (!authenticated) {
      Actions.push("landing");
    } else {
      this.props.getSubscriberPost();
      this.props.getSubscriberBlog();
      this.props.getAccount();
      this.props.getAccounts();
      this.props.contacts()
    }
  }

  handleBackPress = () => {
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  };
  render() {
    const { user } = this.props.auth;
    const { profile, profiles } = this.props.profile;
    const { Subscribing, Subscribed } = profile;
    const { posts, loading, blogs,contacts } = this.props.post;
    let contact
    if (loading) {
      return <Spinner color="orange" />;
    }
    if (isEmpty(profile)) {
      // console.log(profile);
      return <NoProfile />;
    }
    if (Subscribing == 0) {
      if(!isEmpty(contacts)) {
        contact  = contacts.forEach(contact => {
          return contact
        })
        console.log(`im here  ${contact}`)
      } 
      console.log(profile);
      
      return <NoSubcriber profiles={profiles} />;
    }

    return (
      <React.Fragment>
        <View style={Styles.body}>
          <ImageBackground
            source={background}
            style={{ width: "100%", height: "100%" }}
          >
            <GroupButton />
            <ScrollView></ScrollView>
          </ImageBackground>
        </View>

        <Footer />
      </React.Fragment>
    );
  }
}

const Styles = StyleSheet.create({
  body: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  profile: state.Account
});
export default connect(
  mapStateToProps,
  { getSubscriberPost, getAccount, getSubscriberBlog, getAccounts ,contacts}
)(newsfeed);
