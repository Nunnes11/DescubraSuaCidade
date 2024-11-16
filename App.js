import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native';
import { useGoogleAuth } from './src/services/googleConfig';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  const { user, promptAsync } = useGoogleAuth(); // Obtendo o estado de autenticação

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        {/* Tela de Login */}
        <Stack.Screen name="Login">
          {() => (
            <LoginScreen onLogin={promptAsync} />
          )}
        </Stack.Screen>

        {/* Tela Principal */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


