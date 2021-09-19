import React from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

// Importing Firebase
const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYYmDQp9MhsH-Fdn2--_XN1pxGGJYQBI8',
  authDomain: 'chat-app-6af0f.firebaseapp.com',
  projectId: 'chat-app-6af0f',
  storageBucket: 'chat-app-6af0f.appspot.com',
  messagingSenderId: '962142039261',
  appId: '1:962142039261:web:c941da35013655d6b4ff34',
  measurementId: 'G-T7HCWXCTF3'
};


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.referenceChatMessages = firebase.firestore().collection('messages');
  }

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    // Firebase authentication
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      // Updates user state with currently active user data
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy('createdAt', 'desc')
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    // stop listening to authentication
    this.authUnsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // Goes through each document
    querySnapshot.forEach((doc) => {
      // Gets the QueryDocumentSnapshot's data
      var data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });

    this.setState({
      messages,
    });
  };

  // Adds message to chat
  addMessage() {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      _id: message._id,
      text: message.text,
      createdAt: message.createdAt,
      user: message.user,
    });
  }

  // Sends the wriiten text to the chat screen
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),
      () => {
        this.addMessage();
      }
    );
  }

  // Changes the color of the speech bubble
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

  render() {
    let color = this.props.route.params.color;
    return (
      <View style={{ flex: 1, backgroundColor: color }}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {/* Fixes the keyboard issue in android that blocks view on the input field*/}
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior='height' /> : null}
      </View>
    )
  }
}