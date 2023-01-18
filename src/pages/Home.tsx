import React from "react";
import { StoreContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  React.useEffect(() => {
    if (!store.logged) navigate("/");
  }, []);
  return (
    <>
      <div className="welcomeText">
        <p>Hello again!</p>
      </div>
    </>
  );
}
