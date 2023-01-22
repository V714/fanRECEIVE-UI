import React from "react";
import { StoreContext } from "../App";
import { useNavigate } from "react-router-dom";
import Match from "../components/elements/Match";
import { MatchInterface } from "../models/match";

export default function Matches() {
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);
  const [allMatches, setAllMatches] = React.useState<MatchInterface[]>();
  const [matches, setMatches] = React.useState<MatchInterface[]>();

  React.useEffect(() => {
    setAllMatches([
      {
        isBidded: false,
        title: "Manchaster City vs Napoli",
        type: "Champions League",
        rate1: 1.5,
        rate2: 3.0,
        date: "29.02.2023",
        img: "imgs/matches/mcityvnapoli.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        isBidded: false,
        title: "Lech Poznań vs Pogoń Szczecin",
        type: "Ekstraklasa",
        rate1: -1.2,
        rate2: 2.0,
        date: "29.02.2023",
        img: "imgs/matches/lpoznanvpszczecin.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        isBidded: true,
        title: "Manchaster City vs Napoli #2",
        type: "Champions League",
        rate1: 1.3,
        rate2: 3.2,
        date: "29.02.2023",
        img: "imgs/matches/mcityvnapoli.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]);
  }, []);

  React.useEffect(() => {
    if (allMatches)
      setMatches(
        store.onlyUserBids
          ? allMatches.filter(({ isBidded }) => isBidded)
          : allMatches
      );
  }, [store.onlyUserBids, allMatches]);

  return (
    <div className="matches-container">
      {matches ? (
        matches.map((item) => <Match match={item} />)
      ) : (
        <div style={{ color: "#fff" }}>No matches found!</div>
      )}
    </div>
  );
}
