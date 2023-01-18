import InputText from "../components/InputText";
import ButtonBorder from "../components/ButtonBorder";
import React, { FormEvent } from "react";
import { StoreContext } from "../App";

function Register() {
  const [regUsername, setRegUsername] = React.useState("");
  const [regFirstName, setRegFirstName] = React.useState("");
  const [regLastName, setRegLastName] = React.useState("");
  const [regEmail, setRegEmail] = React.useState("");
  const [regAge, setRegAge] = React.useState("");
  const [regCity, setRegCity] = React.useState("");
  const [regPass, setRegPass] = React.useState("");
  const [regRePass, setRegRePass] = React.useState("");
  const { store, setStore } = React.useContext(StoreContext);

  const submitForm = (e: FormEvent) => {
    console.log(e);
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="modalTitle">Sign up</div>
      <InputText
        placeholder="Username"
        type="text"
        name="setRegUsername"
        handleChange={(e) => setRegUsername(e.value)}
      />
      <InputText
        placeholder="First name"
        type="text"
        name="firstNameReg"
        handleChange={(e) => setRegFirstName(e.value)}
      />
      <InputText
        placeholder="Last name"
        type="text"
        name="lastNameReg"
        handleChange={(e) => setRegLastName(e.value)}
      />
      <InputText
        placeholder="E-mail"
        type="email"
        name="emailReg"
        handleChange={(e) => setRegEmail(e.value)}
      />
      <InputText
        placeholder="Age"
        type="text"
        name="ageReg"
        handleChange={(e) => setRegAge(e.value)}
      />
      <InputText
        placeholder="City"
        type="text"
        name="regCity"
        handleChange={(e) => setRegCity(e.value)}
      />
      <InputText
        placeholder="Password"
        type="password"
        name="passReg"
        handleChange={(e) => setRegPass(e.value)}
      />
      <InputText
        placeholder="Retype password"
        type="password"
        name="rePassReg"
        handleChange={(e) => setRegRePass(e.value)}
      />
      <button className="buttonPrimary" type="submit" name="regButton">
        Register
      </button>
    </form>
  );
}

export default Register;
