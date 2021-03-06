import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Stack = createNativeStackNavigator();

/* Stack Navigator
  - Drawer Navigator w/ Drawer Screen C, D,...
  - Tab Navigator
    - Tab Screen F
    - Tab Screen G
  - Stack Screen A
  - Stack Screen B
*/

class App extends Component {
  logoTitle = () => {
    return (
      <Image
        style={{width: 40, height: 40}}
        source={require('./src/assets/pics/home_icon.png')}
      />
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#a4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f3d612',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home Screen',
              headerTitle: <LogoTitle />,
              headerRight: () => (
                <Button
                  title="Info"
                  onPress={() => alert('I am a button!')}
                  color="orange"
                />
              ),
            }}
          />
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
