import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { ReactComponentElement } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import ModalContainer from "./modals/ModalContainer";
import { isLogged } from "./utils/logged";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import YourBids from "./pages/YourBids";

interface StoreInterface {
  logged: boolean;
  isModalOpen: boolean;
  selectedModal: React.FC | null;
}

interface StoreContextInterface {
  store: StoreInterface;
  setStore: React.Dispatch<React.SetStateAction<StoreInterface>>;
}

const storeInit = {
  logged: isLogged(),
  isModalOpen: false,
  selectedModal: null,
};

export const StoreContext = React.createContext<StoreContextInterface>(
  undefined!
);

export const useStoreContext = () => React.useContext(StoreContext);

function App() {
  const [store, setStore] = React.useState<StoreInterface>(storeInit);

  return (
    <>
      <StoreContext.Provider value={{ store, setStore }}>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/your-bids" element={<YourBids />} />
          </Routes>
          <ModalContainer />
        </BrowserRouter>
      </StoreContext.Provider>
    </>
  );
}

export default App;
