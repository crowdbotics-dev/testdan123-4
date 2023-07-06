import axios from "axios"
const newConnector = axios.create({
  baseURL: "https://test.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function newconnector_get_testget_read(payload) {
  return newConnector.get(`/testget`)
}
function newconnector_post_testpost_create(payload) {
  return newConnector.post(`/testpost`)
}
export const apiService = {
  newconnector_get_testget_read,
  newconnector_post_testpost_create
}
