import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "../navigation/AppNavigator";
import { store } from "../store";

export default function Index() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
