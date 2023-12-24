import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers = {
  Authorization: localStorage.getItem("jwt"),
  "Content-Type": "application/json",
};

class UserApi {
  async registerUser(user) {
    try {
      const response = await axios.post("/auth/register", user);
      return response?.data;
    } catch (error) {
      return {
        error: error.response.data,
      };
    }
  }
  async loginUser(user) {
    try {
      const response = await axios.post("/auth/login", user);
      return response?.data;
    } catch (error) {
      return error;
    }
  }
  async uploadImage(image) {
    try {
      const response = await axios.post("/profile/upload", image);
      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export const userApi = new UserApi();
