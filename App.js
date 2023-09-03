// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/logIn';
import SignupScreen from './screens/signup';
import ForgotPasswordScreen from './screens/forgotPassword';
import HomeScreen from './screens/homeScreen';
import SummerizedPageScreen from './screens/summerizedPage';

import CameraScreen from './screens/camera';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Camera" options={{headerShown:false}} component={CameraScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Signup" options={{headerShown:false}} component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" options={{headerShown:false}} component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="SummerizedPage" options={{headerShown:false}} component={SummerizedPageScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;