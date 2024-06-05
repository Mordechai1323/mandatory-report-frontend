import axios from '../api/axios'
import { Auth } from '../types/auth'

export const login = async () => {
  // implement ADFS token
  const ADFStoken = '' // get ADFS token
  const response = await axios.get<Auth>('/login', {
    headers: {
      Authorization: `Bearer ${ADFStoken}`,
    },
  })

  return response.data
}
