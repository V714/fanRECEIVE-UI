import React from "react";
import { StoreContext } from "../../App";
import Login from "../../modals/Login";
import Register from "../../modals/Register";
import { setLogged } from "../../utils/logged";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../../utils/modal-controller";

function Container() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  const logout = () => {
    closeModal({ store, setStore }, { logged: false });
    navigate("/");
  };

  return (
    <>
      <nav id="topBar">
        <div id="logo" onClick={() => navigate("/")}>
          Fan<p className="fontGradient">RECEIVE</p>
        </div>
        {store.isMobile ? (
          <>
            {" "}
            <button id="hamburger">
              <img src={require("../../imgs/menu.svg")} alt="menu button" />
            </button>
            <ul id="menu-mobile">
              {store.logged ? (
                <>
                  <li onClick={() => navigate("/home")}>Home</li>
                  <li
                    onClick={() => {
                      setStore({ ...store, onlyUserBids: false });
                      navigate("/matches");
                    }}>
                    Matches
                  </li>
                  <li
                    onClick={() => {
                      setStore({ ...store, onlyUserBids: true });
                      navigate("/matches");
                    }}>
                    Your bids
                  </li>
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
          </>
        ) : (
          <ul>
            {store.logged ? (
              <>
                <li onClick={() => navigate("/home")}>Home</li>
                <li
                  onClick={() => {
                    setStore({ ...store, onlyUserBids: false });
                    navigate("/matches");
                  }}>
                  Matches
                </li>
                <li
                  onClick={() => {
                    setStore({ ...store, onlyUserBids: true });
                    navigate("/matches");
                  }}>
                  Your bids
                </li>
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
        )}
      </nav>
    </>
  );
}

export default Container;
