import axios from "axios";
// because both front end and backend are at the same address, baseUrl can be a relative URL
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
