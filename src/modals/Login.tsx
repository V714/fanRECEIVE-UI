import InputText from "../components/InputText";
import ButtonBorder from "../components/ButtonBorder";
import React, { FormEvent } from "react";
import { StoreContext } from "../App";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import { setLogged } from "../utils/logged";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPass, setLoginPass] = React.useState("");
  const { store, setStore } = React.useContext(StoreContext);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    setStore({ ...store, logged: true, isModalOpen: false });
    setLogged(true);
    console.log(e);
    navigate("/home");
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="modalTitle">Sign In</div>
      <InputText
        placeholder="E-mail"
        type="email"
        name="emailLogin"
        handleChange={(e) => setLoginEmail(e.value)}
      />
      <InputText
        placeholder="Password"
        type="password"
        name="passLogin"
        handleChange={(e) => setLoginPass(e.value)}
      />
      <button className="buttonPrimary" type="submit" name="loginButton">
        Login
      </button>
      <button
        className="fontGradient forgotPassButton"
        name="forgotPassButton"
        onClick={() =>
          setStore({ ...store, isModalOpen: true, selectedModal: ForgotPass })
        }>
        Forgot Password :(
      </button>
      <ButtonBorder
        text="Create New Account"
        onClick={() =>
          setStore({ ...store, isModalOpen: true, selectedModal: Register })
        }
      />
    </form>
  );
}

export default Login;
