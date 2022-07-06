import {
    POST_CREATE_APPLICATION_REQUEST,
    POST_CREATE_APPLICATION_SUCCESS,
    POST_CREATE_APPLICATION_FAIL,

    GET_APPLICATIONS_REQUEST,
    GET_APPLICATIONS_SUCCESS,
    GET_APPLICATIONS_FAIL,

    GET_APPLICATION_REQUEST,
    GET_APPLICATION_SUCCESS,
    GET_APPLICATION_FAIL,

} from "../constants/applicationConstents"
import axios from "axios";


export const createApplication = (student_name, email, phone_number, birth_year, distric, postal_code) => async(dispatch) => {
    try{
        dispatch({
            type : POST_CREATE_APPLICATION_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }
        const {data} = await axios.post(
            '/api/applications/create/',
            {'student_name': student_name, 'email':email, 'phone_number': phone_number, 'birth_year':birth_year, 'distric': distric, 'postal_code': postal_code},
            config
        )

        dispatch({
            type : POST_CREATE_APPLICATION_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error) {
        dispatch({
            type : POST_CREATE_APPLICATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getApplications = () => async(dispatch) => {
    try {
        dispatch({
            type:GET_APPLICATIONS_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/applications/`,
            config
        )

        dispatch({
            type : GET_APPLICATIONS_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_APPLICATIONS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getApplication = (id) => async(dispatch) => {
    try {
        dispatch({
            type:GET_APPLICATION_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/applications/${id}/`,
            config
        )

        dispatch({
            type : GET_APPLICATION_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_APPLICATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
