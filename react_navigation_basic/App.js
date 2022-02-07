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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            initialParams={{
              userIdx: 100,
              userName: 'Gildong',
              userLastName: 'Go',
            }}
            // options={{
            //   title: 'User Screen',
            //   headerStyle: {
            //     backgroundColor: 'pink',
            //   },
            //   headerTintColor: 'red',
            //   headerTitleStyle: {
            //     fontWeight: 'bold',
            //     color: 'purple',
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
