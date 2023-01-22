import React from "react";
import { InputType } from "../../models/inputType";

interface ButtonBorderProps {
  text: string;
  onClick?: () => void;
  type?: InputType;
}

function Button({ text, onClick, type = "button" }: ButtonBorderProps) {
  return (
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className="buttonPrimary ">
      <div className="buttonTexture"></div>
      {text}
    </button>
  );
}

export default Button;
