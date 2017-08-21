import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
    return (
      <Text>Hello {display}!</Text>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Greeting name="Steven" />
        <Greeting name="Robert" />
        <Image source={pic} style={{ width: 193, height: 110 }}></Image>
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
});
