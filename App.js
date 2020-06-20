import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './routes/homeStack'


const Stack = createStackNavigator();




export default function App() {
  
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25
  },
});
