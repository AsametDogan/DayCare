import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { pathConfig } from "../utils/pathConfig";
import { LoginScreen } from "../screens";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={pathConfig.unauth.login}>
      <Stack.Screen
        name={pathConfig.unauth.login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
