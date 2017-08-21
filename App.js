import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      })
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.name : 'Haha';
    let flexSize = parseFloat(this.props.flex);
    let bg = this.props.bg;
    return (
      <View style={{ flex: flexSize, backgroundColor: bg, width: "100%" }}>
        <Text style={styles.blue}>Hello {display}!</Text>
      </View>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  flex: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', convertedText: '' };
    this.convertInput = this.convertInput.bind(this);
  }
  convertInput(text) {
    this.setState({ text: text });
    let cvted = this.state.text.split(' ').map((word) => word && '🍕').join(' ');
    this.setState({ convertedText: cvted });
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Greeting bg="red" flex="1" name="Steven" />
        <Greeting bg="yellow" flex="1" name="Robert" />
        <TextInput style={{ flex: 1, width: "100%" }}
          placeholder="Type something..."
          onChangeText={(text) => this.convertInput(text)} />
        <Text style={{ flex: 1 }}>{this.state.convertedText}</Text>
        <Image source={pic} style={{ width: "100%", flex: 3 }}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: "blue",
    fontSize: 30
  }
});
