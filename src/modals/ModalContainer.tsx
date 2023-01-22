import React from "react";
import Modal from "react-modal";
import { StoreContext } from "../App";
import { render } from "@testing-library/react";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass";

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
  const [isWelcomeModal, setIsWelcomeModal] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (store.selectedModal)
      setIsWelcomeModal(checkIfWelcomeModal(store.selectedModal));
  }, [store.selectedModal]);

  const checkIfWelcomeModal = (Component: React.FC): boolean =>
    [Login as React.FC, ForgotPass as React.FC, Register as React.FC].includes(
      Component
    );

  return (
    <Modal
      isOpen={store.isModalOpen}
      onRequestClose={() => setStore({ ...store, isModalOpen: false })}
      style={
        isWelcomeModal
          ? modalStyles
          : {
              ...modalStyles,
              content: {
                ...modalStyles.content,
                minWidth: "500px",
                width: "600px",
              },
            }
      }>
      <div className={"modal"}>
        {isWelcomeModal && (
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
        )}
        <div
          className="modalFormContainer"
          style={!isWelcomeModal ? { width: "100%" } : {}}>
          {store.selectedModal && <store.selectedModal />}
        </div>
      </div>
    </Modal>
  );
}

export default ModalContainer;
