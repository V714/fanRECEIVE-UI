import InputText from "../components/inputs/InputText";
import ButtonBorder from "../components/inputs/ButtonBorder";
import React from "react";
import { StoreContext } from "../App";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import { setLogged } from "../utils/logged";
import { useNavigate } from "react-router-dom";
import Button from "../components/inputs/Button";
import { useFormik } from "formik";
import { closeModal } from "../utils/modal-controller";

function Login() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      closeModal({ store, setStore }, { logged: true });
      navigate("/home");
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="modalTitle">Sign In</div>
      <InputText
        placeholder="E-mail"
        type="email"
        name="email"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="Password"
        type="password"
        name="password"
        handleChange={formik.handleChange}
      />
      <Button type="submit" text="Login" />
      <button
        className="fontGradient forgot-pass-button"
        name="forgot-pass-button"
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
