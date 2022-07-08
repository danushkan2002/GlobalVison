import {
    POST_ARTICLE_REQUEST,
    POST_ARTICLE_SUCCESS,
    POST_ARTICLE_FAIL,

    GET_ARTICLES_REQUEST,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAIL,

    GET_ARTICLE_REQUEST,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAIL,
    
} from '../constants/articleConstents'
import axios from "axios";


export const createArticle = (creator_name, category) => async(dispatch, getState) => {
    try{
        dispatch({
            type : POST_ARTICLE_REQUEST
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
        const {data} = await axios.post(
            '/api/articles/create/',
            {'creator_name': creator_name, 'category':category},
            config
        )

        dispatch({
            type : POST_ARTICLE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : POST_ARTICLE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getArticles = (cat) => async(dispatch) => {
    try {
        dispatch({
            type:GET_ARTICLES_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/articles/${cat}`,
            config
        )

        dispatch({
            type : GET_ARTICLES_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_ARTICLES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getArticle = (cat,id) => async(dispatch) => {
    try {
        dispatch({
            type:GET_ARTICLE_REQUEST
        })
        
        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(
            `/api/articles/${cat}/${id}`,
            config
        )

        dispatch({
            type : GET_ARTICLE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_ARTICLE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
