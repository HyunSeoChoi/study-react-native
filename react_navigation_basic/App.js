import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="User"
            component={UserScreen}
            initialParams={{
              userIdx: 100,
              userName: 'Gildong',
              userLastName: 'Go',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
