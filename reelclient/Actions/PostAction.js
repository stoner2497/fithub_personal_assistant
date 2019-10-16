import axios from "axios";
import { GET_SUBSCRIBER_POST,GET_CONTACTS ,ON_LOADING, GET_SUBSCRIBER_BLOG, GET_ERRORS } from "./types";
import Contacts from 'react-native-contacts'

const proxy = 'http://192.168.1.10:5000'
const proxy2 = 'http://192.168.56.1:5000'

export const contacts = () => {
  return dispatch  => {
    dispatch(onLoading())
    Contacts.getAll((err, contacts) => {
      if (err) {
        dispatch({
          type:GET_ERRORS,
          payload:err
        })  
      }
      console.log(contacts)
      dispatch({
        type:GET_CONTACTS,
        payload:contacts
      })
    })
  }
}

export const getSubscriberPost = () => {
  return dispatch => {
    dispatch(onLoading());
    axios
      .get(`${proxy}/newsfeed/posts`)
      .then(res => {
        dispatch({
          type: GET_SUBSCRIBER_POST,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getSubscriberBlog = () => {
  return dispatch => {
    dispatch(onLoading());
    axios
      .get(`${proxy}/newsfeed/blogs`)
      .then(res => {
        dispatch({
          type: GET_SUBSCRIBER_BLOG,
          payload: res.data
        });
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const onLoading = () => {
  return dispatch => {
    dispatch({
      type: ON_LOADING
    });
  };
};
