import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer'
import ExploreReducer from './ExploreReducer'
export default combineReducers({
    auth:AuthReducer,
    Account:ProfileReducer,
    explore:ExploreReducer
});