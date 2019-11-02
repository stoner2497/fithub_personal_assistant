import axios from "axios";
import {
  GET_SUBSCRIBER_POST,
  GET_CONTACTS,
  ON_LOADING,
  GET_SUBSCRIBER_BLOG,
  GET_ERRORS,
  GET_LIKES
} from "./types";
import Contacts from "react-native-contacts";
import isEmpty from "../utils/isEmpty";
import {proxy} from './proxy'
export const contacts = () => {
  return dispatch => {
    dispatch(onLoading());
    Contacts.getAll((err, contacts) => {
      if (err) {
        dispatch({
          type: GET_ERRORS,
          payload: err
        });
      }
      console.log(contacts);
      dispatch({
        type: GET_CONTACTS,
        payload: contacts
      });
    });
  };
};

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

export const addLike = id => dispatch => {
  axios
    .get(`${proxy}/likes/${id}`)
    .then(res => {
      dispatch({
        type: GET_LIKES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getLike = () => {
  return dispatch => {
    axios
      .get(`${proxy}/newsfeed/posts`)
      .then(res => {
        console.log(res);
        let likes = res.data;
        likes.flatMap(like => {
          like.map(like => {
            console.log(like);
            dispatch({
              type: GET_LIKES,
              payload: like.likes
            });
          });
        });
        console.log(likes);
        return;
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
