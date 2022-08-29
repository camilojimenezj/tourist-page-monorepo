import axios from 'axios'
const baseUrl = '/api/login/'


export const loginUser = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data
}
