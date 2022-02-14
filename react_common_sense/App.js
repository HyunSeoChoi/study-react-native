import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import SuperText from './src/utils/superText';

class App extends Component {
  checkSupport() {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 13.4) {
        return false;
      }
    } else {
      if (Platform.Version < 27) {
        return false;
      }
    }
    return true;
  }
  render() {
    return (
      <View style={styles.container}>
        {this.checkSupport() ? (
          <SuperText style={styles.div}>
            {/* This is my template! */}
            {Platform.OS === 'ios'
              ? 'This is iOS Phone'
              : 'This is my Android Phone'}
          </SuperText>
        ) : (
          <Text>Sorry, Your phone is not being supported by the app.</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'red',
      },
    }),
  },
});

export default App;
