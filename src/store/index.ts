import type { TypedUseSelectorHook } from "react-redux";
import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import type { ThunkAction } from "redux-thunk";
import { useCallback, useContext } from "react";
import { LoadingContext } from "../components/common/loading";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const useSelectorCustom: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatchCustom = () => {
  const dispatch = useReduxDispatch<AppDispatch>();
  const { setLoading } = useContext(LoadingContext);

  const dispatchWithLoading = useCallback(
    async (action: AppThunk | AnyAction) => {
      setLoading(true);
      try {
        const result = await dispatch(action);
        return result;
      } finally {
        setLoading(false);
      }
    },
    [dispatch, setLoading]
  );

  return dispatchWithLoading;
};
