import axios from "axios";

import { GET_SCHOOL_REQUEST,
    GET_SCHOOL_SUCCESS,
    GET_SCHOOL_FAIL,
} from "../constants/getConstents"

export const getSchoolDetails = (id) => async(dispatch) => {
    try {
        dispatch({
            type:GET_SCHOOL_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/auth/${id}/`,
            config
        )

        dispatch({
            type : GET_SCHOOL_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_SCHOOL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



