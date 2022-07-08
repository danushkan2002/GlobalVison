import {
    POST_PROJECT_REQUEST,
    POST_PROJECT_SUCCESS,
    POST_PROJECT_FAIL,

    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_RESET,

    GET_PROJECT_REQUEST,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL,
    GET_PROJECT_RESET,
    
} from '../constants/aboutConstents'

export const projectCreateDataReducer = (state = {}, action) => {
    switch(action.type) {
        case POST_PROJECT_REQUEST:
            return {projectLoading: true, projectSuccess:false}

        case POST_PROJECT_SUCCESS:
            return {projectLoading: false, project: action.payload, projectSuccess:true}

        case POST_PROJECT_FAIL:
            return {projectLoading: false, projectError: action.payload, projectSuccess:false}

        default:
            return state
    }
}


export const projectsDataReducer = (state = { projects:[] }, action) => {
    switch(action.type) {
        case  GET_PROJECTS_REQUEST:
            return {...state, projectsLoading: true}

        case  GET_PROJECTS_SUCCESS:
            return {projectsLoading: false, projects: action.payload}

        case  GET_PROJECTS_FAIL:
            return {projectsLoading: false, projectsError: action.payload}

        case  GET_PROJECTS_RESET:
            return {projects:[]}
    
        default:
            return state
    }
}


export const projectDataReducer = (state = { project:{} }, action) => {
    switch(action.type) {
        case  GET_PROJECT_REQUEST:
            return {...state, projectLoading: true}

        case  GET_PROJECT_SUCCESS:
            return {projectLoading: false, project: action.payload}

        case  GET_PROJECT_FAIL:
            return {projectLoading: false, projectError: action.payload}

        case  GET_PROJECT_RESET:
            return {project:{}}
    
        default:
            return state
    }
}

