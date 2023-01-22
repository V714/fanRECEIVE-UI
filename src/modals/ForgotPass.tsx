import InputText from "../components/inputs/InputText";
import ButtonBorder from "../components/inputs/ButtonBorder";
import LeftArrow from "../imgs/leftArrow.svg";
import React, { FormEvent } from "react";
import { StoreContext } from "../App";
import Login from "./Login";
import Button from "../components/inputs/Button";
import { useFormik } from "formik";

function ForgotPass() {
  const { store, setStore } = React.useContext(StoreContext);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <button
        className="forgotBackArrow"
        onClick={() =>
          setStore({ ...store, isModalOpen: true, selectedModal: Login })
        }>
        <img src={LeftArrow} />
      </button>
      <form onSubmit={formik.handleSubmit}>
        <div className="modalTitle">Forgot Password</div>
        <InputText
          placeholder="E-mail"
          type="email"
          name="email"
          handleChange={formik.handleChange}
        />
        <Button text="Reset Password" type="submit" />
      </form>
    </>
  );
}

export default ForgotPass;
