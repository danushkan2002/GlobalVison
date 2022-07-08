import {
    POST_PROJECT_REQUEST,
    POST_PROJECT_SUCCESS,
    POST_PROJECT_FAIL,

    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_RESET,

    GET_PROJECT_REQUEST,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL,
    GET_PROJECT_RESET,
    
} from '../constants/aboutConstents'
import axios from "axios";


export const createProject = (content, place_name) => async(dispatch, getState) => {
    try{
        dispatch({
            type : POST_PROJECT_REQUEST
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
        const {data} = await axios.post(
            '/api/projects/create/',
            {'content': content, 'place_name':place_name},
            config
        )

        dispatch({
            type : POST_PROJECT_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : POST_PROJECT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getProjects = () => async(dispatch) => {
    try {
        dispatch({
            type:GET_PROJECTS_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/projects/`,
            config
        )

        dispatch({
            type : GET_PROJECTS_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_PROJECTS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getProject = (id) => async(dispatch) => {
    try {
        dispatch({
            type:GET_PROJECT_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/projects/${id}/`,
            config
        )

        dispatch({
            type : GET_PROJECT_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_PROJECT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
