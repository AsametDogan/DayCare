import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { pathConfig } from "../utils/pathConfig";
import { HomeScreen, ProfileScreen } from "../screens";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator initialRouteName={pathConfig.main.profile}>
      <Tab.Screen
        name={pathConfig.main.profile}
        component={ProfileScreen}
      />
      {/* Eklenmesi gereken diğer tab sayfalar */}
    </Tab.Navigator>
  );
}
