import React from 'react';
import { ImageBackground, View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const image = require('../assets/background-image.png');

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: ''
    };
  }
  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.appTitle}>Papaya Chat</Text>
        </View>
        <View style={styles.chatOptions}>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder='Your name'
          />
          {/* Background Color options for the user to choose from */}
          <View>
            <Text
              style={styles.backgroundColorText}>
              Choose Background Color:
            </Text>
            <View style={styles.color}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => this.setState({ color: '#090C08' })}
              />
              <TouchableOpacity
                style={styles.color2}
                onPress={() => this.setState({ color: '#474056' })}
              />
              <TouchableOpacity
                style={styles.color3}
                onPress={() => this.setState({ color: '#8A95A5' })}
              />
              <TouchableOpacity
                style={styles.color4}
                onPress={() => this.setState({ color: '#B9C6AE' })}
              />
            </View>
            <Button
              style={[styles.button, styles.buttonText]}
              title="Go to Chat"
              onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name }, { backgroundColor: this.state.color })}
            />
          </View>
        </View>
      </ImageBackground>
    )
  }
};

// Styling for components
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 45,
    fontWeight: '600',
    paddingTop: 50
  },
  chatOptions: {
    flex: 0.40,
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 5,
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-around',
    marginHorizontal: '',
    alignSelf: 'center'
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
  backgroundColorText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#757083',
    marginBottom: 10,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  color1: {
    backgroundColor: '#090C08',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color2: {
    backgroundColor: '#474056',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color3: {
    backgroundColor: '#8A95A5',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color4: {
    backgroundColor: '#B9C6AE',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    color: '#757083'
  },
  buttonText: {
    color: '#FFFFFF'
  },
});
