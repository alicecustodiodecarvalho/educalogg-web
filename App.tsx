import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import WelcomeGestor from './screens/WelcomeGestor';
import WelcomeEntregador from './screens/WelcomeEntregador';
import { RootStackParamList } from './screens/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="WelcomeGestor" component={WelcomeGestor} />
        <Stack.Screen name="WelcomeEntregador" component={WelcomeEntregador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
