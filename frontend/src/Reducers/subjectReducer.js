import { 
    // GET_SUBJECTS_REQUEST,
    // GET_SUBJECTS_SUCCESS,
    // GET_SUBJECTS_FAIL,

    GET_CATEGORY_SUBJECTS_REQUEST,
    GET_CATEGORY_SUBJECTS_SUCCESS,
    GET_CATEGORY_SUBJECTS_FAIL,
    GET_CATEGORY_SUBJECTS_RESET,
} from "../constants/subjectConstents"


// export const subjectDetailsReducer = (state = { subjects:[] }, action) => {
//     switch(action.type) {
//         case  GET_SUBJECTS_REQUEST:
//             return {...state, subjectsLoading: true}

//         case  GET_SUBJECTS_SUCCESS:
//             return {subjectsLoading:false, subjects: action.payload}

//         case  GET_SUBJECTS_FAIL:
//             return {subjectsLoading:false, subjectsError: action.payload}

//         default:
//             return state
//     }
// }



export const categorySubjectDetailsReducer = (state = { categorySubjects:[] }, action) => {
    switch(action.type) {
        case  GET_CATEGORY_SUBJECTS_REQUEST:
            return {...state, categorySubjectsLoading: true}

        case  GET_CATEGORY_SUBJECTS_SUCCESS:
            return {categorySubjectsLoading: false, categorySubjects: action.payload}

        case  GET_CATEGORY_SUBJECTS_FAIL:
            return {categorySubjectsLoading: false, categorySubjectsError: action.payload}

        case GET_CATEGORY_SUBJECTS_RESET: 
            return {categorySubjects:[]}
        default:
            return state
    }
}
