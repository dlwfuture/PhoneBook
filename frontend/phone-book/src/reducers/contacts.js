import { GET_CONTACTS
} from "../actions/contacts"

export function contacts(state = {}, action) {
    switch(action.type) {
        case GET_CONTACTS:
            return action.contacts
        default: 
            return state
    }
}