import axios from 'axios';
import {GET_ACCOUNT,GET_ACCOUNTS, GET_ERRORS, ON_LOADING} from './types'
import { Actions } from 'react-native-router-flux';
import {ToastAndroid,Platform} from 'react-native'

createFormData = (photo, body) => {
    let data = new FormData();
    data.append("avatar", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  
    return data
  };

 
export const newAccount = (avatar,userdata) => dispatch => { 
//     const config = { headers: { 'Accept': 'application/json','Content-Type': 'multipart/form-data' },
//     body:createFormData(avatar,{userdata})
// };
//     const data = createFormData(avatar,{userdata})
//     axios.post('http://192.168.1.10:5000/useraccount',data,config)
//         .then(res => {
//             console.log(res)
//             Actions.push('profile')
//             ToastAndroid.show('succesfully created account',ToastAndroid.LONG)
console.log(userdata)
// axios.post('http://192.168.56.1:5000/useraccount',{
//     method: "POST",
//     data: createFormData(avatar, { userdata })
//   })
axios("http://192.168.1.10:5000/useraccount", {
    method: "POST",
    data: createFormData(avatar,  userdata )
  })
  .then(res => {
                console.log(res)
                Actions.push('profile')
                ToastAndroid.show('succesfully created account',ToastAndroid.LONG)
    
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
};
// let data = createFormData(avatar,  {userdata} )
// axios("http://192.168.1.10:5000/useraccount", {
//     method: "POST",
//     data: createFormData(avatar,  {userdata} )
//   },{data:data})
//   .then(res => {
//                 console.log(res)
//                 Actions.push('profile')
//                 ToastAndroid.show('succesfully created account',ToastAndroid.LONG)
    
//             })
//             .catch(err => {
//                 console.log(err)
//                 dispatch({
//                     type:GET_ERRORS,
//                     payload:err.response.data
//                 })
//             })

export const getAccount = () => {
    return dispatch => {
        axios.get('http://192.168.1.10:5000/useraccount')
        .then(useraccount => {
            dispatch({
                type:GET_ACCOUNT,
                payload:useraccount.data
            })
        }).catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })}
}
export const onLoading = () => {
    return dispatch => {
        dispatch({
            type:ON_LOADING
        })
    }
}