// src/navigation/MainNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-paper";
import { pathConfig } from "../utils/pathConfig";
import { ProfileScreen } from "../screens";
// import CourseList from '../screens/Courses/CourseList';
// Başka sayfalar varsa buraya eklenebilir (ör. Profil, Ayarlar)

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator initialRouteName={pathConfig.main.profile}>
      <Tab.Screen name={pathConfig.main.profile} component={ProfileScreen} />
      {/* Eklenmesi gereken diğer tab sayfalar */}
    </Tab.Navigator>
  );
}
