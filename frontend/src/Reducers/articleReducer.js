import {
    POST_ARTICLE_REQUEST,
    POST_ARTICLE_SUCCESS,
    POST_ARTICLE_FAIL,

    GET_ARTICLES_REQUEST,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAIL,
    GET_ARTICLES_RESET,

    GET_ARTICLE_REQUEST,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAIL,
    GET_ARTICLE_RESET,
    
} from '../constants/articleConstents'

export const articleCreateDataReducer = (state = {}, action) => {
    switch(action.type) {
        case POST_ARTICLE_REQUEST:
            return {articleLoading: true, articleSuccess:false}

        case POST_ARTICLE_SUCCESS:
            return {articleLoading: false, article: action.payload, articleSuccess:true}

        case POST_ARTICLE_FAIL:
            return {articleLoading: false, articleError: action.payload, articleSuccess:false}

        default:
            return state
    }
}


export const articlesDataReducer = (state = { articles:[] }, action) => {
    switch(action.type) {
        case  GET_ARTICLES_REQUEST:
            return {articlesLoading: true}

        case  GET_ARTICLES_SUCCESS:
            return {articlesLoading: false, articles: action.payload}

        case  GET_ARTICLES_FAIL:
            return {articlesLoading: false, articlesError: action.payload}

        case  GET_ARTICLES_RESET:
            return {articles:[]}
    
        default:
            return state
    }
}


export const articleDataReducer = (state = { article:{} }, action) => {
    switch(action.type) {
        case  GET_ARTICLE_REQUEST:
            return {...state, articleLoading: true}

        case  GET_ARTICLE_SUCCESS:
            return {articleLoading: false, article: action.payload}

        case  GET_ARTICLE_FAIL:
            return {articleLoading: false, articleError: action.payload}

        case  GET_ARTICLE_RESET:
            return {article:{}}
    
        default:
            return state
    }
}

