import { 
    GET_SUBJECTS_BY_CATEGORY_REQUEST,
    GET_SUBJECTS_BY_CATEGORY_SUCCESS,
    GET_SUBJECTS_BY_CATEGORY_FAIL,
    GET_SUBJECTS_BY_CATEGORY_RESET,

    GET_SUBJECT_BY_CATEGORY_REQUEST,
    GET_SUBJECT_BY_CATEGORY_SUCCESS,
    GET_SUBJECT_BY_CATEGORY_FAIL,
    GET_SUBJECT_BY_CATEGORY_RESET,
} from "../constants/subjectConstents"




export const subjectsByCategoryReducer = (state = { subjects:[] }, action) => {
    switch(action.type) {
        case  GET_SUBJECTS_BY_CATEGORY_REQUEST:
            return {...state, SubjectsLoading: true}

        case  GET_SUBJECTS_BY_CATEGORY_SUCCESS:
            return {subjectsLoading: false,subjects: action.payload}

        case  GET_SUBJECTS_BY_CATEGORY_FAIL:
            return {subjectsLoading: false, subjectsError: action.payload}

        case GET_SUBJECTS_BY_CATEGORY_RESET: 
            return {subjects:[]}
        default:
            return state
    }
}


export const subjectByCategoryReducer = (state = { subject: {} }, action) => {
    switch(action.type) {
        case GET_SUBJECT_BY_CATEGORY_REQUEST:
            return {...state, subjectLoading: true}

        case GET_SUBJECT_BY_CATEGORY_SUCCESS:
            return {subjectLoading: false, subject: action.payload}

        case GET_SUBJECT_BY_CATEGORY_FAIL:
            return {subjectLoading: false, subjectError: action.payload}

        case GET_SUBJECT_BY_CATEGORY_RESET:
            return {}

        default:
            return state
    }
}

