import React from 'react';
import { ImageBackground, View, TextInput, Text, Button, StyleSheet } from 'react-native';

const image = require('../assets/background-image.png');

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.appTitle}>Papaya Chat</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder='Your name'
          />
          <Button
            style={[styles.button, styles.buttonText]}
            title="Go to Chat"
            onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })}
          />
        </View>
      </ImageBackground>
    )
  }
};

// Styling for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 45,
    fontWeight: '600'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 50
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    color: '#757083'
  },
  buttonText: {
    color: '#FFFFFF'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
