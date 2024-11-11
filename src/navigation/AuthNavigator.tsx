import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const LoginPage = () => {
  return <Text>LoginPage</Text>;
};
