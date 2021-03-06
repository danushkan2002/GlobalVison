import axios from "axios";
import { GET_SCHOOL_RESET } from "../constants/getConstents";
import { 
    GET_SUBJECTS_BY_CATEGORY_RESET,
    GET_SUBJECT_BY_CATEGORY_RESET,
} from "../constants/subjectConstents";
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
         
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,


} from "../constants/userConstents";


export const login = (username, password) => async(dispatch) => {
    try {
        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.post(
            '/api/auth/login/',
            {'username': username, 'password' : password},
            config
        )
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error) {
        dispatch({
            type : USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const register = (username, birth_year, student_id , school_name, phone_number, password) => async(dispatch) => {
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.post(
            '/api/auth/create/',
            {'username': username, 'birth_year':birth_year, 'student_id': student_id, 'school_name':school_name, 'phone_number': phone_number, 'password': password},
            config
        )

        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error) {
        dispatch({
            type : USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getUserDetails = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:USER_DETAILS_REQUEST
        })

        const {
            userLogin : {userInfo},
        } = getState()
        
        const config = {
            headers : {
                'Content-type':'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/auth/profile/`,
            config
        )

        dispatch({
            type : USER_DETAILS_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getUsers = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_USERS_REQUEST
        })

        const {
            userLogin : {userInfo},
        } = getState()
        
        const config = {
            headers : {
                'Content-type':'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/auth/users/`,
            config
        )

        dispatch({
            type : GET_USERS_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_USERS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getUser = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_USER_REQUEST
        })

        const {
            userLogin : {userInfo},
        } = getState()
        
        const config = {
            headers : {
                'Content-type':'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/auth/users/${id}`,
            config
        )

        dispatch({
            type : GET_USER_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_USER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: GET_SUBJECTS_BY_CATEGORY_RESET })
    dispatch({ type: GET_SUBJECT_BY_CATEGORY_RESET })
    dispatch({ type: GET_SCHOOL_RESET })
}