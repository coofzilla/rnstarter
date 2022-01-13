import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>child 1</Text>
      <Text style={styles.text}>child 2</Text>
      <Text style={styles.text}>child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
