import { combineReducers } from 'redux'
import { contacts, contact } from '../reducers/contacts'

export default combineReducers({
    contacts,
    contact
})