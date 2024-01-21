import { api } from './base'
class UserApi {
  async loginUser(user) {
    return await api.post('/auth/login/admin', user)
  }
  async checkIfLoggedIn(token) {
    return await api.post('/auth/check/admin', token)
  }
}

export const userApi = new UserApi()
