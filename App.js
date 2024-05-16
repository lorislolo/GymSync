import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Body from './Components/Body'
import Ionicons from 'react-native-vector-icons/Ionicons';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarShowLabel={false} 
    >
      <Tab.Screen
        name="Body"
        component={Body}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image style={{width: 24, height: 24}} source={require('./assets/home.png')} />
          ),
          tabBarLabel: 'Home',
          color: '#3b70f9'
        }}
      />
      a
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
  
  );
}