import axios from "axios";
import { USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

} from "../constants/userConstents";


export const login = (username, password) => async(dispatch) => {
    try {
        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            'Content-type' : 'applecation/json'
        }

        const {data} = await axios.post(
            '/api/auth/login/',
            {'username': username, 'password' : password},
            config
        )
        dispatch({
            type:USER_LOGIN_SUCCESS,
            paload:data
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


export const register = (username, birth_year, password) => async(dispatch) => {
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config = {
            'Conten-type':'application/json'
        }

        const {data} = await axios.post(
            '/api/auth/create/',
            {'username': username, 'birth_year':birth_year, 'password': password},
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

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}