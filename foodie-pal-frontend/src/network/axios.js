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
}

export const userApi = new UserApi();
