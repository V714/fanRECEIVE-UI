import React from "react";
import { StoreContext } from "../App";
import Login from "../modals/Login";
import { checkPrime } from "crypto";
import Register from "../modals/Register";
import { setLogged } from "../utils/logged";
import { useNavigate } from "react-router-dom";

function Container() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  const logout = () => {
    setStore({ ...store, logged: false, isModalOpen: false });
    setLogged(false);
    navigate("/");
  };

  return (
    <>
      <nav id="topBar">
        <div id="logo">
          Fan<p className="fontGradient">RECEIVE</p>
        </div>
        <ul>
          {store.logged ? (
            <>
              <li onClick={() => navigate("/home")}>Home</li>
              <li onClick={() => navigate("/matches")}>Matches</li>
              <li onClick={() => navigate("/your-bids")}>Your bids</li>
              <li onClick={() => logout()}>Logout</li>
            </>
          ) : (
            <>
              <li onClick={() => navigate("/matches")}>Matches</li>
              <li
                onClick={() =>
                  setStore({
                    ...store,
                    isModalOpen: true,
                    selectedModal: Login,
                  })
                }>
                Login
              </li>
              <li
                onClick={() =>
                  setStore({
                    ...store,
                    isModalOpen: true,
                    selectedModal: Register,
                  })
                }
                className="liAlternative">
                Register
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Container;
