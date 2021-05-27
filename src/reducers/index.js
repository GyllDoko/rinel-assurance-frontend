import { combineReducers } from "redux";
import userReducer from './user.reducer'
import agenceReducer from './agence.reducer'
import accountReducer from './account.reducer'
import creditReducer from './credit.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer =  combineReducers({
    user : userReducer,
    agence : agenceReducer,
    account : accountReducer,
    credit : creditReducer,
})

export default persistReducer(persistConfig, rootReducer)