import React from "react";
import { StoreContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function YourBids() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  React.useEffect(() => {
    if (!store.logged) navigate("/");
  }, []);

  return (
    <>
      <div className="welcomeText">
        <p>Your Bids</p>
      </div>
    </>
  );
}
