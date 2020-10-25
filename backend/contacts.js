const clone = require('clone')

let db = {}

const defaultData = [
    {Id: 1, Name: "Daniel Wozniak", Phone:"1932450892"},
    {Id: 2, Name: "Valeria Pimentel", Phone:"199999999"}
]

function getData (token) {
    let data = db[token]
    if (data == null) {
        data = db[token] = clone(defaultData)
    }
    return data
}

function getAll (token) {
    return new Promise((res) => {
        const contacts = getData(token)
        let keys = Object.keys(contacts)
        let filtered_keys = keys.filter(key => !contacts[key].Deleted)
        res(filtered_keys.map(key => contacts[key]))
    })
}

module.exports = {
    getAll
  }