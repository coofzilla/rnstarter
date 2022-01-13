import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ErrorMessage from '../components/ErrorMessage';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(input) => setPassword(input)}
      />
      <ErrorMessage input={password} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
