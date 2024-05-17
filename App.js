import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Body from './Components/Body'
import ListTasks from './Components/ListTasks';
import Profile from './Components/Profile'

const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarShowLabel={false}
      >
        <Tab.Screen
          name="Início"
          component={Body}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Lista de tarefas"
          component={ListTasks}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}