import axios from "axios";

const baseUrl = '/api/users'

let adminToken = null
const setAdminToken = newToken => {
  adminToken = `Bearer ${newToken}`
}

const getAllUsers = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createUser = newObject => {
  const config = {
      headers: { Authorization: adminToken }
  }
  
  const request = axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

const deleteUser = (id) => {
  const config = {
    headers: { Authorization: adminToken }
  }

  return axios.delete(`${baseUrl}/${id}`, config)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { setAdminToken, getAllUsers, createUser, deleteUser }
