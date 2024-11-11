// src/navigation/AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { RootState } from "../store";

export default function AppNavigator() {
  const isAuthenticated = useSelector((state: RootState) => state.Auth.isAuthenticated);

  return <>{isAuthenticated ? <MainNavigator /> : <AuthNavigator />}</>;
}
