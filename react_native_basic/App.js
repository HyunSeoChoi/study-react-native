import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';

class App extends Component {
  // state = {
  //   appName: 'Example App',
  //   random: [],
  // };

  // onAddRandomNum = () => {
  //   const randomNum = Math.floor(Math.random() * 100) + 1;
  //   this.setState(prevState => {
  //     return {
  //       random: [...prevState.random, randomNum],
  //     };
  //   });
  // };

  // onNumDelete = position => {
  //   const newArray = this.state.random.filter((num, index) => {
  //     return position != index;
  //   });
  //   this.setState({
  //     random: newArray,
  //   });
  // };

  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
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
        </ScrollView> 
        
        <Input />
        */}
        <Picker />
        <TextInput
          style={styles.input}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true}
        />
        <Button title="Add Text Input" onPress={this.onAddTextInput} />

        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text style={styles.mainText} key={idx}>
              {item}
            </Text>
          ))}
        </ScrollView>
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
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default App;
