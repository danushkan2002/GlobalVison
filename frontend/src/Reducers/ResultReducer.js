import {
    POST_RESULT_REQUEST,
    POST_RESULT_SUCCESS,
    POST_RESULT_FAIL,

    GET_RESULTS_REQUEST,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_FAIL,
    GET_RESULTS_RESET,

    GET_RESULT_REQUEST,
    GET_RESULT_SUCCESS,
    GET_RESULT_FAIL,
    GET_RESULT_RESET,
} from '../constants/ResultConstents'

export const resultCreateDataReducer = (state = {}, action) => {
    switch(action.type) {
        case POST_RESULT_REQUEST:
            return {resultLoading: true, resultSuccess:false}

        case POST_RESULT_SUCCESS:
            return {resultLoading: false, result: action.payload, resultSuccess:true}

        case POST_RESULT_FAIL:
            return {resultLoading: false, resultError: action.payload, resultSuccess:false}

        default:
            return state
    }
}


export const resultsDataReducer = (state = { results:[] }, action) => {
    switch(action.type) {
        case  GET_RESULTS_REQUEST:
            return {...state, resultsLoading: true}

        case  GET_RESULTS_SUCCESS:
            return {resultsLoading: false, results: action.payload}

        case  GET_RESULTS_FAIL:
            return {resultsLoading: false, resultsError: action.payload}

        case  GET_RESULTS_RESET:
            return {results:[]}
    
        default:
            return state
    }
}


export const resultDataReducer = (state = { result:{} }, action) => {
    switch(action.type) {
        case  GET_RESULT_REQUEST:
            return {...state, resultLoading: true}

        case  GET_RESULT_SUCCESS:
            return {resultLoading: false, result: action.payload}

        case  GET_RESULT_FAIL:
            return {resultLoading: false, resultError: action.payload}

        case  GET_RESULT_RESET:
            return {result:{}}
    
        default:
            return state
    }
}

