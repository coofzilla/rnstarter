import React from 'react';
import { Text } from 'react-native';

const ErrorMessage = ({ input }) => {
  if (input.length < 6) {
    return <Text>Password must be longer than 5 characters</Text>;
  }
  return null;
};

export default ErrorMessage;
