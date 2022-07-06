import axios from "axios";
import {    
    GET_SUBJECTS_BY_CATEGORY_REQUEST,
    GET_SUBJECTS_BY_CATEGORY_SUCCESS,
    GET_SUBJECTS_BY_CATEGORY_FAIL,

    GET_SUBJECT_BY_CATEGORY_REQUEST,
    GET_SUBJECT_BY_CATEGORY_SUCCESS,
    GET_SUBJECT_BY_CATEGORY_FAIL,
    
} from "../constants/subjectConstents"


export const getSubjects = (cat) => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_SUBJECTS_BY_CATEGORY_REQUEST
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
            `/api/subjects/${userInfo.age_category}/${cat}`,
            config
        )

        dispatch({
            type : GET_SUBJECTS_BY_CATEGORY_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_SUBJECTS_BY_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getSubject = (cat,id) => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_SUBJECT_BY_CATEGORY_REQUEST
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
            `/api/subjects/${userInfo.age_category}/${cat}/${id}`,
            config
        )

        dispatch({
            type : GET_SUBJECT_BY_CATEGORY_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_SUBJECT_BY_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



