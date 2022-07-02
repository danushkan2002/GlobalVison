import { GET_SUBJECTS_REQUEST,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_FAIL,
} from "../constants/subjectConstents"


export const subjectDetailsReducer = (state = { subjectDetails:[] }, action) => {
    switch(action.type) {
        case  GET_SUBJECTS_REQUEST:
            return {...state, subjectDetailsLoading: true}

        case  GET_SUBJECTS_SUCCESS:
            return {subjectDetailsLoading: false, subjectDetails: action.payload}

        case  GET_SUBJECTS_FAIL:
            return {subjectDetailsLoading: false, subjectDetailserror: action.payload}

        default:
            return state
    }
}
