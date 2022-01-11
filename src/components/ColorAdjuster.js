import React from 'react';
import { View, Button, Text } from 'react-native';

const ColorAdjuster = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`More ${color}`} />
      <Button onPress={() => onDecrease()} title={`Less ${color}`} />
    </View>
  );
};

export default ColorAdjuster;
