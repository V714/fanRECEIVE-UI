import InputText from "../components/inputs/InputText";
import React from "react";
import { StoreContext } from "../App";
import Button from "../components/inputs/Button";
import { useFormik } from "formik";
import { useNotifications } from "reapop";

function Register() {
  const { store, setStore } = React.useContext(StoreContext);
  const { notify } = useNotifications();

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      city: "",
      password: "",
      repeat_password: "",
    },
    onSubmit: (values) => {
      if (values.password === values.repeat_password) {
        setStore({ ...store, isModalOpen: false });
        console.log(values);
        return;
      }
      notify("Passwords doesn't match", "error");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="modalTitle">Sign up</div>
      <InputText
        placeholder="Username"
        type="text"
        name="username"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="First name"
        type="text"
        name="firstName"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="Last name"
        type="text"
        name="lastName"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="E-mail"
        type="email"
        name="email"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="Age"
        type="text"
        name="age"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="City"
        type="text"
        name="city"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="Password"
        type="password"
        name="password"
        handleChange={formik.handleChange}
      />
      <InputText
        placeholder="Retype password"
        type="password"
        name="repeat_password"
        handleChange={formik.handleChange}
      />
      <Button type="submit" text="Register" />
    </form>
  );
}

export default Register;
