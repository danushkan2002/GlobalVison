import { GET_SCHOOL_REQUEST,
        GET_SCHOOL_SUCCESS,
        GET_SCHOOL_FAIL,
        GET_SCHOOL_RESET,

        GET_SUBJECT_CATEGORY_REQUEST,
        GET_SUBJECT_CATEGORY_SUCCESS,
        GET_SUBJECT_CATEGORY_FAIL,

        GET_SUBJECT_CATEGORY_RESET,
        
} from "../constants/getConstents"

export const schoolDataReducer = (state = { school:[] }, action) => {
    switch(action.type) {
        case  GET_SCHOOL_REQUEST:
            return {...state, schoolLoading: true}

        case  GET_SCHOOL_SUCCESS:
            return {schoolLoading: false, school: action.payload}

        case  GET_SCHOOL_FAIL:
            return {schoolLoading: false, schoolerror: action.payload}

        case  GET_SUBJECT_CATEGORY_RESET:
            return {school:[]}

        default:
            return state
    }
}


export const subjectCategoryDataReducer = (state = { subjectCategory:[] }, action) => {
    switch(action.type) {
        case  GET_SUBJECT_CATEGORY_REQUEST:
            return {...state, subjectCategoryLoading: true}

        case  GET_SUBJECT_CATEGORY_SUCCESS:
            return {subjectCategoryLoading: false, subjectCategory: action.payload}

        case  GET_SUBJECT_CATEGORY_FAIL:
            return {subjectCategoryLoading: false, subjectCategoryError: action.payload}

        case  GET_SUBJECT_CATEGORY_RESET:
            return {subjectCategory:[]}
    
        default:
            return state
    }
}
