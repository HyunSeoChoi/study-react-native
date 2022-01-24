import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

class PickerComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Picker style={{height: 50, width: 250}}></Picker> */}
      </View>
    );
  }
}

const styles = styleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
});

export default PickerComponent;
