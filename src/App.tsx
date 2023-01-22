import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NotificationsSystem, {
  NotificationsProvider,
  useNotifications,
  atalhoTheme,
} from "reapop";
import "./App.css";
import Layout from "./pages/Layout";
import ModalContainer from "./modals/ModalContainer";
import { isLogged } from "./utils/logged";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import YourBids from "./pages/YourBids";
import { Notificator } from "./components/Notificator";
import { setUpNotifications } from "reapop";

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
              <Route path="/your-bids" element={<YourBids />} />
            </Routes>
            <ModalContainer />
          </BrowserRouter>
        </NotificationsProvider>
      </StoreContext.Provider>
    </>
  );
}

export default App;
