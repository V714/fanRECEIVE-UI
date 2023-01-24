import { isLogged } from "../utils/logged";

export interface StoreInterface {
  logged: boolean;
  isModalOpen: boolean;
  onlyUserBids: boolean;
  modalImage: string | null;
  selectedModal: React.FC<any> | null;
  isMobile: boolean;
}

export interface StoreContextInterface {
  store: StoreInterface;
  setStore: React.Dispatch<React.SetStateAction<StoreInterface>>;
}

export const storeInit = {
  logged: isLogged(),
  isModalOpen: false,
  onlyUserBids: false,
  modalImage: null,
  selectedModal: null,
  isMobile: false,
};
