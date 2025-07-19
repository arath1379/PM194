import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile';
import Detalle from './detalle'; 

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}