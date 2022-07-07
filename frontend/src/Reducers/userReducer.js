import { USER_LOGIN_REQUEST,
         USER_LOGIN_SUCCESS,
         USER_LOGIN_FAIL,
         USER_LOGOUT,

         USER_REGISTER_REQUEST,
         USER_REGISTER_SUCCESS,
         USER_REGISTER_FAIL,

         USER_DETAILS_REQUEST,
         USER_DETAILS_SUCCESS,
         USER_DETAILS_FAIL,
         USER_DETAILS_RESET,

         GET_USERS_REQUEST,
         GET_USERS_SUCCESS,
         GET_USERS_FAIL,
         GET_USERS_RESET, 
         
         GET_USER_REQUEST,
         GET_USER_SUCCESS,
         GET_USER_FAIL,
         GET_USER_RESET,

         
         

} from "../constants/userConstents";


export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}

        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action ) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return { loading:true }

        case USER_REGISTER_SUCCESS:
            return { loading:false, userInfo:action.payload }

        case USER_REGISTER_FAIL:
            return { loading:false, error:action.payload}

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userProfileDataReducer = (state = { userProfile: {} }, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {...state, loading: true}

        case USER_DETAILS_SUCCESS:
            return {userProfileLoading: false, userProfile: action.payload}

        case USER_DETAILS_FAIL:
            return {userProfileLoading: false, userProfileError: action.payload}

        case USER_DETAILS_RESET:
            return {}

        default:
            return state
    }
}

export const usersDataReducer = (state = { users: [] }, action) => {
    switch(action.type) {
        case GET_USERS_REQUEST:
            return {usersLoading: true}

        case GET_USERS_SUCCESS:
            return {usersLoading: false, users: action.payload}

        case GET_USERS_FAIL:
            return {usersLoading: false, usersError: action.payload}

        case GET_USERS_RESET:
            return {users:[]}

        default:
            return state
    }
}

export const userDataReducer = (state = { user: {} }, action) => {
    switch(action.type) {
        case GET_USER_REQUEST:
            return {userLoading: true}

        case GET_USER_SUCCESS:
            return {userLoading: false, user: action.payload}

        case GET_USER_FAIL:
            return {userLoading: false, userError: action.payload}

        case GET_USER_RESET:
            return {}

        default:
            return state
    }
}
