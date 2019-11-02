import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert
} from "react-native";
import { getSubscriberPost, addLike, UnLike } from "../../Actions/PostAction";
import { getAccount } from "../../Actions/ProfileAction";
import { Card } from "react-native-elements";
import set from "../../img/set.png";
import { AdMobBanner } from "react-native-admob";
import Spinner from "../common/Spinner";
import isEmpty from "../../utils/isEmpty";
import { connect } from "react-redux";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome5";

let content;
let likess;
let comments 

class Post extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  // componentDidMount() {
  //   this.setState({ likes: likess });
  // }

  onLike(id) {
    this.props.addLike(id);
  }
  render() {
    let icon = <Icon name="searchengin" size={20} color="#FA5606" />;
    let comment = <Icon name="comment-dots" size={25} color="orange" />;
    const { profile } = this.props.profile;
    const { Subscribing, Subscribed, avatar, User } = profile;
    const { posts, loading, likes } = this.props.post;
    // const { avatar } = this.props.auth.user;
    console.log(likes);
    if (isEmpty(likes)) {
      likess = 0;
    } else {
      likess = likes;
    }
    let uri = avatar;
    console.log(profile);
    if (isEmpty(posts) || loading) {
      return <Spinner size="large" color="orange" />;
    } else {
      content = posts.flatMap(post => {
        if (isEmpty(post)) {
          return <Text>No Posts</Text>;
        } else {
          return post.flatMap(post => {
            console.log(post);
            return post;
          });
        }
      });
      comments = content.flatMap(data => {
        if(isEmpty(data.comments)) {
          return <Text> No comments  </Text>
        }else {
           return data.comments
        }
      })
    }

    return (
      <React.Fragment>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={Styles.CommentBox}>
            <View>
            <Card>
          <View style={Styles.section}>
            <TextInput
              placeholder='write comment'
              style={Styles.SearchBox}
              value={this.state.search}
              onChangeText={search => {
                this.setState({ search });
              }}
            />
            <TouchableOpacity>
              <Text style={Styles.search}>{icon}</Text>
            </TouchableOpacity>
          </View>
        </Card>
            </View>
            <View style={{felx:1}}>
                <Card style={{alignItems:'center'}}>
                  {comments}
                </Card>
            </View>
          </View>
        </Modal>
        <ScrollView>
          <View>
            <FlatList
              data={content}
              renderItem={({ item }) => (
                <Card key={item.user}>
                  <View style={Styles.CardSection} key={item.user}>
                    <Image source={{ uri: uri }} style={Styles.cardImg} />
                    <View>
                      <Text style={Styles.CardName}>{item.name}</Text>
                      <Text style={Styles.CardTag}>Tag:{item.tags}</Text>
                    </View>
                  </View>
                  <View style={Styles.CardSection}>
                    <Image source={{ uri: item.post }} style={Styles.Main} />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={this.onLike.bind(this, item._id, User)}
                    >
                      <Image source={set} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 5 }}>
                      {isEmpty(likes) ? item.likes.length : likes} Set
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(true);
                      }}
                      style={{ marginLeft: 10 }}
                    >
                      <Text>{comment}</Text>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 5 }}>
                      {item.comments.length}
                    </Text>
                  </View>
                </Card>
              )}
              keyExtractor={item => item.user}
            />
            {/* {hell} */}
            <AdMobBanner
              bannerSize="mediumRectangle"
              adUnitID="ca-app-pub-2630087167371752/4742268630"
              testDeviceID="EMULATOR"
              didFailToReceiveAdWithError={this.bannerError}
            />
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}
const Styles = StyleSheet.create({
  section: {
    height: heightPercentageToDP("7%"),
    // width:widthPercentageToDP('80%'),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 60,
    margin: 10,
    paddingRight: 2
  },
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
  CommentBox:{
    justifyContent:'center'
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  profile: state.Account
});

export default connect(
  mapStateToProps,
  { getSubscriberPost, getAccount, addLike, UnLike }
)(Post);
