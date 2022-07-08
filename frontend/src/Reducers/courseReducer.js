import {
    POST_COURSE_REQUEST,
    POST_COURSE_SUCCESS,
    POST_COURSE_FAIL,

    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
    GET_COURSES_FAIL,
    GET_COURSES_RESET,

    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAIL,
    GET_COURSE_RESET,
} from '../constants/courseConstents'

export const courseCreateDataReducer = (state = {}, action) => {
    switch(action.type) {
        case POST_COURSE_REQUEST:
            return {courseLoading: true, courseSuccess:false}

        case POST_COURSE_SUCCESS:
            return {courseLoading: false, course: action.payload, courseSuccess:true}

        case POST_COURSE_FAIL:
            return {courseLoading: false, courseError: action.payload, courseSuccess:false}

        default:
            return state
    }
}


export const coursesDataReducer = (state = { courses:[] }, action) => {
    switch(action.type) {
        case  GET_COURSES_REQUEST:
            return {...state, coursesLoading: true}

        case  GET_COURSES_SUCCESS:
            return {coursesLoading: false, courses: action.payload}

        case  GET_COURSES_FAIL:
            return {coursesLoading: false, coursesError: action.payload}

        case  GET_COURSES_RESET:
            return {courses:[]}
    
        default:
            return state
    }
}


export const courseDataReducer = (state = { course:{} }, action) => {
    switch(action.type) {
        case  GET_COURSE_REQUEST:
            return {...state, courseLoading: true}

        case  GET_COURSE_SUCCESS:
            return {courseLoading: false, course: action.payload}

        case  GET_COURSE_FAIL:
            return {courseLoading: false, courseError: action.payload}

        case  GET_COURSE_RESET:
            return {course:{}}
    
        default:
            return state
    }
}

