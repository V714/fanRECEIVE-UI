import React from "react";
import Modal from "react-modal";
import { StoreContext } from "../App";
import { render } from "@testing-library/react";

const modalStyles = {
  content: {
    padding: 0,
    border: "none",
    borderRadius: "12px",
    background: "none",
    margin: 0,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    minWidth: "1200px",
    width: "70%",
    height: "70vh",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "#0007",
  },
};

Modal.setAppElement("#root");

function ModalContainer() {
  const storeContext = React.useContext(StoreContext);

  const { store, setStore } = storeContext;

  return (
    <Modal
      isOpen={store.isModalOpen}
      onRequestClose={() => setStore({ ...store, isModalOpen: false })}
      style={modalStyles}>
      <div className={"modal"}>
        <div className="modalImageContainer">
          <div className="modalImageText">
            <div className="modalImageTextTop">
              <p>Welcome to </p>
              <p className="modalImageB">
                Fan<span className="fontGradient">RECEIVE</span>
              </p>
            </div>
            <div className="modalImageTextBottom">
              <p>
                Your save place to <span className="fontGradient">BET</span>
              </p>
            </div>
          </div>
          <img src={require("../imgs/modalPicture.png")} />
        </div>
        <div className="modalFormContainer">
          {store.selectedModal && <store.selectedModal />}
        </div>
      </div>
    </Modal>
  );
}

export default ModalContainer;
