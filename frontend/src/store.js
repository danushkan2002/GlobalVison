import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer} from './Reducers/userReducer'
import { schoolDataReducer, subjectCategoryDataReducer } from './Reducers/getReducer'
import { categorySubjectDetailsReducer } from './Reducers/subjectReducer'

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    
    schoolData : schoolDataReducer,
    subjectCategoryData: subjectCategoryDataReducer,

    // subjectDetails: subjectDetailsReducer,
    categorySubjectDetails : categorySubjectDetailsReducer,
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