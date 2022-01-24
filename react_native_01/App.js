import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component {
  state = {
    appName: 'Example App',
    random: [],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = position => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    });
    this.setState({
      random: newArray,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName}></Header>
        <Text style={styles.mainText}>Hello, World!</Text>

        <Generator add={this.onAddRandomNum} />

        <ScrollView style={{width: '100%'}} bounces={true}>
          <NumList num={this.state.random} delete={this.onNumDelete} />
        </ScrollView> */}

        <Input />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});

export default App;
