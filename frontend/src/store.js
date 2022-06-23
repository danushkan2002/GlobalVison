import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './Reducers/userReducer'


const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const inisialState = {
    userLogin : {userInfo : userInfoFromStorage}
}
const middlware = [thunk]

const store = createStore(reducer, inisialState, 
    composeWithDevTools(applyMiddleware(...middlware)))

export default store