import React from "react";
import ButtonBorder from "../inputs/ButtonBorder";
import Button from "../inputs/Button";
import { StoreContext } from "../../App";
import Login from "../../modals/Login";
import { MatchInterface } from "../../models/match";
import MatchDetails from "../../modals/MatchDetails";

function Match({ match }: { match: MatchInterface }) {
  const { store, setStore } = React.useContext(StoreContext);

  return (
    <div className="match-container">
      <div
        className="match-element-image"
        onClick={() => {
          setStore({
            ...store,
            isModalOpen: true,
            modalImage: match.img,
            selectedModal: () => <MatchDetails match={match} />,
          });
        }}>
        <img src={match.img} alt="match image" />
      </div>
      <div className="match-element-details">
        <div>{match.title}</div>
        <div>
          <div className="match-element-details-small">Date: {match.date}</div>
          <div className="match-element-details-small">Type: {match.type}</div>
          <div className="match-element-details-small">
            Rate: {match.rate1} : {match.rate2}
          </div>
        </div>
      </div>
      <div className="match-element-button">
        {match.isBidded && store.logged ? (
          <Button
            text="Check bid"
            height={30}
            fontSize=".6rem"
            onClick={() => console.log(match)}
          />
        ) : (
          <ButtonBorder
            text="Bid"
            height={30}
            borderPadding={2}
            fontSize=".6rem"
            onClick={() =>
              store.logged
                ? console.log(match)
                : setStore({
                    ...store,
                    isModalOpen: true,
                    selectedModal: Login,
                  })
            }
          />
        )}
      </div>
    </div>
  );
}

export default Match;
