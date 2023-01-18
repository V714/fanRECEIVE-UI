import InputText from "../components/InputText";
import ButtonBorder from "../components/ButtonBorder";
import LeftArrow from "../imgs/leftArrow.svg";
import React, { FormEvent } from "react";
import { StoreContext } from "../App";
import Login from "./Login";

function ForgotPass() {
  const [forgotEmail, setForgotEmail] = React.useState("");
  const { store, setStore } = React.useContext(StoreContext);

  const submitForm = (e: FormEvent) => {
    console.log(e);
  };

  return (
    <>
      <button
        className="forgotBackArrow"
        onClick={() =>
          setStore({ ...store, isModalOpen: true, selectedModal: Login })
        }>
        <img src={LeftArrow} />
      </button>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="modalTitle">Forgot Password</div>
        <InputText
          placeholder="E-mail"
          type="email"
          name="emailLogin"
          handleChange={(e) => setForgotEmail(e.value)}
        />
        <button className="buttonPrimary" type="submit" name="loginButton">
          Reset Password
        </button>
      </form>
    </>
  );
}

export default ForgotPass;
