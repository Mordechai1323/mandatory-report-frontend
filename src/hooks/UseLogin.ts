import axios from '../api/axios'
import { Auth } from '../types/auth'
import { useAuth } from './useAuth'


export function UseLogin() {
  const { setAuth } = useAuth()

  const login = async () => {
    // implement ADFS token
    const ADFStoken = '' // get ADFS token
    const response = await axios.get<Auth>('/login', {
      headers: {
        'ADFS-token': ADFStoken,
      },
    })

    setAuth(response.data)
  }

  return login
}
