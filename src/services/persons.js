import axios from "axios";
const baseUrl = 'http://localhost:3001/api/persons'


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
