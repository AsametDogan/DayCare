import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { pathConfig } from "../utils/pathConfig";
import { CodeScreen, HomeScreen, LoginScreen } from "../screens";


export type AuthStackParamList = {
  Code: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={pathConfig.unauth.code}>
      <Stack.Screen
        name={pathConfig.unauth.code}
        component={CodeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={pathConfig.unauth.login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
