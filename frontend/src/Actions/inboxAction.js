import axios from "axios";
import {
    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAIL,

    GET_MESSAGES_REQUEST,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAIL,

    GET_MESSAGE_REQUEST,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAIL,
} from '../constants/inboxConstants'

export const createMessage = (username, email, subject, content) => async(dispatch) => {
    try{
        dispatch({
            type : POST_MESSAGE_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }
        const {data} = await axios.post(
            '/api/inbox/create/',
            {'username': username, 'email':email, 'subject': subject, 'content': content},
            config
        )

        dispatch({
            type : POST_MESSAGE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : POST_MESSAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getMessages = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_MESSAGES_REQUEST
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
            `/api/inbox/`,
            config
        )

        dispatch({
            type : GET_MESSAGES_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_MESSAGES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getMessage = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_MESSAGE_REQUEST
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
            `/api/inbox/${id}/`,
            config
        )

        dispatch({
            type : GET_MESSAGE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_MESSAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
