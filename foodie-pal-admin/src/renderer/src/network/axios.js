import { api } from './base'
class UserApi {
  async loginUser(user) {
    return await api.post('/auth/login/admin', user)
  }
  async checkIfLoggedIn(token) {
    return await api.post('/auth/check/admin', token)
  }
  async getStats() {
    return await api.post('/stats/getstats')
  }
  async getUsers() {
    return await api.post('/stats/getusers')
  }
  async deleteUser(userId) {
    if (userId) {
      return await api.delete('/profile/user/' + userId)
    }
    return await api.delete('/profile/user')
  }
}

export const userApi = new UserApi()
