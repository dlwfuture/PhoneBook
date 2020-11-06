import { 
    getAllContacts, 
    getContact 
} from '../utils/api'

export const GET_CONTACTS = 'GET_CONTACTS'
export const GET_CONTACT = 'GET_CONTACT'

export function GetContacts() {  
    return (dispatch) => {
        getAllContacts()
        .then(contacts => dispatch({type: GET_CONTACTS, 
            contacts
        }))
        .catch(error => {
            throw(error);
        })
    }
}

export function GetContact(contactId) {
    return (dispatch) => {
        getContact(contactId)
        .then(contact => dispatch({
            type: GET_CONTACT,
            contact
        })).catch(error => {
            throw(error);
        })
    }
}