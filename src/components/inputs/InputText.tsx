import React, { ChangeEvent } from "react";

interface inputTextInterface {
  placeholder: string;
  handleChange: (e: ChangeEvent) => void;
  type: string;
  name: string;
}

function inputText({
  placeholder,
  handleChange,
  type,
  name,
}: inputTextInterface) {
  return (
    <div className="input-text">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={(e) => handleChange(e)}></input>
      <div className="line-gradient"></div>
    </div>
  );
}

export default inputText;
