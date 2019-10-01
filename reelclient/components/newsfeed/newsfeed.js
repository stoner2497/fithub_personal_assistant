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
import { getSubscriberPost } from "../../Actions/PostAction";
import {getAccount} from '../../Actions/ProfileAction'
import background from "../../img/backgroundwhite.png";
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
      this.props.getAccount()
    }
  }

  handleBackPress = () => {
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  };
  render() {
    const { user } = this.props.auth;
    const {profile} = this.props.profile
    const {Subscribing,Subscribed} = profile
    const { posts, loading } = this.props.post;
    console.log(profile)
    if(Subscribing == 0) {
      console.log('please connect to someone')
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
  profile:state.Account
});
export default connect(
  mapStateToProps,
  { getSubscriberPost ,getAccount }
)(newsfeed);
