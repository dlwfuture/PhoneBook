const API_URL = process.env.REACT_APP_API_URL

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
}  

/*
    GET
*/
export const getAllContacts = () => {
    return fetch(`${API_URL}/contacts`, { method: 'GET', headers })
    .then(res => res.json())
}

export const getContact = (contactId) => {
    return fetch(`${API_URL}/contact/${contactId}`, { method: 'GET', headers })
    .then(res => res.json())
}