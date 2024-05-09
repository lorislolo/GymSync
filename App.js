import Body from './Components/Body';
import Header from './Components/Header';
import { View, Image } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#000' },
      headerTitleStyle: { color: "#FFF" },
      tabBarShowLabel: false
    }}>
      <Tab.Screen
        name="Home"
        component={Body}
        options={{
          headerShown: false,
          tabBarIcon: () => (
          <Image source={require('./assets/favicon.png')} />
          )
        }}
      />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Body} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
      <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerShown: false
      }}/>
    </NavigationContainer>
  );
}

