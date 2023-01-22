import React from "react";
import { InputType } from "../../models/input-type";

interface ButtonBorderProps {
  text: string;
  onClick?: () => void;
  type?: InputType;
  height?: number;
  borderPadding?: number;
  fontSize?: string;
}

function ButtonBorder({
  text,
  onClick,
  type = "button",
  height = 70,
  borderPadding = 4,
  fontSize = ".8rem",
}: ButtonBorderProps) {
  return (
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className="buttonAlternativeBorder"
      style={{
        height: height + "px",
        padding: borderPadding + "px",
        fontSize: fontSize,
      }}>
      <div className="bgTexture"></div>
      <div className="buttonAlternativeBackground">
        <div className="buttonAlternative">{text}</div>
      </div>
    </button>
  );
}

export default ButtonBorder;
