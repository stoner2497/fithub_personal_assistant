import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Card } from "react-native-elements";
import Icons from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import { searchResults } from "../../Actions/ExploreAction";
import isEmpty from '../../utils/isEmpty'
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  onSubmit() {
    const { search } = this.state;
    this.props.searchResults(search);
  }

  render() {
    const { searchResult } = this.props.explore;
    const { profiles } = this.props.account;
    let searchIcon = <Icons name="searchengin" size={50} color="#FA5606" />
    let result
    if(isEmpty( searchResult) ) {
        console.log('im there')
        result = (
            <View style={{justifyContent:'center'}}>
                <Text style={{alignSelf:'center'}}>{searchIcon}</Text>
                <Text style={{alignSelf:'center'}}>Your Search Results will Display Here</Text>
            </View>
        )
    }
    else {
        result = Object.values(searchResult).map(data => {
            return (
              <View key={data.user}
                style={{
                  width: widthPercentageToDP("65%"),
                  borderTopWidth: 2,
                  borderTopColor: "grey"
                }}
              >
                <Text key={data.user}>{data.userName}</Text>
              </View>
            );
          });
    }
    <i class="fab fa-searchengin"></i>
   
    let icon = <Icons name="searchengin" size={20} color="#FA5606" />;
    return (
      <View>
        <Card>
          <View style={Styles.section}>
            <TextInput
              placeholder="Search Fithub"
              style={Styles.SearchBox}
              value={this.state.search}
              onChangeText={search => {
                this.setState({ search });
              }}
            />
            <TouchableOpacity onPress={this.onSubmit.bind(this)}>
              <Text style={Styles.search}>{icon}</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Card>{result}</Card>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  SearchBox: {
    flex: 1
  },
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
  search: {
    marginRight: 3
  }
});
const mapStateToProps = state => ({
  explore: state.explore,
  account: state.Account
});
export default connect(
  mapStateToProps,
  { searchResults }
)(SearchBox);
