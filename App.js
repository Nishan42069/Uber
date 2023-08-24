import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';


export default function App() {

const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior={{ height: 1}}
        style={{ flex: 1}}
        keyboardVerticalOffset={{ height: -64}}>
        <Stack.Navigator>
          <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen} option={{
            headerShown: false,
          }}
          /> 
          <Stack.Screen 
          name="MapScreen"
          component={MapScreen} option={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      <HomeScreen />
      </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}


