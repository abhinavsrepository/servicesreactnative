import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from'../Screens/HomeScreen/HomeScreen;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='home' component={HomeScreen}/>
    </Tab.Navigator>
  )
}