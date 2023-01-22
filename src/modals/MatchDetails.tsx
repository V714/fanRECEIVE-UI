import InputText from "../components/inputs/InputText";
import ButtonBorder from "../components/inputs/ButtonBorder";
import React from "react";
import { StoreContext } from "../App";
import { useNavigate } from "react-router-dom";
import Button from "../components/inputs/Button";
import { MatchInterface } from "../models/match";
import { closeModal } from "../utils/modal-controller";

function MatchDetails({ match }: { match: MatchInterface }) {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);

  return (
    <div className="modal-match">
      <div className="modalTitle">{match.title}</div>
      <div className="modal-match-description">{match.description}</div>
      <div className="modal-match-buttons-container">
        <Button
          text="Close"
          height={50}
          onClick={() => closeModal({ store, setStore })}
        />
        {!match.isBidded && (
          <ButtonBorder
            text="Bid"
            height={50}
            onClick={() => closeModal({ store, setStore })}
          />
        )}
      </div>
    </div>
  );
}

export default MatchDetails;
