# ChatApp - Papaya Chat
This project focuses on building a React Native chat application.
## About The Project
### Objective
Using React Native, build a chat app for mobile devices. The app will provide users with a chat interface and options to share images and their location. 
### User Stories
* As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family. 
* As a user, I want to be able to send messages to my friends and family members to exchange the latest news. 
* As a user, I want to send images to my friends to show them what I’m currently doing. 
* As a user, I want to share my location with my friends to show them where I am. 
* As a user, I want to be able to read my messages offline so I can reread conversations at any time. 
* As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.
### Key Features
* A page where users can enter their name and choose a background color for the chat screen 
before joining the chat. 
* A page displaying the conversation, as well as an input field and submit button.  
* The chat must provide users with two additional communication features: sending images 
and location data. 
* Data gets stored online and offline.
### Technical Requirements
* The app must be written in React Native. 
* The app must be developed using Expo. 
* The app must be styled according to the given screen design. 
* Chat conversations must be stored in Google Firestore Database. 
* The app must authenticate users anonymously via Google Firebase authentication. 
* Chat conversations must be stored locally. 
* The app must let users pick and send images from the phone’s image library. 
* The app must let users take pictures with the device’s camera app, and send them. 
* The app must store images in Firebase Cloud Storage. 
* The app must be able to read the user’s location data.
* Location data must be sent via the chat in a map view. 
* The chat interface and functionality must be created using the Gifted Chat library. 
* The app’s codebase must contain comments. 

## Built With
* [Expo](https://expo.io/)
* [React Native](https://reactnative.dev/)
* [Firebase](https://firebase.google.com/)
* [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Android Studio](https://developer.android.com/)
### Dependencies
* expo
* firebase
* netinfo
* react
* react-native
* react-native-async-storage
* react-native-gifted-chat
* react-native-maps
* react-navigation
### Dev Dependencies
* babel

## Getting Started
### Setting Up
To develop and test native apps with [React Native](https://reactnative.dev/), it's recommended to use [Expo](https://docs.expo.io/get-started/installation/). Expo is an open-source platform for making universal native apps that run on Android, iOS, and the web.

+ Node.js
+ Expo Command Line Interface
``` 
npm install --global expo-cli
```
### Configuring
After setting up the project with all the needed dependencies and Expo CLI, you will need to also use the cloud storage with Firebase. For that, create a new project on Firebase and enable authentication with at least the anonymous option activated, so users can use the app. To save messages, create a collection in the Cloud Firestore Database.
Finally, add the SDK Configuration to the Chat component of the app. You'll find this in the "General" tab and it looks like this:

```
const firebaseConfig = {
  apiKey: 'AIzaSyAYYmDQp9MhsH-Fdn2--_XN1pxGGJYQBI8',
  authDomain: 'chat-app-6af0f.firebaseapp.com',
  projectId: 'chat-app-6af0f',
  storageBucket: 'chat-app-6af0f.appspot.com',
  messagingSenderId: '962142039261',
};
// Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
```

### Running The App
Use the command:
``` 
expo start
```
+ You will need an Expo account
+ To test the app on your mobile device install Expo Go 
+ To run the app on your machine via a simulator/emulator: 
     - [Android Studio](https://docs.expo.io/workflow/android-studio-emulator/)
     - [iOS Simulator](https://docs.expo.io/workflow/ios-simulator/) (MacOS only)
