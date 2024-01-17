import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "https://localhost:8000";
axios.defaults.headers["Authorization"] =
  "Bearer " + localStorage.getItem("token");

class base {
  createTimeoutPromise() {
    const timeoutDuration = 5000;
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Request timed out"));
      }, timeoutDuration);
    });
  }

  async get(url) {
    try {
      const response = await Promise.race([
        axios.get(url),
        this.createTimeoutPromise(),
      ]);
      return response?.data;
    } catch (error) {
      return error;
    }
  }

  async post(url, data) {
    try {
      const response = await Promise.race([
        axios.post(url, data),
        this.createTimeoutPromise(),
      ]);
      return response?.data;
    } catch (error) {
      return error;
    }
  }

  async put(url, data) {
    try {
      const response = await Promise.race([
        axios.put(url, data),
        this.createTimeoutPromise(),
      ]);
      return response?.data;
    } catch (error) {
      return error;
    }
  }

  async delete(url) {
    try {
      const response = await Promise.race([
        axios.delete(url),
        this.createTimeoutPromise(),
      ]);
      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export const api = new base();
