import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer} from './Reducers/userReducer'
import { schoolDataReducer, subjectCategoryReducer, } from './Reducers/getReducer'
import { subjectsByCategoryReducer, subjectByCategoryReducer } from './Reducers/subjectReducer'
import { applicationCreateReducer, applicationDataReducer, applicationsDataReducer } from './Reducers/applicationReducer'

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    schoolData : schoolDataReducer,

    subjectCategory: subjectCategoryReducer,
    subjectByCategory : subjectByCategoryReducer,
    subjectsByCategory : subjectsByCategoryReducer,

    applicationCreate : applicationCreateReducer,
    applicationsData : applicationsDataReducer,
    applicationData : applicationDataReducer,

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