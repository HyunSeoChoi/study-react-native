import React, {Component} from 'react';
import {Animated, StyleSheet, View, Text} from 'react-native';

class AnimOne extends Component {
  constructor() {
    super();
    this.mySquare = new Animated.ValueXY(0, 0);
  }

  componentDidMount() {
    Animated.spring(this.mySquare, {
      toValue: {x: 50, y: 300},
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={this.mySquare.getLayout()} //style={{left: this.mySquare.x, top: this.mySquare.y}}
      >
        <View style={styles.square}></View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default AnimOne;
