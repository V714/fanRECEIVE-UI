import { StoreContextInterface } from "../models/store";

export const closeModal = (
  { store, setStore }: StoreContextInterface,
  extra?: {}
): void => {
  setStore({
    ...store,
    isModalOpen: false,
    modalImage: null,
    selectedModal: null,
    ...extra,
  });
};
