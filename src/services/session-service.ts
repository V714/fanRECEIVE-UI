import axios from "axios";
import { apiUrl } from "../integrations/api";

interface LoginInterface {
  email: string;
  password: string;
}

interface RegisterInterface {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  city: string;
  password: string;
  repeat_password: string;
}

class SessionService {
  login = (login: LoginInterface) => {
    return axios.post(apiUrl + "/token", login);
  };

  register = (newUser: RegisterInterface) => {
    return axios.post(apiUrl + "/register", newUser);
  };

  refresh = (token: string) => {
    return axios.post(apiUrl + "/token/refresh", token);
  };

  verify = (token: string) => {
    return axios.post(apiUrl + "/token/verify", token);
  };
}
