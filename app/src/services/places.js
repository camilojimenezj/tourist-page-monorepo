import axios from 'axios'
const baseUrl = '/api/places/'

export const getAll = async (type) => {
  const res = await axios.get(baseUrl + type)
  const { data } = res
  return data
}

export const createPlace = async (data) => {
  const res = await axios.post(baseUrl, data, {
    headers: {
    "Content-Type": "multipart/form-data",
    },
  });
  return res.data
}

