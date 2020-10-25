import { getAllContacts } from '../utils/api'

export const GET_CONTACTS = 'GET_CONTACTS'

export function getContacts() {  
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