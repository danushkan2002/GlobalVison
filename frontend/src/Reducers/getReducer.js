import { GET_SCHOOL_REQUEST,
        GET_SCHOOL_SUCCESS,
        GET_SCHOOL_FAIL,
        GET_SCHOOL_RESET,

        GET_SUBJECT_CATEGORY_REQUEST,
        GET_SUBJECT_CATEGORY_SUCCESS,
        GET_SUBJECT_CATEGORY_FAIL,
        GET_SUBJECT_CATEGORY_RESET,
        
        GET_ARTICLE_CATEGORY_REQUEST,
        GET_ARTICLE_CATEGORY_SUCCESS,
        GET_ARTICLE_CATEGORY_FAIL,
        GET_ARTICLE_CATEGORY_RESET,
        
} from "../constants/getConstents"

export const schoolDataReducer = (state = { school:[] }, action) => {
    switch(action.type) {
        case  GET_SCHOOL_REQUEST:
            return {...state, schoolLoading: true}

        case  GET_SCHOOL_SUCCESS:
            return {schoolLoading: false, school: action.payload}

        case  GET_SCHOOL_FAIL:
            return {schoolLoading: false, schoolerror: action.payload}

        case  GET_SCHOOL_RESET:
            return {school:[]}

        default:
            return state
    }
}


export const subjectCategoryReducer = (state = { subjectsCategories:[] }, action) => {
    switch(action.type) {
        case  GET_SUBJECT_CATEGORY_REQUEST:
            return {...state, subjectsCategoriesLoading: true}

        case  GET_SUBJECT_CATEGORY_SUCCESS:
            return {subjectsCategoriesLoading: false, subjectsCategories: action.payload}

        case  GET_SUBJECT_CATEGORY_FAIL:
            return {subjectsCategoriesLoading: false, subjectsCategoriesError: action.payload}

        case  GET_SUBJECT_CATEGORY_RESET:
            return {subjectsCategories:[]}
    
        default:
            return state
    }
}

export const articleCategoryReducer = (state = { articlesCategories:[] }, action) => {
    switch(action.type) {
        case  GET_ARTICLE_CATEGORY_REQUEST:
            return {...state, articlesCategoriesLoading: true}

        case  GET_ARTICLE_CATEGORY_SUCCESS:
            return {articlesCategoriesLoading: false, articlesCategories: action.payload}

        case  GET_ARTICLE_CATEGORY_FAIL:
            return {articlesCategoriesLoading: false, articlesCategoriesError: action.payload}

        case  GET_ARTICLE_CATEGORY_RESET:
            return {articlesCategories:[]}
    
        default:
            return state
    }
}
