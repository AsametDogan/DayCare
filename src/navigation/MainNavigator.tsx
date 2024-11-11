// src/navigation/MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native-paper';
// import CourseList from '../screens/Courses/CourseList';
// Başka sayfalar varsa buraya eklenebilir (ör. Profil, Ayarlar)

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <Tab.Navigator initialRouteName="CourseList">
            <Tab.Screen name="CourseList" component={CourseList} options={{ title: 'Dersler' }} />
            {/* Eklenmesi gereken diğer tab sayfalar */}
        </Tab.Navigator>
    );
}


const CourseList = () => {
    return <Text>CourseList</Text>;
  };