import {
    POST_RESULT_REQUEST,
    POST_RESULT_SUCCESS,
    POST_RESULT_FAIL,

    GET_RESULTS_REQUEST,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_FAIL,

    GET_RESULT_REQUEST,
    GET_RESULT_SUCCESS,
    GET_RESULT_FAIL,
} from '../constants/ResultConstents'
import axios from "axios";


export const createResult = (student_id, course_id, vocabulary, grammar, speaking_and_listening, writing, reading) => async(dispatch) => {
    try{
        dispatch({
            type : POST_RESULT_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }
        const {data} = await axios.post(
            '/api/results/create/',
            {'student_id': student_id, 'course_id':course_id, 'vocabulary': vocabulary, 'grammar':grammar, 'speaking_and_listening': speaking_and_listening, 'writing': writing, 'reading': reading},
            config
        )

        dispatch({
            type : POST_RESULT_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : POST_RESULT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getResults = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_RESULTS_REQUEST
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
            `/api/results/`,
            config
        )

        dispatch({
            type : GET_RESULTS_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_RESULTS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getResult = (id) => async(dispatch) => {
    try {
        dispatch({
            type:GET_RESULT_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/results/${id}/`,
            config
        )

        dispatch({
            type : GET_RESULT_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_RESULT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
