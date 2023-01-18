import React from "react";
import TopBar from "../components/TopBar";
import { StoreContext } from "../App";
import Register from "../modals/Register";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  React.useEffect(() => {
    if (store.logged) navigate("/home");
  }, []);

  return (
    <>
      <img id="bgPlayer" src={require("../imgs/home.png")} />
      <div className="welcomeText">
        <p>
          Your save place to <span className="fontGradient">BET</span>
        </p>
        <p>Bet on matches</p>
        <p>Earn money</p>
        <br />
        <button
          className="buttonPrimary"
          onClick={() =>
            setStore({ ...store, isModalOpen: true, selectedModal: Register })
          }>
          Join Now!
        </button>
      </div>
    </>
  );
}

export default Welcome;
