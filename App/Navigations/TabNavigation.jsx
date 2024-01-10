import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='home' component={HomeScreen}/>
        <Tab.Screen name='booking' component={BookingScreen}/>
        <Tab.Screen name='profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}