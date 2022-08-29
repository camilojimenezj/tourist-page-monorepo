import axios from 'axios'
const baseUrl = '/api/users/'


export const registerUser = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data
}