import React from "react";
import { StoreContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Matches() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  return (
    <>
      <div className="welcomeText">
        <p>Matches</p>
      </div>
    </>
  );
}
