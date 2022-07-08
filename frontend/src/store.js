import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDataReducer, usersDataReducer, userProfileDataReducer} from './Reducers/userReducer'
import { schoolDataReducer, subjectCategoryReducer, } from './Reducers/getReducer'
import { subjectsByCategoryReducer, subjectByCategoryReducer } from './Reducers/subjectReducer'
import { applicationCreateReducer, applicationDataReducer, applicationsDataReducer } from './Reducers/applicationReducer'
import { messageCreateDataReducer, messageDataReducer, messagesDataReducer } from './Reducers/inboxReducer'
import { resultCreateDataReducer, resultDataReducer, resultsDataReducer } from './Reducers/ResultReducer'
import { courseCreateDataReducer, courseDataReducer, coursesDataReducer } from './Reducers/courseReducer'

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userProfileData : userProfileDataReducer,
    usersData : usersDataReducer,
    userData : userDataReducer,
    
    schoolData : schoolDataReducer,

    subjectCategory: subjectCategoryReducer,
    subjectByCategory : subjectByCategoryReducer,
    subjectsByCategory : subjectsByCategoryReducer,

    applicationCreate : applicationCreateReducer,
    applicationsData : applicationsDataReducer,
    applicationData : applicationDataReducer,

    messageCreateData : messageCreateDataReducer,
    messagesData: messagesDataReducer,
    messageData: messageDataReducer,

    resultCreateData : resultCreateDataReducer,
    resultsData: resultsDataReducer,
    resultData : resultDataReducer,

    courseCreateData : courseCreateDataReducer,
    coursesData: coursesDataReducer,
    courseData : courseDataReducer,

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