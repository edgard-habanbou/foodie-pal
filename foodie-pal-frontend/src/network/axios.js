import { api } from "./base";
class UserApi {
  async registerUser(user) {
    return await api.post("/auth/register", user);
  }
  async loginUser(user) {
    return await api.post("/auth/login", user);
  }
  async uploadImage(image) {
    return await api.post("/profile/upload", image);
  }
  async forgotPassword(email) {
    return await api.post("/auth/forgot-password", email);
  }
  async resetPassword(tokenAndPass) {
    return await api.post("/auth/reset-password", tokenAndPass);
  }
  async checkToken(token) {
    return await api.post(`/auth/check-token/`, token);
  }
  async checkIfLoggedIn(token) {
    return await api.post("/auth/check", token);
  }
  async getUser(token) {
    return await api.get("profile/user", token);
  }
  async uploadItemsImage(image) {
    return await api.post("/clarifai/upload", image);
  }
  async updateUser(updates) {
    return await api.post("/subdocument", updates);
  }
  async deleteFromUser(deleted) {
    return await api.delete("/subdocument", deleted);
  }
}

export const userApi = new UserApi();
