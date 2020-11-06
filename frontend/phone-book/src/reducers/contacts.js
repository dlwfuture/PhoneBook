import { 
    GET_CONTACTS,
    GET_CONTACT
} from "../actions/contacts"

export function contacts(state = {}, action) {
    switch(action.type) {
        case GET_CONTACTS:
            return action.contacts
        default: 
            return state
    }
}

export function contact(state = {}, action){
    switch(action.type) {
        case GET_CONTACT:
            return action.contact
        default:
            return state
    }
}