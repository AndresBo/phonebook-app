import axios from "axios";
// because both front end and backend are at the same address, baseUrl can be a relative URL.
// bear in mind this means the app does not work during development, as the requests go to port 3000
// but the backend is at port 3001. Added the 'proxy' declaration to package.json to redirect requests 
// to 3001
const baseUrl = '/api/persons'

// private variable used to set user authorization token 
let token = null
const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const config = {
        headers: { Authorization: token }
    }

    const request = axios.post(baseUrl, newObject, config)
    return request.then(response => response.data)
}

const deleteOnePerson = (id) => {
    const config = {
        headers: { Authorization: token }
    }
    return axios.delete(`${baseUrl}/${id}`, config)
}

const updateNumber = (id, updatedPersonObject) => {
    const config = {
        headers: { Authorization: token }
    }
    const request = axios.put(`${baseUrl}/${id}`, updatedPersonObject, config)
    return request.then(response => response.data)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { setToken, getAll, create, deleteOnePerson, updateNumber }
