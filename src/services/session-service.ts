import Axios from "axios-observable";
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

export class SessionService {
  login = (login: LoginInterface) => {
    return Axios.post(apiUrl + "/token", login);
  };

  register = (newUser: RegisterInterface) => {
    return Axios.post(apiUrl + "/register", newUser);
  };

  refresh = (token: string) => {
    return Axios.post(apiUrl + "/token/refresh", token);
  };

  verify = (token: string) => {
    return Axios.post(apiUrl + "/token/verify", token);
  };
}
