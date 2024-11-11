import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  modalType: "warning" | "error" | "success" | "info";
  message: string;
  title?: string;
}

const initialState: ModalState = {
  isOpen: false,
  modalType: "info",
  message: "",
  title: "",
};

const reducers = {
  openModal: (
    state: ModalState,
    action: PayloadAction<{
      modalType: "warning" | "error" | "success" | "info";
      title?: string;
      message: string;
    }>
  ) => {
    state.isOpen = true;
    state.modalType = action.payload.modalType;
    state.message = action.payload.message;
    state.title = action.payload?.title || "";
  },
  closeModal: (state: ModalState) => {
    state.isOpen = false;
    state.message = "";
  },
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers,
});
export const { openModal, closeModal } = ModalSlice.actions;
export const { actions, reducer } = ModalSlice;
