import {
    POST_CREATE_APPLICATION_REQUEST,
    POST_CREATE_APPLICATION_SUCCESS,
    POST_CREATE_APPLICATION_FAIL,
    POST_CREATE_APPLICATION_RESET,

    GET_APPLICATIONS_REQUEST,
    GET_APPLICATIONS_SUCCESS,
    GET_APPLICATIONS_FAIL,
    GET_APPLICATIONS_RESET,    

    GET_APPLICATION_REQUEST,
    GET_APPLICATION_SUCCESS,
    GET_APPLICATION_FAIL,
    GET_APPLICATION_RESET,


} from "../constants/applicationConstents"

export const applicationCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case POST_CREATE_APPLICATION_REQUEST:
            return {applicationLoading: true}

        case POST_CREATE_APPLICATION_SUCCESS:
            return {applicationLoading: false, application: action.payload}

        case POST_CREATE_APPLICATION_FAIL:
            return {applicationLoading: false, applicationError: action.payload}

        case POST_CREATE_APPLICATION_RESET:
            return {}

        default:
            return state
    }
}


export const applicationsDataReducer = (state = { applications:[] }, action) => {
    switch(action.type) {
        case  GET_APPLICATIONS_REQUEST:
            return {...state, applicationsLoading: true}

        case  GET_APPLICATIONS_SUCCESS:
            return {applicationsLoading: false, applications: action.payload}

        case  GET_APPLICATIONS_FAIL:
            return {applicationsLoading: false, applicationsError: action.payload}

        case  GET_APPLICATIONS_RESET:
            return {applications:{}}
    
        default:
            return state
    }
}



export const applicationDataReducer = (state = { application:{} }, action) => {
    switch(action.type) {
        case  GET_APPLICATION_REQUEST:
            return {...state, applicationLoading: true}

        case  GET_APPLICATION_SUCCESS:
            return {applicationLoading: false, application: action.payload}

        case  GET_APPLICATION_FAIL:
            return {applicationLoading: false, applicationError: action.payload}

        case  GET_APPLICATION_RESET:
            return {application:{}}
    
        default:
            return state
    }
}

