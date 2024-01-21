import { userApi } from "../network/axios";

const checkIfLoggedIn = async () => {
  if (localStorage.getItem("token")) {
    const response = await userApi.checkIfLoggedIn({
      token: localStorage.getItem("token"),
    });
    if (!response.user) {
      return false;
    } else {
      localStorage.setItem("user", JSON.stringify(response.user));
      return true;
    }
  } else {
    return false;
  }
};
export default checkIfLoggedIn;
