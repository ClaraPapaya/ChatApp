import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Chat from './components/Chat';
import { StyleSheet } from 'react-native';

// Create the navigator
const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
        >
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='Chat'
            component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
});


/* import { StatusBar } from 'expo-status-bar'; <StatusBar style='auto' />\*/