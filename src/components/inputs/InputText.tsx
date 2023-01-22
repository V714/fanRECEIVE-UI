import React, { ChangeEvent } from "react";

interface InputTextInterface {
  placeholder: string;
  handleChange: (e: ChangeEvent) => void;
  type: string;
  name: string;
}

function InputText({
  placeholder,
  handleChange,
  type,
  name,
}: InputTextInterface) {
  return (
    <div className="inputText">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={(e) => handleChange(e)}></input>
      <div className="lineGradient"></div>
    </div>
  );
}

export default InputText;
