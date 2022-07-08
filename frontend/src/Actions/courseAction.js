import {
    POST_COURSE_REQUEST,
    POST_COURSE_SUCCESS,
    POST_COURSE_FAIL,

    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
    GET_COURSES_FAIL,

    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAIL,
} from '../constants/courseConstents'
import axios from "axios";


export const createCourse = (course_name, course_duration_in_month_count, course_id, starting_month, starting_date) => async(dispatch, getState) => {
    try{
        dispatch({
            type : POST_COURSE_REQUEST
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
            '/api/courses/create/',
            {'course_name': course_name,'course_duration_in_month_count':course_duration_in_month_count, 'course_id':course_id, 'starting_month': starting_month, 'starting_date':starting_date},
            config
        )

        dispatch({
            type : POST_COURSE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : POST_COURSE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getCourses = () => async(dispatch) => {
    try {
        dispatch({
            type:GET_COURSES_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/courses/`,
            config
        )

        dispatch({
            type : GET_COURSES_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_COURSES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getCourse = (id) => async(dispatch) => {
    try {
        dispatch({
            type:GET_COURSE_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/courses/${id}/`,
            config
        )

        dispatch({
            type : GET_COURSE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_COURSE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
