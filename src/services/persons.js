import axios from "axios";
// because both front end and backend are at the same address, baseUrl can be a relative URL.
// bear in mind this means the app does not work during development, as the requests go to port 3000
// but the backend is at port 3001. Added the 'proxy' declaration to package.json to redirect requests 
// to 3001
const baseUrl = '/api/persons'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteOnePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updateNumber = (id, updatedPersonObject) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPersonObject)
    return request.then(response => response.data)
}

export default { getAll, create, deleteOnePerson, updateNumber }
