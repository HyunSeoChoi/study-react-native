import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SuperText from './src/utils/superText';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SuperText style={{backgroundColor: 'red'}}>
          This is my template!
        </SuperText>
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
});

export default App;
