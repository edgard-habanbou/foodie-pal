import { api } from './base'
class UserApi {
  async loginUser(user) {
    return await api.post('/auth/login-admin', user)
  }
  async checkToken(token) {
    return await api.post(`/auth/check-token-admin/`, token)
  }
  async checkIfLoggedIn(token) {
    return await api.post('/auth/check-admin', token)
  }
}

export const userApi = new UserApi()
