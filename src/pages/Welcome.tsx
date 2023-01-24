import React from "react";
import TopBar from "../components/elements/TopBar";
import { StoreContext } from "../App";
import Register from "../modals/Register";
import { useNavigate } from "react-router-dom";
import Button from "../components/inputs/Button";

function Welcome() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  React.useEffect(() => {
    if (store.logged) navigate("/home");
  }, []);

  return (
    <>
      <img
        id="bgPlayer"
        src={
          store.isMobile
            ? require("../imgs/homeMobile.png")
            : require("../imgs/home.png")
        }
      />
      <div className="welcomeText">
        <p>
          Your save place to <span className="fontGradient">BET</span>
        </p>
        <p>Bet on matches</p>
        <p>Earn money</p>
        <br />
        <Button
          text="Join Now!"
          onClick={() =>
            setStore({ ...store, isModalOpen: true, selectedModal: Register })
          }
        />
      </div>
    </>
  );
}

export default Welcome;
