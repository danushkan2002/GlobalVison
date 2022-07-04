import axios from "axios";
import { 
    // GET_SUBJECTS_REQUEST,
    // GET_SUBJECTS_SUCCESS,
    // GET_SUBJECTS_FAIL,
    
    GET_CATEGORY_SUBJECTS_REQUEST,
    GET_CATEGORY_SUBJECTS_SUCCESS,
    GET_CATEGORY_SUBJECTS_FAIL,
} from "../constants/subjectConstents"

// export const getSubjectsDetails = () => async(dispatch, getState) => {
//     try {
//         dispatch({
//             type:GET_SUBJECTS_REQUEST
//         })

//         const {
//             userLogin : {userInfo},
//         } = getState()
        
//         const config = {
//             headers : {
//                 'Content-type':'application/json',
//                 Authorization : `Bearer ${userInfo.token}`
//             }
//         }

//         const {data} = await axios.get(
//             `/api/subjects/${userInfo.age_category}`,
//             config
//         )

//         dispatch({
//             type : GET_SUBJECTS_SUCCESS,
//             payload : data
//         })

//     } catch(error) {
//         dispatch({
//             type : GET_SUBJECTS_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }

export const getCategorySubjectsDetails = (cat) => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_CATEGORY_SUBJECTS_REQUEST
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
            type : GET_CATEGORY_SUBJECTS_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_CATEGORY_SUBJECTS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


