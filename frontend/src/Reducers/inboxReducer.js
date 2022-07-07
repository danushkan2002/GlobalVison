import {
    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAIL,

    GET_MESSAGES_REQUEST,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAIL,
    GET_MESSAGES_RESET,

    GET_MESSAGE_REQUEST,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAIL,
    GET_MESSAGE_RESET,
} from '../constants/inboxConstants'

export const messageCreateDataReducer = (state = {} , action) => {
    switch(action.type){
        case POST_MESSAGE_REQUEST:
            return{messageCreateLoading:true, messageCreateSuccess:false}

        case POST_MESSAGE_SUCCESS:
            return{messageCreateLoading:false, messageCreate: action.payload , messageCreateSuccess:true}
        
        case POST_MESSAGE_FAIL:
            return{messageCreateLoading:false, messageCreateError: action.payload  ,messageCreateSuccess:false}
                
        default:
            return state
    }
}

export const messagesDataReducer = (state = {messages:[]} , action) => {
    switch(action.type){
        case GET_MESSAGES_REQUEST:
            return{messagesLoading:true }

        case GET_MESSAGES_SUCCESS:
            return{messagesLoading:false, messages: action.payload }
        
        case GET_MESSAGES_FAIL:
            return{messagesLoading:false, messagesError: action.payload  }
        
        case GET_MESSAGES_RESET:
            return{}
                

        default:
            return state
    }
}

export const messageDataReducer = (state = {message:{}} , action) => {
    switch(action.type){
        case GET_MESSAGE_REQUEST:
            return{...state, messageLoading:true}

        case GET_MESSAGE_SUCCESS:
            return{messageLoading:false, message: action.payload }
        
        case GET_MESSAGE_FAIL:
            return{messageLoading:false, messageError: action.payload }
        
        case GET_MESSAGE_RESET:
            return{}    
            
        default:
            return state
    }
}