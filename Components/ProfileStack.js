import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import newUser from './newUser';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="newUser" component={newUser} options={{ title: 'Cadastrar Novo Usuário' }} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

