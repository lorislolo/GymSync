import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Body from './Components/Body'
import Ionicons from 'react-native-vector-icons/Ionicons';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Tarefas</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil</Text>
    </View>
  );
}


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
        component={SettingsScreen}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
  
  );
}