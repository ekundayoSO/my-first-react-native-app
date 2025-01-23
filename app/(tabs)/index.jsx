import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('Hello, welcome to my React Native app!');

  const changeMessage = () => {
    setMessage('I have just made my first change to this app!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Change Message" onPress={changeMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  Button: {
    borderRadius: 10,
  },
});

export default App;
