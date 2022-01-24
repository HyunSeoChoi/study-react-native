import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const NumList = props => {
  return props.num.map((item, idx) => (
    <View style={styles.numList} key={idx}>
      <Text>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#CECECE',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
