import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { NotificationsProvider } from "reapop";
import "./index.css";
import Layout from "./pages/Layout";
import ModalContainer from "./modals/ModalContainer";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import { Notificator } from "./components/Notificator";
import { setUpNotifications } from "reapop";
import {
  StoreContextInterface,
  StoreInterface,
  storeInit,
} from "./models/store";
import { setLogged } from "./utils/logged";

export const StoreContext = React.createContext<StoreContextInterface>(
  undefined!
);

export const useStoreContext = () => React.useContext(StoreContext);

function App() {
  const [store, setStore] = React.useState<StoreInterface>(storeInit);

  React.useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: "top-right",
        dismissible: true,
        dismissAfter: 3000,
        showDismissButton: true,
      },
    });
  }, []);

  React.useEffect(() => {
    setLogged(store.logged);
    setStore({ ...store, onlyUserBids: false });
  }, [store.logged]);

  React.useEffect(() => {
    const checkWindowWidth = () => {
      checkAndSetMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkWindowWidth);
    checkWindowWidth();
    return () => window.removeEventListener("resize", checkWindowWidth);
  }, []);

  const checkAndSetMobile = (isMobile: boolean): void => {
    if (isMobile !== store.isMobile) setStore({ ...store, isMobile: isMobile });
  };

  return (
    <>
      <StoreContext.Provider value={{ store, setStore }}>
        <NotificationsProvider>
          <Notificator />
          <BrowserRouter>
            <Layout />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/matches" element={<Matches />} />
            </Routes>
            <ModalContainer />
          </BrowserRouter>
        </NotificationsProvider>
      </StoreContext.Provider>
    </>
  );
}

export default App;
