import {combineReducers} from 'redux'
import userReducer from './userReducer'
import mapReducer from './mapReducer'


const rootReducer = combineReducers({
    userReducer,
    mapReducer,

  

})

export default rootReducer;