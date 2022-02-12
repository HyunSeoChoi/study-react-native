import React, {Component} from 'react';
import {Easing, Animated, StyleSheet, View, Text, Button} from 'react-native';

class AnimOne extends Component {
  constructor() {
    super();
    this.state = {
      mySquare: new Animated.ValueXY(0, 0),
    };
  }

  runAnimation = () => {
    Animated.timing(this.state.mySquare, {
      toValue: {x: 50, y: 300},
      duration: 2000,
      delay: 1500,
      easing: Easing.elastic(3),
    }).start();
  };

  render() {
    return (
      <View>
        <Animated.View
          style={this.state.mySquare.getLayout()} //style={{left: this.mySquare.x, top: this.mySquare.y}}
        >
          <View style={styles.square}></View>
        </Animated.View>
        <Button title="Animation Start" onPress={this.runAnimation} />
      </View>
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
