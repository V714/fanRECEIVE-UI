import React from "react";

interface ButtonBorderProps {
  text: string;
  onClick?: () => void;
}

function ButtonBorder({ text, onClick }: ButtonBorderProps) {
  return (
    <button
      onClick={() => onClick && onClick()}
      className="buttonAlternativeBorder">
      <div className="buttonAlternativeBackground">
        <div className="buttonAlternative">{text}</div>
      </div>
    </button>
  );
}

export default ButtonBorder;
