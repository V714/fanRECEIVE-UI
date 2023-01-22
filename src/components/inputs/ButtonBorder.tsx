import React from "react";
import { InputType } from "../models/inputType";

interface ButtonBorderProps {
  text: string;
  onClick?: () => void;
  type?: InputType;
}

function ButtonBorder({ text, onClick, type = "button" }: ButtonBorderProps) {
  return (
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className="buttonAlternativeBorder">
      <div className="bgTexture"></div>
      <div className="buttonAlternativeBackground">
        <div className="buttonAlternative">{text}</div>
      </div>
    </button>
  );
}

export default ButtonBorder;
