import axios from 'axios'

const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

const params = {
  key: import.meta.env.VITE_API_KEY,
  cx: '65ff76d5a8301429d',
}

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      ...params,
      ...payload,
    },
  })

  return data
}
