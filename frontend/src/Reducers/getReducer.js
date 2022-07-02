import { GET_SCHOOL_REQUEST,
        GET_SCHOOL_SUCCESS,
        GET_SCHOOL_FAIL,
} from "../constants/getConstents"

export const getSchoolReducer = (state = { schoolDetails:[] }, action) => {
    switch(action.type) {
        case  GET_SCHOOL_REQUEST:
            return {...state, schoolDetailsLoading: true}

        case  GET_SCHOOL_SUCCESS:
            return {schoolDetailsLoading: false, schoolDetails: action.payload}

        case  GET_SCHOOL_FAIL:
            return {schoolDetailsLoading: false, schoolDetailserror: action.payload}

        default:
            return state
    }
}
